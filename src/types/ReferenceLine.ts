/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
export class ReferenceLine {
  constructor(
    public label: string,
    public value: number,
    public lineColor: string,
    public lineSize: number,
    public vertical: boolean,
  ) {
  }
}
