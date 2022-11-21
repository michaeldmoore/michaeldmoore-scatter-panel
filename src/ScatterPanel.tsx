import React from 'react';
import { PanelProps } from '@grafana/data';
import $ from 'jquery';
import * as d3 from 'd3';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import ExponentialRegression from 'ml-regression-exponential';
import PolynomialRegression from 'ml-regression-polynomial';
import PowerRegression from 'ml-regression-power';
import TheilSenRegression from 'ml-regression-theil-sen';
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
    options.xAxisTitle = new Title(colData[0].displayName, 'white', 2, false, false);
  }

  options.fieldSets = options.fieldSets.filter((f) => f.col >= 0 && f.col < colData.length && f.col !== options.xAxis.col);

  if (options.fieldSets.length === 0) {
    const fieldSets = colData.map((f, i) => new FieldSet(i, -1, randomColor(), 3, 1, 'none', 3, false, -1));

    options.fieldSets = fieldSets.filter((c) => c.col !== options.xAxis.col && colData[c.col].type !== 'string');
  }

  options.xMargins.lower = 30;
  options.xMargins.upper = 10;
  options.yMargins.lower = 20;
  options.yMargins.upper = 20;
}

function drawReferenceLines(
  options: ScatterOptions,
  xScale: Function,
  yScale: Function,
  xExtent: number[],
  yExtent: number[],
) {
  const ReferenceLinesContent = new Array(0);// as JSX.Element[];

  options.ReferenceLines.forEach((ReferenceLine, index) => {
    if (ReferenceLine.vertical) {
      if (ReferenceLine.value < xExtent[0] || ReferenceLine.value > xExtent[1]) {
        return;
      }

      const xValue = xScale(ReferenceLine.value);

      const label = ReferenceLine.label.length > 0 ?
        (
          <text
            key={`ReferenceLinelabel-[${index}]`}
            className="scatter-ReferenceLinelabel"
            x={xValue}
            y={yScale(yExtent[1])-5}
            alignmentBaseline="baseline"
            textAnchor="middle"
            fill={ReferenceLine.lineColor}
            fontSize={options.label.textSize * 6}
            fontWeight="100"
          >
            {ReferenceLine.label}
          </text>
        ) : null;

      ReferenceLinesContent.push(
        <g>
          <line
            key={`ReferenceLine-[${index}]`}
            className="scatter-ReferenceLineline"
            x1={xValue}
            x2={xValue}
            y1={yScale(yExtent[0])}
            y2={yScale(yExtent[1])}
            stroke={ReferenceLine.lineColor}
            strokeWidth={ReferenceLine.lineSize}
            fill="none"
          />
          {label}
        </g>,
      );
    }
    else {
      const yValue = yScale(ReferenceLine.value);
      const height = yScale(yExtent[0]) - yValue;
  
      if (height < 0 || height > yScale(yExtent[0]) - yScale(yExtent[1])) {
        return;
      }
  
      const label = ReferenceLine.label.length > 0 ?
        (
          <text
            key={`ReferenceLinelabel-[${index}]`}
            className="scatter-ReferenceLinelabel"
            x={xScale(xExtent[1]) + 5}
            y={yValue}
            alignmentBaseline="middle"
            textAnchor="left"
            fill={ReferenceLine.lineColor}
            fontSize={options.label.textSize * 6}
            fontWeight="100"
          >
            {ReferenceLine.label}
          </text>
        ) : null;
  
      ReferenceLinesContent.push(
        <g>
          <line
            key={`ReferenceLine-[${index}]`}
            className="scatter-ReferenceLineline"
            x1={xScale(xExtent[0])}
            x2={xScale(xExtent[1])}
            y1={yValue}
            y2={yValue}
            stroke={ReferenceLine.lineColor}
            strokeWidth={ReferenceLine.lineSize}
            fill="none"
          />
          {label}
        </g>,
      );
    }
  });
  return ReferenceLinesContent;
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
  const lines = new Array(0);// as JSX.Element[];

  fieldSets.forEach((fieldSet, index) => {
    if (fieldSet.lineType !== 'none' && fieldSet.lineSize > 0) {
      let path = '';

      let xyData = xValues.map((d, i) => [d, yValues[index][i]]).filter((xy) => xy[1] != null);
      if (fieldSet.lineType === 'simple') {
        path = `
        ${xyData.map((xy, i) => `${i === 0 ? 'M' : 'L'} ${xScale(xy[0])} ${yScale(xy[1])}`).join(' ')}
      `;
      } else if (fieldSet.lineType === 'linear') {
        const x = xyData.map((xy) => xy[0]);
        const y = xyData.map((xy) => xy[1]);

        const SLR = new SimpleLinearRegression(x, y);
        // check for start and end points inside the plotted area
        let x0 = xExtent[0];
        let y0 = SLR.predict(x0);
        if (y0 < yExtent[0]) {
          y0 = yExtent[0];
          x0 = SLR.computeX(y0);
        }
        if (y0 > yExtent[1]) {
          y0 = yExtent[1];
          x0 = SLR.computeX(y0);
        }

        let x1 = xExtent[1];
        let y1 = SLR.predict(x1);
        if (y1 < yExtent[0]) {
          y1 = yExtent[0];
          x1 = SLR.computeX(y1);
        }
        if (y1 > yExtent[1]) {
          y1 = yExtent[1];
          x1 = SLR.computeX(y1);
        }

        path = `M ${xScale(x0)} ${yScale(y0)} L ${xScale(x1)} ${yScale(y1)}`;
      } else if (fieldSet.lineType === 'exponential') {
        const ex = xyData.map((xy) => xy[0]);
        const ey = xyData.map((xy) => xy[1]);
        const ER = new ExponentialRegression(ex, ey);

        const x0 = xExtent[0];
        const x1 = xExtent[1];

        const steps = 100;
        const dx = (x1 - x0) / (steps - 1);
        const xys = new Array(0);
        for (let i = 0; i < steps; i++) {
          const x = x0 + i * dx;
          const y = ER.predict(x);
          xys.push([x, y]);
        }
        path = `
        ${xys.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[1])}`).join(' ')}
      `;
      } else if (fieldSet.lineType === 'power') {
        xyData = xyData.filter((d) => d[0] > 0);
        const px = xyData.map((xy) => xy[0]);
        const py = xyData.map((xy) => xy[1]);
        const PR = new PowerRegression(px, py);

        const x0 = xExtent[0];
        const x1 = xExtent[1];

        const steps = 100;
        const dx = (x1 - x0) / (steps - 1);
        const xys = new Array(0);
        for (let i = 0; i < steps; i++) {
          const x = x0 + i * dx;
          const y = PR.predict(x);
          xys.push([x, y]);
        }
        path = `
      ${xys.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[1])}`).join(' ')}
      `;
      } else if (fieldSet.lineType === 'polynomial') {
        xyData = xyData.filter((d) => d[0] > 0);
        const pnx = xyData.map((xy) => xy[0]);
        const pny = xyData.map((xy) => xy[1]);
        const PN = new PolynomialRegression(pnx, pny, fieldSet.polynomialOrder ?? 3);

        const x0 = xExtent[0];
        const x1 = xExtent[1];

        const steps = 100;
        const dx = (x1 - x0) / (steps - 1);
        const xys = new Array(0);
        for (let i = 0; i < steps; i++) {
          const x = x0 + i * dx;
          const y = PN.predict(x);
          xys.push([x, y]);
        }
        path = `
    ${xys.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[1])}`).join(' ')}
    `;
      } else if (fieldSet.lineType === 'theilsen') {
        xyData = xyData.filter((d) => d[0] > 0);
        const tx = xyData.map((xy) => xy[0]);
        const ty = xyData.map((xy) => xy[1]);
        const TS = new TheilSenRegression(tx, ty);

        const x0 = xExtent[0];
        const x1 = xExtent[1];

        const steps = 100;
        const dx = (x1 - x0) / (steps - 1);
        const xys = new Array(0);
        for (let i = 0; i < steps; i++) {
          const x = x0 + i * dx;
          const y = TS.predict(x);
          xys.push([x, y]);
        }
        path = `
      ${xys.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[1])}`).join(' ')}
      `;
      }

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
      const dotSize = y.sizeCol >= 0 ? colValues[y.sizeCol][j] : -y.sizeCol;
      const dotColor = y.colorCol >= 0 ? colValues[y.colorCol][j] : y.color;

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
            fill={dotColor.toString()}
          />
        );
      }
      return <div key={`circle-[${y}][${i}]`} />;
    })
  ));
}

