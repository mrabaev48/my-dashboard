import {FC} from "react";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";
import {DataTableStringFilter} from "./DataTableStringFilter";
import {DataTableIntFilter} from "./DataTableIntFilter";
import {DataTableBooleanFilter} from "./DataTableBooleanFilter";
import {DataTablesSelectFilter} from "./DataTablesSelectFilter";
import {DataTableCurrencyFilter} from "./DataTableCurrencyFilter";
import {DataTablesActionFilterCell} from "./DataTablesActionFilterCell";
import {DataTablesDateFilter} from "./DataTablesDateFilter";
import {DataTableEmptyTableFilter} from "./DataTableEmptyTableFilter";

export interface IFilterProps {
    column: DataTablesColumn;
}

export const DataTableFilter: FC<IFilterProps> = ({column}) => {
    switch (column.type) {
        case DataTablesColumnType.STRING:
            return (
                <DataTableStringFilter column={column}/>
            );
        case DataTablesColumnType.INT:
            return (
              <DataTableIntFilter column={column}/>
            );
        /*case DataTablesColumnType.DECIMAL:
            break;*/
        case DataTablesColumnType.BOOLEAN:
            return (
                <DataTableBooleanFilter column={column}/>
            );
        case DataTablesColumnType.SELECT:
            return (
                <DataTablesSelectFilter column={column}/>
            );
        case DataTablesColumnType.CURRENCY:
            return (
                <DataTableCurrencyFilter column={column}/>
            );
        case DataTablesColumnType.ACTION:
            return (
                <DataTablesActionFilterCell column={column}/>
            );
        case DataTablesColumnType.DATE:
            return (
                <DataTablesDateFilter column={column}/>
            );
        case DataTablesColumnType.EXPAND:
            return (
                <DataTableEmptyTableFilter column={column} className={'dt-expand-column'}/>
            );
        case DataTablesColumnType.SELECTION:
            return (
                <DataTableEmptyTableFilter column={column} className={'dt-selection-column'}/>
            );
        default:
            return (
                <DataTableEmptyTableFilter column={column} className={''}/>
            );
    }
}