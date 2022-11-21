/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
export class Title {
  constructor(
    public text: string,
    public color: string,
    public textSize: number,
    public rotated: boolean,
    public logScale: boolean,
    public fontSize: number,
    public fontColor: string,
  ) {
  }
}
