export interface IColumnItem {
    name: string;
    function: IColumnItemFunction
}

export enum IColumnItemFunction {
    dimension = 'dimension',
    measure = 'measure'
}