//import { FieldSet } from "FieldSet";

export class FieldSet {
    constructor(public col: number, public color: string, public size: number){}
}

export class Extents {
    constructor(public min: number, public max: number){
    };

}

export interface ScatterOptions {
    xAxisField: number,
    yAxisFields: number[],
    fieldSets: FieldSet[],
    xAxisExtents: Extents,
    yAxisExtents: Extents,
    showLegend: boolean,
    xAxisTitle: string,
    yAxisTitle: string,
    rotateYAxisTitle:boolean
 }

 export class Margins {
     constructor(public top: number, public right: number, public bottom: number, public left: number, ){}
 }
