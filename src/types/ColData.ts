/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
export class ColData {
  constructor(
    public name: string,
    public displayName: string,
    public type: string,
    public values: (number | string | null)[],
  ) {
  }
}
