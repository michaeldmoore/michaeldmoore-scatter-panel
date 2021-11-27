import * as React from 'react';
import { PanelProps } from '@grafana/data';
import $ from 'jquery';
import * as d3 from 'd3';
import regression, { DataPoint } from 'regression';
import { ScatterOptions } from 'types/ScatterOptions';
import { ColData } from 'types/ColData';
import { MarginPair } from 'types/MarginPair';
import { XAxis } from 'types/XAxis';
import { FieldSet } from 'types/FieldSet';
import { Title } from 'types/Title';
import './ScatterPanel.css';

const randomColor = require('randomcolor');

interface Props extends PanelProps<ScatterOptions> { }

function autoConfigure(options: ScatterOptions, colData: ColData[]) {
  if (options.xAxis.col === -1 || options.xAxis.col >= colData.length) {
    options.xAxis = new XAxis(0, false);
  }

  if (options.xAxisTitle.text.length === 0) {
    options.xAxisTitle = new Title(colData[0].displayName, 'white', 2);
  }

  options.fieldSets = options.fieldSets.filter((f) => f.col >= 0 && f.col < colData.length && f.col !== options.xAxis.col);

  if (options.fieldSets.length === 0) {
    const fieldSets = colData.map((f, i) => new FieldSet(i, -1, randomColor(), 3, 1, 'none', false));

    options.fieldSets = fieldSets.filter((c) => c.col !== options.xAxis.col);
  }

  options.xMargins.lower = 30;
  options.xMargins.upper = 10;
  options.yMargins.lower = 20;
  options.yMargins.upper = 20;
}
/*
function evaluateYLinear(reg: regression.Result, x: number) {
  return (reg.equation[0] * x) + reg.equation[1];
}

function evaluateXLinear(reg: regression.Result, y: number) {
  return (y - reg.equation[1]) / reg.equation[0];
}

function evaluateYExponential(reg: regression.Result, x: number) {
  return reg.equation[0] * Math.exp(reg.equation[1] * x);
}

function evaluateYPower(reg: regression.Result, x: number) {
  return reg.equation[0] * (x ** reg.equation[1]);
}
*/
function getRegression(method: string, xyData: regression.DataPoint[]) {
  switch (method) {
    case 'exponential':
      return regression.exponential(xyData);
      break;

    case 'power':
      return regression.power(xyData);
      break;

    case 'linear':
    default:
      return regression.linear(xyData);
      break;

  }
}

function evaluate(method: string, reg: regression.Result, val: number) {
  switch (method) {
    case "exponential":
      return reg.equation[0] * Math.exp(reg.equation[1] * val);
      break;

    case "power":
      return reg.equation[0] * (val ** reg.equation[1]);
      break;

    case "XLinear":
      return (val - reg.equation[1]) / reg.equation[0];
      break;

    case "YLinear":
    default:
      return (reg.equation[0] * val) + reg.equation[1];
      break;
  }
}

