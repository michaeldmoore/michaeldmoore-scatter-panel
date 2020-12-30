import { PanelProps } from '@grafana/data'
import $ from 'jquery'
import * as d3 from 'd3'
import React from 'react'
import { FieldSet, Margins, ScatterOptions } from 'types'
import regression, { DataPoint } from 'regression'
import './ScatterEditor.css'

interface Props extends PanelProps<ScatterOptions> { };

export const ScatterPanel: React.FC<Props> = ({ options, data, width, height }) => {
  if (data.series?.length > 0) {
    const frame = data.series[0]

    const panelId = data.request?.panelId as number

    const colData = new Array(0)
    frame.fields.forEach((field, i) => {
      colData.push({
        name: field.name,
        displayName: field.config?.displayName || field.name,
        values: field.values.toArray().map(Number)
      })
    })

    if (colData.length < 2) {
      return (
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <p>To get started, create a table query that returns 2 or more numeric columns</p>
        </div>
      )
    } else if (options.xAxis.col >= colData.length) {
      return (
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <p>X Axis field setting not found in current query</p>
        </div>
      )
    } else {
      const fieldSets = options.fieldSets.filter(x => x != null && x?.col >= 0 && x?.col < colData.length)
      if (fieldSets.length === 0) {
        return (
          <div style={{ overflow: 'hidden', height: '100%' }}>
            <p>No Y Axis(s) data found in current query</p>
          </div>
        )
      } else {
        return generateContent(options, /* data, */width, height, fieldSets, colData, panelId)
      }
    }
  }
  else {
    return (
      <div style={{ overflow: 'hidden', height: '100%' }}>
        <p>No data</p>
        <p>To get started, create a table query that returns 2 or more numeric columns</p>
      </div>
    )
  }
}

function generateContent (options: ScatterOptions, width: number, height: number, fieldSets: FieldSet[], colData: { name: string, displayName: string, values: number[] }[], panelId: number) {
  const visibleFieldSets = fieldSets// .filter(f => { return (!f.hidden)});

  const colValues = colData.map(c => { return c.values })
  const colNames = colData.map(c => { return c.displayName || c.name })
  const xValues = colValues[options.xAxis.col]
  const xExtent = [
    options.xAxisExtents.min === 0 ? 0 : options.xAxisExtents.min || d3.min(xValues),
    options.xAxisExtents.max === 0 ? 0 : options.xAxisExtents.max || d3.max(xValues)
  ] as number[];

  const yValues = visibleFieldSets.map(f => { return colValues[f.col] })
  const yExtents = yValues.map(c => { return d3.extent(c) })
  const yExtent = [
    options.yAxisExtents.min === 0 ? 0 : options.yAxisExtents.min || d3.min(yExtents.map(c => { return c[0] }) as number[]),
    options.yAxisExtents.max === 0 ? 0 : options.yAxisExtents.max || d3.max(yExtents.map(c => { return c[1] }) as number[])
  ] as number[];

  const margins = new Margins(20, 10, 20, 30)

  const legend = drawLegend(options, width, height, margins, colNames, panelId)
  const yTitle = drawYTitle(options, width, height, margins)
  const xTitle = drawXTitle(options, width, height, margins)
  /*
  let border = <rect
    transform={`translate(${margins.left}, ${margins.top})`}
    width={width - margins.left - margins.right}
    height={height - margins.top - margins.bottom}
    stroke="yellow"
    strokeWidth="1"
  />
*/

  const xScale = d3
    .scaleLinear()
    .nice()
    .domain(xExtent as [number, number])
//    .range([margins.left, width - margins.right])
    .range([options.xAxis.inverted ? (width - margins.right) : margins.left, options.xAxis.inverted ? margins.left : (width - margins.right)])

  const xAxis = d3.axisBottom(xScale).tickSize(margins.top + margins.bottom - height)

  const yScale = d3
    .scaleLinear()
    .nice()
    .domain(yExtent as [number, number])
    .range([height - margins.bottom, margins.top])

  const yAxis = d3.axisLeft(yScale).tickSize(margins.left + margins.right - width)

  return (
    <svg
      width={width}
      height={height}>
      <g className={'ScatterPanel-' + panelId}>
        {legend}
        {xTitle}
        {yTitle}
        {/* border */}
        <g
          transform={`translate(0, ${height - margins.bottom})`}
          ref={node => {
            d3.select(node).call(xAxis as any).selectAll('line').attr('stroke', options.gridColor)
          }}
        />
        <g
          transform={`translate(${margins.left}, 0)`}
          ref={node => {
            d3.select(node).call(yAxis as any).selectAll('line').attr('stroke', options.gridColor)
          }}
        />
        <g>
          { drawLines(options, visibleFieldSets, xValues, yValues, xScale, yScale, xExtent, yExtent) }
        </g>
        <g>
          { drawDots(options, visibleFieldSets, xValues, yValues, xScale, yScale) }
        </g>
      </g>
    </svg>
  )
};

