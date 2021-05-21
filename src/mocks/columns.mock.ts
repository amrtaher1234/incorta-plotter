import { ColumnItem, ColumnItemFunction } from "../models";

const ColumnsMockData: ColumnItem[] = [
    {
        name: 'Product',
        function: ColumnItemFunction.dimension
    },
    {
        name: 'Year',
        function: ColumnItemFunction.dimension
    },
    {
        name: 'Country',
        function: ColumnItemFunction.dimension
    },
    {
        name: 'Cost',
        function: ColumnItemFunction.measure
    },
    {
        name: 'Revenue',
        function: ColumnItemFunction.measure
    },
    {
        name: 'Units sold',
        function: ColumnItemFunction.measure
    }
]

export default ColumnsMockData;