function drawLines(
  options: ScatterOptions,
  fieldSets: FieldSet[],
  xValues: number[],
  yValues: number[][],
  xScale: Function,
  yScale: Function,
  xExtent: number[],
  yExtent: number[],
) {
  const lines = new Array(0) as JSX.Element[];

  fieldSets.forEach((fieldSet, index) => {
    if (fieldSet.lineType !== 'none' && fieldSet.lineSize > 0) {
      let path = '';

      const xyData = xValues.map((d, i) => [d, yValues[index][i]]).filter(xy => xy[1] != null) as DataPoint[];
      if (fieldSet.lineType === 'simple') {
        path = `
        ${xyData.map((xy, i) => `${i === 0 ? 'M' : 'L'} ${xScale(xy[0])} ${yScale(xy[1])}`).join(' ')}
      `;
      } else if (fieldSet.lineType === 'linear') {
        // using the regression package, first create an array of arrays for the X/Y values
        //const xyData = xValues.map((d, i) => [d, yValues[index][i]]) as DataPoint[];

        const reg = getRegression(fieldSet.lineType, xyData);

        // check for start and end points inside the plotted area
        let x0 = xExtent[0];
        let y0 = evaluate('YLinear', reg, x0);
        if (y0 < yExtent[0]) {
          y0 = yExtent[0];
          x0 = evaluate('XLinear', reg, y0);
        }
        if (y0 > yExtent[1]) {
          y0 = yExtent[1];
          x0 = evaluate('XLinear', reg, y0);
        }

        let x1 = xExtent[1];
        let y1 = evaluate('YLinear', reg, x1);
        if (y1 < yExtent[0]) {
          y1 = yExtent[0];
          x1 = evaluate('XLinear', reg, y1);
        }
        if (y1 > yExtent[1]) {
          y1 = yExtent[1];
          x1 = evaluate('XLinear', reg, y1);
        }

        path = `M ${xScale(x0)} ${yScale(y0)} L ${xScale(x1)} ${yScale(y1)}`;
      } else /*if (fieldSet.lineType === 'exponential')*/ {
        // using the regression package, first create an array of arrays for the X/Y values
        //const xyData = xValues.map((d, i) => [d, yValues[index][i]]) as DataPoint[];

        const reg = getRegression(fieldSet.lineType, xyData);

        const x0 = xExtent[0];
        const x1 = xExtent[1];

        const steps = 100;
        const dx = (x1 - x0) / (steps - 1);
        const xys = new Array(0);
        for (let i = 0; i < steps; i++) {
          const x = x0 + i * dx;
          const y = evaluate(fieldSet.lineType, reg, x);
          xys.push([x, y]);
        }
        path = `
        ${xys.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[1])}`).join(' ')}
      `;
      }
/*       else if (fieldSet.lineType === 'power') {
        // using the regression package, first create an array of arrays for the X/Y values
        //const xyData = xValues.map((d, i) => [d, yValues[index][i]]) as DataPoint[];

        const reg = getRegression(fieldSet.lineType, xyData);

        let x0 = xExtent[0];
        if (x0 < 0) { x0 = 0; } // Domain for power regressions MUST be positive

        const x1 = xExtent[1];

        const steps = 100;
        const dx = x0 + (x1 - x0) / steps;
        const xys = new Array(0);
        for (let i = 0; i < steps; i++) {
          const x = x0 + i * dx;
          const y = evaluate(fieldSet.lineType, reg, x);
          xys.push([x, y]);
        }
        path = `
        ${xys.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[1])}`).join(' ')}
      `;
      }
*/
      if (path.length) {
        let className = `ScatterLine ScatterLine-${index}`;
        if (options.legend.size && fieldSet.hidden) {
          className += ' ScatterLineHidden';
        }

        lines.push(
          <path
            key={`line-[${index}]`}
            className={className}
            d={path}
            stroke={fieldSet.color}
            strokeWidth={fieldSet.lineSize}
            fill="none"
          />,
        );
      }
    }
  });

  return lines;
}

function drawDots(options: ScatterOptions,
  fieldSets: FieldSet[],
  xValues: number[],
  yValues: number[][],
  colValues: number[][],
  xScale: Function,
  yScale: Function) {

  return fieldSets.map((y, i: number) => (
    xValues.map((x, j) => {
      const dotSize = y.sizeCol >= 0 ? colValues[y.sizeCol][j] : y.dotSize;

      const yValue = yValues[i][j];

      if (dotSize > 0 && yValue != null) {
        let className = `ScatterSet-${i}`;
        if (options.legend.size && y.hidden) {
          className += ' ScatterSetHidden';
        }

        return (
          <circle
            key={`circle-[${y}][${i}]`}
            cx={xScale(x)}
            cy={yScale(yValue)}
            r={dotSize}
            className={className}
            fill={y.color}
          />
        );
      }
      return <div key={`circle-[${y}][${i}]`}></div>;
    })
  ));
}

