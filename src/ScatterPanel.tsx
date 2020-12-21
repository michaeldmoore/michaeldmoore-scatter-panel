import React from 'react';
import * as d3 from 'd3';

import { PanelProps } from '@grafana/data';

import { FieldSet, Margins, ScatterOptions } from 'types';

interface Props extends PanelProps<ScatterOptions> { }

export const ScatterPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const frame = data.series[0];

  let panelId = data.request?.panelId as number;

  let colData = new Array();
  frame.fields.forEach((field, i) => {
    colData.push({
      name: field.name,
      displayName: field.config?.displayName || field.name,
      values: field.values.toArray().map(Number)
    });
  })

  if (colData.length < 2) {
    return (
      <div style={{ overflow: 'hidden', height: '100%' }}>
        <p>To get started, create a table query that returns 2 or more numeric columns</p>
      </div>
    );
  }
  else if (options.xAxisField >= colData.length) {
    return (
      <div style={{ overflow: 'hidden', height: '100%' }}>
        <p>X Axis field setting not found in current query</p>
      </div>
    );
  }
  else {
    let fieldSets = options.fieldSets.filter(x => x != null && x?.col >= 0 && x?.col < colData.length);
    if (fieldSets.length == 0) {
      return (
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <p>No Y Axis(s) data found in current query</p>
        </div>
      );
    }
    else {
      return generateContent(options, /*data, */width, height, fieldSets, colData, panelId);
    }
  }
}

function generateContent(options: ScatterOptions, width: number, height: number, fieldSets: FieldSet[], colData: { name: string, displayName: string, values: number[] }[], panelId: number) {
  let visibleFieldSets = fieldSets;//.filter(f => { return (!f.hidden)});

  let colValues = colData.map(c => { return c.values });
  let colNames = colData.map(c => { return c.displayName || c.name })
  let xValues = colValues[options.xAxisField];
  let xExtent = [
    options.xAxisExtents.min == 0 ? 0 : options.xAxisExtents.min || d3.min(xValues),
    options.xAxisExtents.max == 0 ? 0 : options.xAxisExtents.max || d3.max(xValues)
  ];

  let yValues = visibleFieldSets.map(f => { return colValues[f.col] });
  let yExtents = yValues.map(c => { return d3.extent(c) });
  let yExtent = [
    options.yAxisExtents.min == 0 ? 0 : options.yAxisExtents.min || d3.min(yExtents.map(c => { return c[0] }) as number[]),
    options.yAxisExtents.max == 0 ? 0 : options.yAxisExtents.max || d3.max(yExtents.map(c => { return c[1] }) as number[])
  ];

  let margins = new Margins(20, 10, 20, 30);

  let legend = drawLegend(options, width, height, margins, colNames, panelId);
  let yTitle = drawYTitle(options, width, height, margins);
  let xTitle = drawXTitle(options, width, height, margins);
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
    .range([margins.left, width - margins.right]);

  const xAxis = d3.axisBottom(xScale).tickSize(margins.top + margins.bottom - height);

  const yScale = d3
    .scaleLinear()
    .nice()
    .domain(yExtent as [number, number])
    .range([height - margins.bottom, margins.top]);

  const yAxis = d3.axisLeft(yScale).tickSize(margins.left + margins.right - width);

  return (
    <svg
      width={width}
      height={height}>
      <g className={"ScatterPanel-" + panelId}>
        {legend}
        {xTitle}
        {yTitle}
        {/*border*/}
        <g
          transform={`translate(0, ${height - margins.bottom})`}
          ref={node => {
            d3.select(node).call(xAxis as any).selectAll("line").attr("stroke", options.gridColor);
          }}
        />
        <g
          transform={`translate(${margins.left}, 0)`}
          ref={node => {
            d3.select(node).call(yAxis as any).selectAll("line").attr("stroke", options.gridColor);
          }}
        />
        <g>
          {visibleFieldSets.map((y, i: number) => (
            xValues.map((x, j) => {
              let className = "ScatterSet-" + i;
              if (options.showLegend && visibleFieldSets[i].hidden)
                className += " ScatterSetHidden";

              return <circle
                cx={xScale(x)}
                cy={yScale(yValues[i][j])}
                r={y.size}
                className={className}
                fill={y.color} />
            })
          ))}
        </g>
      </g>
    </svg>
  );
};

function applySetFieldSetHidden(fieldSet: FieldSet, index: number, hidden: boolean, panelId: number) {
  fieldSet.hidden = hidden;

  let panelGroup = $(".ScatterPanel-" + panelId)
  let markers = $(".ScatterSet-" + index, panelGroup);
  if (hidden)
    markers.addClass("ScatterSetHidden");
  else
    markers.removeClass("ScatterSetHidden");
}

