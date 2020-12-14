import React from 'react';
import * as d3 from 'd3';
//import { css, cx } from 'emotion';

import { PanelProps } from '@grafana/data';

import { ScatterOptions } from 'types';

//const docsUrl = 'https://grafana.com/grafana/plugins/marcusolsson-treemap-panel';

interface Props extends PanelProps<ScatterOptions> { }

export const ScatterPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const frame = data.series[0];

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
      return generateContent(width, height, options, colData);
    }
  }
}

function generateContent(width: number, height: number, options:ScatterOptions, colData: { name: string, displayName: string, values: number[] }[]) {

  let colValues = colData.map(c => { return c.values });
  let xValues = colValues[options.xAxisField];
  let xExtent = d3.extent(xValues);

  let yValues = options.fieldSets.map(f => { return colValues[f.col] });
  let yExtents = yValues.map(c => { return d3.extent(c) });
  let yExtent = [d3.min(yExtents.map(c => { return c[0] }) as number[]), d3.max(yExtents.map(c => { return c[1] }) as number[])];

  if (!isNaN(options.xAxisMin))
    xExtent[0] = options.xAxisMin;

  if (!isNaN(options.xAxisMax))
    xExtent[1] = options.xAxisMax;

  if (!isNaN(options.yAxisMin))
    yExtent[0] = options.yAxisMin;

  if (!isNaN(options.yAxisMax))
    yExtent[1] = options.yAxisMax;

  let margin = ({ top: 20, right: 10, bottom: 20, left: 30 })

  const xScale = d3
    .scaleLinear()
    .nice()
    .domain(xExtent as [number, number])
    .range([margin.left, width - margin.right]);

  const xAxis = d3.axisBottom(xScale);

  const yScale = d3
    .scaleLinear()
    .nice()
    .domain(yExtent as [number, number])
    .range([height - margin.bottom, margin.top]);

  const yAxis = d3.axisLeft(yScale);

  return (
    <svg width={width} height={height} fill='red'>
      <g
        transform={`translate(${margin.left}, 0)`}
        ref={node => {
          d3.select(node).call(yAxis as any);
        }}
      />
      <g
        transform={`translate(0, ${height - margin.bottom})`}
        ref={node => {
          d3.select(node).call(xAxis as any);
        }}
      />
      <g>
        {options.fieldSets.map((y, i: number) => (
          xValues.map((x, j) => {
            return <circle cx={xScale(x)} cy={yScale(yValues[i][j])} r={y.size} fill={y.color} />
          })
        ))}
      </g>
    </svg>
  );
};