function drawLabels(options: ScatterOptions,
  labels: string[],
  xValues: number[],
  xScale: Function) {

  return xValues.map((x, i: number) => {
    if (i < labels.length) {
      return (
        <text
          key={`label-[${i}]`}
          x={xScale(x)}
          alignmentBaseline="hanging"
          textAnchor="middle"
          fill={options.label.color}
          fontSize={options.label.textSize * 4}
          fontWeight="100"
        >
          {labels[i]}
        </text>
      );
    }
    else
      return null;
  }
  )
}

function applySetFieldSetHidden(
  fieldSet: FieldSet,
  index: number,
  hidden: boolean,
  panelId: number,
) {
  fieldSet.hidden = hidden;

  const panelGroup = $(`.ScatterPanel-${panelId}`);
  const markers = $(`.ScatterSet-${index}`, panelGroup);
  if (hidden) { markers.addClass('ScatterSetHidden'); } else { markers.removeClass('ScatterSetHidden'); }

  const lines = $(`.ScatterLine-${index}`, panelGroup);
  if (hidden) { lines.addClass('ScatterLineHidden'); } else { lines.removeClass('ScatterLineHidden'); }
}

function onLegendClick(e: React.MouseEvent, index: number, fieldSets: FieldSet[], panelId: number) {
  const thisLegendTextElement = $(e.currentTarget);
  const legendGroup = thisLegendTextElement.parent();
  const legendTextElements = $('.ScatterLegendText', legendGroup);

  const hiddenLegendTextElements = legendTextElements.filter('.ScatterLegendTextHidden');

  if (e.ctrlKey) {
    // toggle the state of the current item
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden');
    applySetFieldSetHidden(fieldSets[index], index, !fieldSets[index].hidden, panelId);
  } else if (hiddenLegendTextElements.length === 0) {
    // if none are hidden, hide everything else
    legendTextElements.addClass('ScatterLegendTextHidden');
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden');
    fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, index !== i, panelId); });
  } else if (!thisLegendTextElement.hasClass('ScatterLegendTextHidden')) {
    // if this item is visible, unhide everything
    legendTextElements.removeClass('ScatterLegendTextHidden');
    fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, false, panelId); });
  } else {
    // hide everything but this one
    legendTextElements.addClass('ScatterLegendTextHidden');
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden');
    fieldSets.forEach((f, i) => { applySetFieldSetHidden(f, i, index !== i, panelId); });
  }
}

function drawLegend(options: ScatterOptions, width: number, height: number, xMargins: MarginPair, yMargins: MarginPair, colNames: string[], panelId: number) {
  if (options.legend.size) {
    const scale = options.legend.size / 3;
    const fieldSets = options.fieldSets.filter((x: FieldSet) => x.col >= 0 && x.col < colNames.length);

    const maxLength = d3.max(fieldSets.map((f) => colNames[f.col].length)) as number;

    if (fieldSets.length > 0) {
      const offset = 20;
      const dx = offset + (8.6 * scale * maxLength);

      xMargins.upper += dx;

      const legends = new Array(0);

      fieldSets.forEach((f, i) => {
        const className = f.hidden ? 'ScatterLegendText ScatterLegendTextHidden' : 'ScatterLegendText';
        legends.push(
          <text
            transform={`translate(${offset}, ${30 * scale * i}) scale(${scale})`}
            className={className}
            alignmentBaseline="hanging"
            textAnchor="left"
            fill={f.color}
            onClick={(e) => {
              onLegendClick(e, i, fieldSets, panelId);
            }}
          >
            {colNames[f.col]}
          </text>,
        );
      });

      return (
        <g id="legend" transform={`translate(${width - dx}, ${yMargins.upper})`}>
          {legends}
        </g>
      );
    }
  }

  return null;
}

