import React from 'react';
import * as d3 from 'd3';
//import { css, cx } from 'emotion';

import { PanelProps } from '@grafana/data';

import { Margins, ScatterOptions } from 'types';

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
  let xExtent = [
    options.xAxisExtents.min == null ? d3.min(xValues) : options.xAxisExtents.min, 
    options.xAxisExtents.max == null ? d3.max(xValues) : options.xAxisExtents.max, 
  ];

  let yValues = options.fieldSets.map(f => { return colValues[f.col] });
  let yExtents = yValues.map(c => { return d3.extent(c) });
  let yExtent = [
    options.yAxisExtents.min == null ? d3.min(yExtents.map(c => { return c[0] }) as number[]) : options.yAxisExtents.min, 
    options.yAxisExtents.max == null ? d3.max(yExtents.map(c => { return c[1] }) as number[]) : options.yAxisExtents.max
  ];

  let margins = new Margins (20, 10, 20, 30);

  let legend = drawLegend(width, height, options, margins);
  let yTitle = drawYTitle(width, height, options, margins);
  let xTitle = drawXTitle(width, height, options, margins);
  let border = <rect
        transform={`translate(${margins.left}, ${margins.top})`}
        width={width - margins.left - margins.right}
        height={height - margins.top - margins.bottom}
        stroke="yellow"
        strokeWidth="1"
      />


  const xScale = d3
    .scaleLinear()
    .nice()
    .domain(xExtent as [number, number])
    .range([margins.left, width - margins.right]);

  const xAxis = d3.axisBottom(xScale);

  const yScale = d3
    .scaleLinear()
    .nice()
    .domain(yExtent as [number, number])
    .range([height - margins.bottom, margins.top]);

  const yAxis = d3.axisLeft(yScale);

  return (
    <svg width={width} height={height}>
      {legend}
      {xTitle}
      {yTitle}
      {/*border*/}
      <g
        transform={`translate(${margins.left}, 0)`}
        ref={node => {
          d3.select(node).call(yAxis as any);
        }}
      />
      <g
        transform={`translate(0, ${height - margins.bottom})`}
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

function drawLegend(width: number, height: number, options:ScatterOptions, margins:Margins){
  if (options.showLegend)
  {
    let dx = 100;
    let dy = 20 * options.fieldSets.length;
    
    margins.right += dx;

    return <g
        transform={`translate(${width - dx}, ${margins.top})`}
      >
      <rect 
        className="ScatterLegendRect"
        width={dx}
        height={dy}
        stroke="white" 
        stroke-width="1"
      />
      </g>;
  }

  return null;
}

function drawXTitle(width: number, height: number, options:ScatterOptions, margins:Margins){
  if (options.xAxisTitle){
    let scale = options.rotateYAxisTitle ? 4 : 1;
    let dx = 8.2 * scale * options.xAxisTitle.length;
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
        fill="white" 
      >{options.xAxisTitle}</text>
    </g>;  
  }
  return null;
}

function drawYTitle(width: number, height: number, options:ScatterOptions, margins:Margins){
  if (options.yAxisTitle){
    let scale = options.rotateYAxisTitle ? 4 : 1;
    let dx = 8.2 * options.yAxisTitle.length;
    let dy = 14;

    if (options.rotateYAxisTitle){
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
          fill="white" 
        >{options.yAxisTitle}</text>
      </g>;    
    }
    else{
      margins.left += dx * scale;

      return <g
        transform={`translate(0, ${(height - margins.top - margins.bottom) / 2.0}) scale(${scale})`}
      >
        <text 
          className="ScatterXTitleRect"
          //alignment-baseline="hanging"
          text-anchor="left"
          width={dx}
          height={dy}
          fill="white" 
        >{options.yAxisTitle}</text>
      </g>;  
      }
  }
  return null;
}
