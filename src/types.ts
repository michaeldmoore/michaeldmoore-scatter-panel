export class XAxis {
  constructor(
    public col: number,
    public inverted: boolean) {
  }
}

export class FieldSet {
  constructor (
    public col: number, 
    public color: string, 
    public dotSize: number, 
    public lineSize: number,
    public lineType: string, 
    public hidden: boolean) {
  }
}

export class Title {
  constructor (
    public text: string, 
    public color: string, 
    public textSize: number) {
  };
}

export class Border {
  constructor (
    public show: boolean,
    public color: string, 
    public size: number) {
  };
}

export class Legend {
  constructor (
    public show: boolean,
    public size: number) {
  };
}

export class Margins {
  constructor (
    public top: number, 
    public right: number, 
    public bottom: number, 
    public left: number) {
  };
}

export class Extents {
  constructor (
    public min: number, 
    public max: number) {
  };
}

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
  gridColor: string, 
  border: Border
}