function applySetFieldSetHidden (fieldSet: FieldSet, index: number, hidden: boolean, panelId: number) {
  fieldSet.hidden = hidden

  const panelGroup = $('.ScatterPanel-' + panelId)
  const markers = $('.ScatterSet-' + index, panelGroup)
  if (hidden) { markers.addClass('ScatterSetHidden') } else { markers.removeClass('ScatterSetHidden') }

  const lines = $('.ScatterLine-' + index, panelGroup)
    if (hidden) { lines.addClass('ScatterLineHidden') } else { lines.removeClass('ScatterLineHidden') }
}

function onLegendClick (e: React.MouseEvent, index: number, fieldSets: FieldSet[], panelId: number) {
  const thisLegendTextElement = $(e.currentTarget)
  const legendGroup = thisLegendTextElement.parent()
  const legendTextElements = $('.ScatterLegendText', legendGroup)

  const hiddenLegendTextElements = legendTextElements.filter('.ScatterLegendTextHidden')

  if (e.ctrlKey) {
    // toggle the state of the current item
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden')
    applySetFieldSetHidden(fieldSets[index], index, !fieldSets[index].hidden, panelId)
  } else if (hiddenLegendTextElements.length === 0) {
    // if none are hidden, hide everything else
    legendTextElements.addClass('ScatterLegendTextHidden')
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden')
    fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, index !== i, panelId) })
  } else {
    // if this item is visible, unhide everything
    if (!thisLegendTextElement.hasClass('ScatterLegendTextHidden')) {
      legendTextElements.removeClass('ScatterLegendTextHidden')
      fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, false, panelId) })
    } else {
      // hide everything but this one
      legendTextElements.addClass('ScatterLegendTextHidden')
      thisLegendTextElement.toggleClass('ScatterLegendTextHidden')
      fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, index !== i, panelId) })
    }
  }
};

function drawLegend (options: ScatterOptions, width: number, height: number, margins: Margins, colNames: string[], panelId: number) {
  if (options.legend.show) {
    const scale = options.legend.size / 2;
    const fieldSets = options.fieldSets.filter((x: FieldSet) => x.col >= 0 && x.col < colNames.length)

    const maxLength = d3.max(fieldSets.map(f => colNames[f.col].length)) as number

    if (fieldSets.length > 0) {
      const offset = 20
      const dx = offset + (8.6 * scale * maxLength)

      margins.right += dx

      const legends = new Array(0)

      fieldSets.forEach((f, i) => {
        const className = f.hidden ? 'ScatterLegendText ScatterLegendTextHidden' : 'ScatterLegendText'
        legends.push(
          <text
            transform={`translate(${offset}, ${30 * scale * i}) scale(${scale})`}
            className={className}
            alignmentBaseline="hanging"
            textAnchor="left"
            fill={f.color}
            onClick={e => {
              onLegendClick(e, i, fieldSets, panelId)
            }}
          >{colNames[f.col]}</text>)
      }
      )

      return <g transform={`translate(${width - dx}, ${margins.top})`}>
        {legends}
      </g>
    }
  }

  return null
}

function drawXTitle (options: ScatterOptions, width: number, height: number, margins: Margins) {
  const title = options.xAxisTitle
  if (title.text) {
    const scale = title.textSize
    const dx = 8.2 * scale * title.text.length
    const dy = 14

    margins.bottom += dy * scale

    return <g
      transform={`translate(${(width + margins.left - margins.right) / 2.0}, ${height - dy * scale}) scale(${scale})`}
    >
      <text
        className="ScatterXTitleRect"
        alignmentBaseline="hanging"
        textAnchor="middle"
        width={dx}
        height={dy}
        fill={title.color}
      >{title.text}</text>
    </g>
  }
  return null
}

