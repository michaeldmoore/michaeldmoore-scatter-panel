import { FieldSet } from "FieldSet";

export interface ScatterOptions {
    xAxisField: number,
    yAxisFields: number[],
    fieldSets: FieldSet[],
    xAxisMin: number,
    xAxisMax: number,
    yAxisMin: number,
    yAxisMax: number,
}
