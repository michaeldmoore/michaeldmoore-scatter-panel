import type { FieldType } from '@grafana/data';

export interface SeriesStyle {
  field: string;
  color?: string;
  lineWidth: number;
  showPoints: boolean;
  pointSize: number;
}

export interface ScatterOptions {
  xField?: string;
  series: SeriesStyle[];
  xAxisLabel: string;
  yAxisLabel: string;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  xScale: 'linear' | 'log';
  yScale: 'linear' | 'log';
  showGrid: boolean;
  showLegend: boolean;
  tooltip: boolean;
}

export const defaultSeriesStyle = (field: string): SeriesStyle => ({
  field,
  lineWidth: 2,
  showPoints: true,
  pointSize: 5,
});

export const defaultOptions: ScatterOptions = {
  series: [],
  xAxisLabel: '',
  yAxisLabel: '',
  xScale: 'linear',
  yScale: 'linear',
  showGrid: true,
  showLegend: true,
  tooltip: true,
};

export function isNumericField(type: FieldType): boolean {
  return type === 'number' || type === 'time';
}
