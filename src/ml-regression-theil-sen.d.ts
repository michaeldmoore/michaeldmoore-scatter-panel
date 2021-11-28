import BaseRegression from 'ml-regression-base';

declare namespace ThielSenRegression {
  export interface ThielSenRegressionModel {
    name: 'ThielSenRegression';
  }
}

declare class ThielSenRegression extends BaseRegression {
  constructor(x: number[], y: number[]);

  static load(model: ThielSenRegression.ThielSenRegressionModel): ThielSenRegression;

  toJSON(): ThielSenRegression.ThielSenRegressionModel;
}

export = ThielSenRegression;
