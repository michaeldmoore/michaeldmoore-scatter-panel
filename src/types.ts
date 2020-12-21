/* eslint-disable no-useless-constructor */
export class FieldSet {
  constructor (public col: number, public color: string, public size: number, public hidden: boolean) {
  }
}

export class Title {
  constructor (public text: string, public color: string, public size: number) {
  };
}

export class Margins {
  constructor (public top: number, public right: number, public bottom: number, public left: number) {
  };
}

export class Extents {
  constructor (public min: number, public max: number) {
  };
}

export interface ScatterOptions {
  xAxisField: number,
  yAxisFields: number[],
  fieldSets: FieldSet[],
  xAxisExtents: Extents,
  yAxisExtents: Extents,
  showLegend: boolean,
  legendSize: number,
  xAxisTitle: Title,
  yAxisTitle: Title,
  gridColor: string,
  rotateYAxisTitle: boolean
}
