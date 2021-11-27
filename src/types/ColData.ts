/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
export class ColData {
  constructor(
    public name: string,
    public displayName: string,
    public values: (number | string | null)[],
  ) {
  }
}
