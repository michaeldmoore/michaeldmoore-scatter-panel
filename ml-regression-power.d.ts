import BaseRegression from 'ml-regression-base';

declare namespace PowerRegression {
  export interface PowerRegressionModel {
    name: 'PowerRegression';
  }
}

declare class PowerRegression extends BaseRegression {
  constructor(x: number[], y: number[]);

  static load(model: PowerRegression.PowerRegressionModel): PowerRegression;

  toJSON(): PowerRegression.PowerRegressionModel;
}

export = PowerRegression;
