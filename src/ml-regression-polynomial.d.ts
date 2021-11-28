import BaseRegression from 'ml-regression-base';

declare namespace PolynomialRegression {
  export interface PolynomialRegressionModel {
    name: 'PolynomialRegression';
  }
}

declare class PolynomialRegression extends BaseRegression {
  constructor(x: number[], y: number[], order: number);

  static load(model: PolynomialRegression.PolynomialRegressionModel): PolynomialRegression;

  toJSON(): PolynomialRegression.PolynomialRegressionModel;
}

export = PolynomialRegression;