function drawYTitle (options: ScatterOptions, width: number, height: number, margins: Margins) {
  const title = options.yAxisTitle
  if (title.text) {
    const scale = title.textSize
    const dx = 8.2 * title.text.length
    const dy = 14
 
    if (options.rotateYAxisTitle) {
      margins.left += dy * scale

      return <g
        transform={`translate(0, ${(height - margins.top - margins.bottom) / 2.0}) rotate(-90) scale(${scale})`}
      >
        <text
          className="ScatterXTitleRect"
          alignmentBaseline="hanging"
          textAnchor="middle"
          width={dx}
          height={dy}
          fill={title.color}
        >{title.text}</text>
      </g>
    } else {
      margins.left += dx * scale

      return <g
        transform={`translate(0, ${(height - margins.top - margins.bottom) / 2.0}) scale(${scale})`}
      >
        <text
          className="ScatterXTitleRect"
          textAnchor="left"
          width={dx}
          height={dy}
          fill={title.color}
        >{title.text}</text>
      </g>
    }
  }
  return null
}

function drawLines(options: ScatterOptions, fieldSets: FieldSet[], xValues: number[], yValues:number[][], xScale: Function, yScale: Function, xExtent: number[], yExtent: number[]){
  let lines = new Array(0);

  fieldSets.forEach((f, index) => {
    let fieldSet = fieldSets[index];
    if (fieldSet.lineType !== 'none' && fieldSet.lineSize > 0){
      let path = '';

      if (fieldSet.lineType === 'simple') {
        path = `
        ${xValues.map((d, i) => {
            return `${i === 0 ? 'M' : 'L'} ${xScale(d)} ${yScale(yValues[index][i])}`;
        }).join(' ')}
      `;
      }
      else if (fieldSet.lineType === 'linear') {
        // using the regression package, first create an array of arrays for the X/Y values
        let xyData = xValues.map((d, i) => { return [d, yValues[index][i]]; }) as DataPoint[];

        let reg = regression.linear(xyData);
        let x0 = xExtent[0];
        let y0 = x0 * reg.equation[0] + reg.equation[1];
        if (y0 < yExtent[0]){
          y0 = yExtent[0];
          x0 = (y0 - reg.equation[1]) / reg.equation[0];
        }
        if (y0 > yExtent[1]){
          y0 = yExtent[1];
          x0 = (y0 - reg.equation[1]) / reg.equation[0];
        }
        let x1 = xExtent[1];  
        let y1 = x1 * reg.equation[0] + reg.equation[1];
        if (y1 < yExtent[0]){
          y1 = yExtent[0];
          x1 = (y1 - reg.equation[1]) / reg.equation[0];
        }
        if (y1 > yExtent[1]){
          y1 = yExtent[1];
          x1 = (y1 - reg.equation[1]) / reg.equation[0];
        }

        path = `M ${xScale(x0)} ${yScale(y0)} L ${xScale(x1)} ${yScale(y1)}`;
      }

      if (path.length) {
        let className = "ScatterLine ScatterLine-" + index;
        if (options.legend.size && fieldSet.hidden)
              className += " ScatterLineHidden";

        lines.push(<path className={className} d={path} stroke={fieldSet.color} strokeWidth={fieldSet.lineSize} fill="none"/>);
      }
    }
  })

  return lines;
}

function drawDots(options: ScatterOptions, fieldSets: FieldSet[], xValues: number[], yValues:number[][], xScale: Function, yScale: Function){
  return fieldSets.map((y, i: number) => (
    xValues.map((x, j) => {
      if (y.dotSize > 0) {
        let className = 'ScatterSet-' + i
        if (options.legend.size && fieldSets[i].hidden) { 
          className += ' ScatterSetHidden' 
        }

        return <circle
          key={'circle-[' + y + '][' + i + ']'}
          cx={xScale(x)}
          cy={yScale(yValues[i][j])}
          r={y.dotSize}
          className={className}
          fill={y.color} />
      }
      else
        return null;
    })
  ))
}