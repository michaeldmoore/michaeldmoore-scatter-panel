/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
export class FieldSet {
  constructor(
    public col: number,
    public sizeCol: number,
    public color: string,
    public dotSize: number,
    public lineSize: number,
    public lineType: string,
    public hidden: boolean,
  ) {
  }
}