function drawXTitle(options: ScatterOptions, width: number, height: number, xMargins: MarginPair, yMargins: MarginPair) {
  const title = options.xAxisTitle;
  if (title.text) {
    const scale = title.textSize;
    const dx = 8.2 * scale * title.text.length;
    const dy = 14;

    yMargins.lower += dy * scale;

    return (
      <g id="XTitle"
        transform={`translate(${(width + xMargins.lower - xMargins.upper) / 2.0}, ${height - dy * scale}) scale(${scale})`}
      >
        <text
          className="ScatterXTitleRect"
          alignmentBaseline="hanging"
          textAnchor="middle"
          width={dx}
          height={dy}
          fill={title.color}
        >
          {title.text}
        </text>
      </g>
    );
  }
  return null;
}

function drawYTitle(options: ScatterOptions, width: number, height: number, xMargins: MarginPair, yMargins: MarginPair) {
  const title = options.yAxisTitle;
  if (title.text) {
    const scale = title.textSize;
    const dx = 8.2 * title.text.length;
    const dy = 14;

    if (options.rotateYAxisTitle) {
      xMargins.lower += dy * scale;

      return (
        <g id="YTitle"
          transform={`translate(0, ${(height - yMargins.upper - yMargins.lower) / 2.0}) rotate(-90) scale(${scale})`}
        >
          <text
            className="ScatterYTitleRect"
            alignmentBaseline="hanging"
            textAnchor="middle"
            width={dx}
            height={dy}
            fill={title.color}
          >
            {title.text}
          </text>
        </g>
      );
    }
    xMargins.lower += dx * scale;

    return (
      <g id="YTitle"
        transform={`translate(0, ${(height - yMargins.upper - yMargins.lower) / 2.0}) scale(${scale})`}
      >
        <text
          className="ScatterYTitleRect"
          textAnchor="left"
          width={dx}
          height={dy}
          fill={title.color}
        >
          {title.text}
        </text>
      </g>
    );
  }
  return null;
}

