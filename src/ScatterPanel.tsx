import React, { useMemo } from 'react';
import type { PanelProps } from '@grafana/data';
import { FieldType } from '@grafana/data';
import type { ScatterOptions } from './types';

interface Props extends PanelProps<ScatterOptions> {}

const palette = ['#5794F2', '#73BF69', '#FADE2A', '#FF9830', '#B877D9', '#F2495C', '#8AB8FF', '#56A64B'];

export const ScatterPanel: React.FC<Props> = ({ data, options, width, height, theme }) => {
  const plot = useMemo(() => {
    const frame = data.series[0];
    if (!frame) return null;
    const numeric = frame.fields.filter((f) => f.type === FieldType.number);
    if (!numeric.length) return null;
    const xField = frame.fields.find((f) => f.name === options.xField) ?? numeric[0];
    const ys = options.series.length
      ? options.series.map((s) => frame.fields.find((f) => f.name === s.field)).filter(Boolean)
      : numeric.filter((f) => f !== xField);
    if (!xField || !ys.length) return null;

    const x = Array.from(xField.values as Iterable<number>, Number);
    const series = ys.map((field, i) => ({
      name: field!.name,
      values: Array.from(field!.values as Iterable<number>, Number),
      style: options.series[i] ?? { lineWidth: 2, showPoints: true, pointSize: 5 },
      color: options.series[i]?.color ?? palette[i % palette.length],
    }));
    const allY = series.flatMap((s) => s.values).filter(Number.isFinite);
    const finiteX = x.filter(Number.isFinite);
    if (!finiteX.length || !allY.length) return null;
    const auto = (values: number[]) => {
      const min = Math.min(...values);
      const max = Math.max(...values);
      const pad = max === min ? Math.max(Math.abs(min) * 0.1, 1) : (max - min) * 0.05;
      return [min - pad, max + pad] as const;
    };
    return { x, series, xRange: [options.xMin ?? auto(finiteX)[0], options.xMax ?? auto(finiteX)[1]] as const, yRange: [options.yMin ?? auto(allY)[0], options.yMax ?? auto(allY)[1]] as const };
  }, [data, options]);

  if (!plot) return <div style={{ width, height, display: 'grid', placeItems: 'center', color: theme.colors.text.secondary }}>No numeric X/Y data available</div>;

  const margin = { left: 55, right: 20, top: options.showLegend ? 35 : 15, bottom: 45 };
  const w = Math.max(1, width - margin.left - margin.right);
  const h = Math.max(1, height - margin.top - margin.bottom);
  const sx = (v: number) => margin.left + ((v - plot.xRange[0]) / (plot.xRange[1] - plot.xRange[0])) * w;
  const sy = (v: number) => margin.top + h - ((v - plot.yRange[0]) / (plot.yRange[1] - plot.yRange[0])) * h;
  const grid = theme.colors.border.weak;
  const text = theme.colors.text.secondary;

  return (
    <svg width={width} height={height} role="img" aria-label="Scatter plot">
      {options.showGrid && [0, 0.25, 0.5, 0.75, 1].map((t) => (
        <g key={t} stroke={grid} strokeWidth={1}>
          <line x1={margin.left} x2={margin.left + w} y1={margin.top + h * t} y2={margin.top + h * t} />
          <line y1={margin.top} y2={margin.top + h} x1={margin.left + w * t} x2={margin.left + w * t} />
        </g>
      ))}
      <line x1={margin.left} x2={margin.left} y1={margin.top} y2={margin.top + h} stroke={text} />
      <line x1={margin.left} x2={margin.left + w} y1={margin.top + h} y2={margin.top + h} stroke={text} />
      {plot.series.map((s) => {
        const points = s.values.map((y, i) => `${sx(plot.x[i])},${sy(y)}`).filter((p) => !p.includes('NaN')).join(' ');
        return <g key={s.name}>
          <polyline fill="none" stroke={s.color} strokeWidth={s.style.lineWidth} points={points} />
          {s.style.showPoints && s.values.map((y, i) => Number.isFinite(y) && Number.isFinite(plot.x[i]) ? <circle key={i} cx={sx(plot.x[i])} cy={sy(y)} r={s.style.pointSize} fill={s.color} /> : null)}
        </g>;
      })}
      {options.showLegend && plot.series.map((s, i) => <g key={s.name} transform={`translate(${margin.left + i * 130},18)`}><circle r="5" fill={s.color} /><text x="9" y="4" fill={text} fontSize="12">{s.name}</text></g>)}
      {options.xAxisLabel && <text x={margin.left + w / 2} y={height - 8} textAnchor="middle" fill={text} fontSize="12">{options.xAxisLabel}</text>}
      {options.yAxisLabel && <text transform={`translate(14 ${margin.top + h / 2}) rotate(-90)`} textAnchor="middle" fill={text} fontSize="12">{options.yAxisLabel}</text>}
    </svg>
  );
};
