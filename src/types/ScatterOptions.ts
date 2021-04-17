/* eslint import/extensions: off */
import { Border } from './Border';
import { XAxis } from './XAxis';
import { FieldSet } from './FieldSet';
import { Title } from './Title';
import { Grid } from './Grid';
import { Legend } from './Legend';
import { Extents } from './Extents';
import { Label } from './Label';
import { MarginPair } from './MarginPair';

export interface ScatterOptions {
  xAxis: XAxis,
  label: Label,
  yAxisFields: number[],
  fieldSets: FieldSet[],
  xAxisExtents: Extents,
  yAxisExtents: Extents,
  xMargins: MarginPair,
  yMargins: MarginPair,
  legend: Legend,
  xAxisTitle: Title,
  yAxisTitle: Title,
  rotateYAxisTitle: boolean,
  grid: Grid,
  border: Border
}
