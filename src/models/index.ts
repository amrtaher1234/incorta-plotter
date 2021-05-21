export interface ColumnItem {
    name: string;
    function: ColumnItemFunction
}

export enum ColumnItemFunction {
    dimension = 'dimension',
    measure = 'measure'
}