function drawLabels(options: ScatterOptions,
  labels: string[],
  xValues: number[],
  xScale: Function) {
  return xValues.map((x, i: number) => {
    if (Array.isArray(labels) && i < labels.length) {
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
    return null;
  });
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
  // figure the rightMarginOffset, starting with the space needed for the longest reference line text
  let rightMarginOffset = d3.max(options.ReferenceLines.map((r) => r.vertical ? 0 : r.label.length)) as number * 8.0;

  if (options.legend.size) {
    const scale = options.legend.size / 3;

    const fieldSets = options.fieldSets.filter((x: FieldSet) => x.col >= 0 && x.col < colNames.length);

    const maxLength = d3.max(fieldSets.map((f) => colNames[f.col].length)) as number;

    if (fieldSets.length > 0) {
      const offset = 20;
      const dx = offset + (8.6 * scale * maxLength);
      if (rightMarginOffset < dx) {
        rightMarginOffset = dx;
      }
      xMargins.upper += rightMarginOffset;

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

  xMargins.upper += rightMarginOffset;
  return null;
}

function drawXTitle(options: ScatterOptions, width: number, height: number, xMargins: MarginPair) {
  const title = options.xAxisTitle;
  if (title.text) {
    if (options.xAxisTitle.rotated) {
      return (
        <g
          id="XTitle"
          transform={`translate(${(width + xMargins.lower - xMargins.upper) / 2.0}, ${height})  rotate(-90) scale(${title.textSize})`}
        >
          <text
            className="ScatterXTitleRect"
            alignmentBaseline="middle"
            textAnchor="left"
            fill={title.color}
          >
            {title.text}
          </text>
        </g>
      );
    }

    return (
      <g
        id="XTitle"
        transform={`translate(${(width + xMargins.lower - xMargins.upper) / 2.0}, ${height}) scale(${title.textSize})`}
      >
        <text
          className="ScatterXTitleRect"
          alignmentBaseline="text-after-edge"
          textAnchor="middle"
          fill={title.color}
        >
          {title.text}
        </text>
      </g>
    );
  }

  return null;
}

function drawYTitle(options: ScatterOptions, width: number, height: number, yMargins: MarginPair) {
  const title = options.yAxisTitle;
  if (title.text) {
    if (options.yAxisTitle.rotated) {
      return (
        <g
          id="YTitle"
          transform={`translate(0, ${(height + yMargins.upper - yMargins.lower) / 2.0}) rotate(-90) scale(${title.textSize})`}
        >
          <text
            className="ScatterYTitleRect"
            alignmentBaseline="hanging"
            textAnchor="middle"
            fill={title.color}
          >
            {title.text}
          </text>
        </g>
      );
    }

    return (
      <g
        id="YTitle"
        transform={`translate(0, ${(height + yMargins.upper - yMargins.lower) / 2.0}) scale(${title.textSize})`}
      >
        <text
          className="ScatterYTitleRect"
          alignmentBaseline="middle"
          textAnchor="left"
          fill={title.color}
        >
          {title.text}
        </text>
      </g>
    );
  }

  return null;
}

function isXAxisLabelValid(
  options: ScatterOptions,
  colData: {
    name: string,
    displayName: string,
    type: string,
    values: any[]
  }[],
) {
  return options.label.col >= 0 && colData[options.label.col].type === 'string';
}

function generateContent(
  options: ScatterOptions,
  width: number,
  height: number,
  fieldSets: FieldSet[],
  colData: {
    name: string,
    displayName: string,
    type: string,
    values: any[]
  }[],
  panelId: number,
) {
  const colValues = colData.map((c) => c.values);
  const colNames = colData.map((c) => c.displayName || c.name);
  const xValues = colData[options.xAxis.col].type !== 'string' ? colValues[options.xAxis.col] : Array.from(colValues[0], (x, i) => i + 1);
  const xExtent = [
    options.xAxisExtents.min === 0 ? 0 : options.xAxisExtents.min || d3.min(xValues),
    options.xAxisExtents.max === 0 ? 0 : options.xAxisExtents.max || d3.max(xValues),
  ] as number[];

  const yValues = fieldSets.map((f) => colValues[f.col]);
  const yExtents = yValues.map((c) => d3.extent(c));
  const yExtent = [
    options.yAxisExtents.min === 0 ? 0 : options.yAxisExtents.min
      || d3.min(yExtents.map((c) => c[0]) as number[]),
    options.yAxisExtents.max === 0 ? 0 : options.yAxisExtents.max
      || d3.max(yExtents.map((c) => c[1]) as number[]),
  ] as number[];

  const labels = isXAxisLabelValid(options, colData) ? colValues[options.label.col] : [];
  const xMargins = new MarginPair(options.xMargins.lower || 0, options.xMargins.upper || 0);
  const yMargins = new MarginPair(options.yMargins.lower || 0, options.yMargins.upper || 0);
  const legend = drawLegend(options, width, height, xMargins, yMargins, colNames, panelId);

  // offset left and bottom margins to allow room for the titles (if any)
  if (options.xAxisTitle.text.length) {
    yMargins.lower += options.xAxisTitle.rotated ? 8.2 * options.xAxisTitle.textSize * options.xAxisTitle.text.length : 14 * options.xAxisTitle.textSize;
  }

  if (options.yAxisTitle.text.length) {
    xMargins.lower += !options.yAxisTitle.rotated ? 8.2 * options.yAxisTitle.textSize * options.yAxisTitle.text.length : 14 * options.yAxisTitle.textSize;
  }

  const xTitle = drawXTitle(options, width, height, xMargins);
  const yTitle = drawYTitle(options, width, height, yMargins);

  const border = options.border.size > 0 ? (
    <rect
      id="border"
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

  const xScale = (options.xAxisTitle.logScale ? d3.scaleLog() : d3.scaleLinear())
    .nice()
    .domain(xExtent as [number, number])
    .range([
      options.xAxis.inverted ? (width - xMargins.upper) : xMargins.lower,
      options.xAxis.inverted ? xMargins.lower : (width - xMargins.upper),
    ]);

  let xAxis = d3.axisBottom(xScale);

  if (labels.length > 0) xAxis = xAxis.ticks(0);
  else xAxis = xAxis.tickSize(yMargins.upper + yMargins.lower - height);

  const yScale = (options.yAxisTitle.logScale ? d3.scaleLog() : d3.scaleLinear())
    .nice()
    .domain(yExtent as [number, number])
    .range([height - yMargins.lower, yMargins.upper]);

  const yAxis = d3.axisLeft(yScale).tickSize(xMargins.lower + xMargins.upper - width);

  return (
    <svg
      width={width}
      height={height}
    >
      <g className={`ScatterPanel-${panelId}`}>
        {legend}
        {xTitle}
        {yTitle}
        <g
          id="YGrid"
          transform={`translate(0, ${height - yMargins.lower})`}
          ref={(node) => {
            d3.select(node)
              .call(xAxis as any)
              .selectAll('line')
              .attr('stroke', options.grid.color);
          }}
        />
        <g
          id="HGrid"
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
        <g id="ReferenceLines">
          {drawReferenceLines(options, xScale, yScale, xExtent, yExtent)}
        </g>
        <g id="lines" clipPath={`url(#grid-${panelId}.${width})`}>
          {drawLines(options, fieldSets, xValues, yValues, xScale, yScale, xExtent, yExtent)}
        </g>
        <g id="dots">
          {drawDots(options, fieldSets, xValues, yValues, colValues, xScale, yScale)}
        </g>
        <g
          id="labels"
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
        field.type,
        field.values.toArray().map((v) => v as number),
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
