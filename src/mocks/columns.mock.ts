import { IColumnItem, IColumnItemFunction } from "../models";

const ColumnsMockData: IColumnItem[] = [
    {
        name: 'Product',
        function: IColumnItemFunction.dimension
    },
    {
        name: 'Year',
        function: IColumnItemFunction.dimension
    },
    {
        name: 'Country',
        function: IColumnItemFunction.dimension
    },
    {
        name: 'Cost',
        function: IColumnItemFunction.measure
    },
    {
        name: 'Revenue',
        function: IColumnItemFunction.measure
    },
    {
        name: 'Units sold',
        function: IColumnItemFunction.measure
    }
]

export default ColumnsMockData;