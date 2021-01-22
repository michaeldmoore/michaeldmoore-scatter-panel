import { Border } from './Border';
import { XAxis } from './XAxis';
import { FieldSet } from './FieldSet';
import { Title } from './Title';
import { Grid } from './Grid';
import { Legend } from './Legend';
import { Extents } from './Extents';

export interface ScatterOptions {
  xAxis: XAxis,
  yAxisFields: number[],
  fieldSets: FieldSet[],
  xAxisExtents: Extents,
  yAxisExtents: Extents,
  legend: Legend,
  xAxisTitle: Title,
  yAxisTitle: Title,
  rotateYAxisTitle: boolean,
  grid: Grid,
  border: Border
}
