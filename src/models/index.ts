export interface IColumnItem {
  name: string;
  function: IColumnItemFunction;
}

export enum IColumnItemFunction {
  dimension = "dimension",
  measure = "measure",
}

export interface IPlotterData {
  name: string;
  values: string[] | number[];
}

export interface INivoLineData {
  id: string;
  color: string;
  data: any[];
  legends: string[];
}