function onLegendClick(e: React.MouseEvent, index: number, fieldSets: FieldSet[], panelId: number) {
  let thisLegendTextElement = $(e.currentTarget);
  let legendGroup = thisLegendTextElement.parent();
  let legendTextElements = $(".ScatterLegendText", legendGroup);

  let hiddenLegendTextElements = legendTextElements.filter(".ScatterLegendTextHidden");

  if (e.ctrlKey) {
    // toggle the state of the current item
    thisLegendTextElement.toggleClass("ScatterLegendTextHidden");
    applySetFieldSetHidden(fieldSets[index], index, !fieldSets[index].hidden, panelId)
  }
  else if (hiddenLegendTextElements.length == 0) {
    // if none are hidden, hide everything else
    legendTextElements.addClass("ScatterLegendTextHidden");
    thisLegendTextElement.toggleClass("ScatterLegendTextHidden");
    fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, index != i, panelId) })
  }
  else {
    // if this item is visible, unhide everything
    if (!thisLegendTextElement.hasClass("ScatterLegendTextHidden")) {
      legendTextElements.removeClass("ScatterLegendTextHidden");
      fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, false, panelId) })
    }
    else {
      // hide everything but this one
      legendTextElements.addClass("ScatterLegendTextHidden");
      thisLegendTextElement.toggleClass("ScatterLegendTextHidden");
      fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, index != i, panelId) })
    }
  }
};

function drawLegend(options: ScatterOptions, width: number, height: number, margins: Margins, colNames: string[], panelId: number) {
  if (options.showLegend) {
    let scale = options.legendSize;
    let fieldSets = options.fieldSets.filter((x: FieldSet) => x.col >= 0 && x.col < colNames.length)

    let maxLength = d3.max(fieldSets.map(f => colNames[f.col].length)) as number;

    if (fieldSets.length > 0) {

      let offset = 20;
      let dx = offset + (8.6 * scale * maxLength);

      margins.right += dx;

      let legends = new Array();

      fieldSets.forEach((f, i) => {
        let className = f.hidden ? "ScatterLegendText ScatterLegendTextHidden" : "ScatterLegendText"
        legends.push(
          <text
            transform={`translate(${offset}, ${30 * scale * i}) scale(${scale})`}
            className={className}
            alignment-baseline="hanging"
            text-anchor="left"
            fill={f.color}
            onClick={e => {
              onLegendClick(e, i, fieldSets, panelId);
            }}
          >{colNames[f.col]}</text>);
      }
      );

      return <g transform={`translate(${width - dx}, ${margins.top})`}>
        {legends}
      </g>;
    }
  }

  return null;
}

function drawXTitle(options: ScatterOptions, width: number, height: number, margins: Margins) {
  let title = options.xAxisTitle;
  if (title.text) {
    let scale = title.size;
    let dx = 8.2 * scale * title.text.length;
    let dy = 14;

    margins.bottom += dy * scale;

    return <g
      transform={`translate(${(width + margins.left - margins.right) / 2.0}, ${height - dy * scale}) scale(${scale})`}
    >
      <text
        className="ScatterXTitleRect"
        alignment-baseline="hanging"
        text-anchor="middle"
        width={dx}
        height={dy}
        fill={title.color}
      >{title.text}</text>
    </g>;
  }
  return null;
}

function drawYTitle(options: ScatterOptions, width: number, height: number, margins: Margins) {
  let title = options.yAxisTitle;
  if (title.text) {
    let scale = title.size;
    let dx = 8.2 * title.text.length;
    let dy = 14;

    if (options.rotateYAxisTitle) {
      margins.left += dy * scale;

      return <g
        transform={`translate(0, ${(height - margins.top - margins.bottom) / 2.0}) rotate(-90) scale(${scale})`}
      >
        <text
          className="ScatterXTitleRect"
          alignment-baseline="hanging"
          text-anchor="middle"
          width={dx}
          height={dy}
          fill={title.color}
        >{title.text}</text>
      </g>;
    }
    else {
      margins.left += dx * scale;

      return <g
        transform={`translate(0, ${(height - margins.top - margins.bottom) / 2.0}) scale(${scale})`}
      >
        <text
          className="ScatterXTitleRect"
          text-anchor="left"
          width={dx}
          height={dy}
          fill={title.color}
        >{title.text}</text>
      </g>;
    }
  }
  return null;
}