function generateContent(
  options: ScatterOptions,
  width: number,
  height: number,
  fieldSets: FieldSet[],
  colData: {
    name: string,
    displayName: string,
    values: any[]
  }[],
  panelId: number,
) {
  const visibleFieldSets = fieldSets;

  const colValues = colData.map((c) => c.values);
  const colNames = colData.map((c) => c.displayName || c.name);
  const xValues = colValues[options.xAxis.col];
  const xExtent = [
    options.xAxisExtents.min === 0 ? 0 : options.xAxisExtents.min || d3.min(xValues),
    options.xAxisExtents.max === 0 ? 0 : options.xAxisExtents.max || d3.max(xValues),
  ] as number[];

  const yValues = visibleFieldSets.map((f) => colValues[f.col]);
  const yExtents = yValues.map((c) => d3.extent(c));
  const yExtent = [
    options.yAxisExtents.min === 0 ? 0 : options.yAxisExtents.min
      || d3.min(yExtents.map((c) => c[0]) as number[]),
    options.yAxisExtents.max === 0 ? 0 : options.yAxisExtents.max
      || d3.max(yExtents.map((c) => c[1]) as number[]),
  ] as number[];

  const labels = options.label.col >= 0 ? colValues[options.label.col] : [];
  const xMargins = new MarginPair(options.xMargins.lower || 0, options.xMargins.upper || 0);
  const yMargins = new MarginPair(options.yMargins.lower || 0, options.yMargins.upper || 0);
  const legend = drawLegend(options, width, height, xMargins, yMargins, colNames, panelId);
  const yTitle = drawYTitle(options, width, height, xMargins, yMargins);
  const xTitle = drawXTitle(options, width, height, xMargins, yMargins);

  const border = options.border.size > 0 ? (
    <rect id="border"
      transform={`translate(${xMargins.lower}, ${yMargins.upper})`}
      width={width - xMargins.lower - xMargins.upper}
      height={height - yMargins.upper - yMargins.lower}
      stroke={options.border.color}
      strokeWidth={options.border.size}
      fill="none"
    />
  ) : null;

  const clippath = (
    <defs>
      <clipPath id={`grid-${panelId}.${width}`}>
        <rect
          transform={`translate(${xMargins.lower}, ${yMargins.upper})`}
          width={width - xMargins.lower - xMargins.upper}
          height={height - yMargins.upper - yMargins.lower}
        />
      </clipPath>
    </defs>
  );

  const xScale = d3
    .scaleLinear()
    .nice()
    .domain(xExtent as [number, number])
    .range([
      options.xAxis.inverted ? (width - xMargins.upper) : xMargins.lower,
      options.xAxis.inverted ? xMargins.lower : (width - xMargins.upper),
    ]);

  let xAxis = d3.axisBottom(xScale);

  if (options.label.col >= 0)
    xAxis = xAxis.ticks(0);
  else
    xAxis = xAxis.tickSize(yMargins.upper + yMargins.lower - height);

  const yScale = d3
    .scaleLinear()
    .nice()
    .domain(yExtent as [number, number])
    .range([height - yMargins.lower, yMargins.upper]);

  let yAxis = d3.axisLeft(yScale).tickSize(xMargins.lower + xMargins.upper - width);

  return (
    <svg
      width={width}
      height={height}
    >
      <g className={`ScatterPanel-${panelId}`}>
        {legend}
        {xTitle}
        {yTitle}
        <g id="YGrid"
          transform={`translate(0, ${height - yMargins.lower})`}
          ref={(node) => {
            d3.select(node)
              .call(xAxis as any)
              .selectAll('line')
              .attr('stroke', options.grid.color);
          }}
        />
        <g id="HGrid"
          transform={`translate(${xMargins.lower}, 0)`}
          ref={(node) => {
            d3.select(node)
              .call(yAxis as any)
              .selectAll('line')
              .attr('stroke', options.grid.color);
          }}
        />
        {clippath}
        {border}
        <g id='lines' clipPath={`url(#grid-${panelId}.${width})`}>
          {drawLines(options, visibleFieldSets, xValues, yValues, xScale, yScale, xExtent, yExtent)}
        </g>
        <g id='dots'>
          {drawDots(options, visibleFieldSets, xValues, yValues, colValues, xScale, yScale)}
        </g>
        <g id='labels'
          transform={`translate(0, ${height - yMargins.lower + options.label.textSize + 3})`}
        >
          {drawLabels(options, labels, xValues, xScale)}
        </g>
      </g>
    </svg>
  );
}

export const ScatterPanel: React.FC<Props> = ({
  options, data, width, height,
}) => {
  if (data.series?.length > 0) {
    const frame = data.series[0];

    const panelId = data.request?.panelId as number;

    const colData = new Array(0);
    frame.fields.forEach((field) => {
      colData.push(new ColData(
        field.name,
        field.config?.displayName || field.name,
        field.values.toArray().map(v => v as number),
      ));
    });

    if (colData.length < 2) {
      return (
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <p>To get started, create a table query that returns 2 or more numeric columns</p>
        </div>
      );
    }

    if (options.xAxis.col === -1 || options.fieldSets.length === 0) {
      // Nothing has been setup - call auto-config
      autoConfigure(options, colData);
    }

    if (options.xAxis.col >= colData.length) {
      return (
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <p>X Axis field setting not found in current query</p>
        </div>
      );
    }
    const fieldSets = options.fieldSets.filter((x) => x != null && x?.col >= 0 && x?.col < colData.length);
    if (fieldSets.length === 0) {
      return (
        <div style={{ overflow: 'hidden', height: '100%' }}>
          <p>No Y Axis(s) data found in current query</p>
        </div>
      );
    }
    return generateContent(options, width, height, fieldSets, colData, panelId);
  }

  return (
    <div style={{ overflow: 'hidden', height: '100%' }}>
      <p>No data</p>
      <p>To get started, create a table query that returns 2 or more numeric columns</p>
    </div>
  );
};
