import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTableStringFilter} from "../dataTablesFilters/DataTableStringFilter";
import {TableRow} from "@mui/material";
import {DataTableEmptyTableFilter} from "../dataTablesFilters/DataTableEmptyTableFilter";
import {FilterTypes} from "../dataTablesFilters/models";
import {DataTableIntFilter} from "../dataTablesFilters/DataTableIntFilter";
import {DataTableBooleanFilter} from "../dataTablesFilters/DataTableBooleanFilter";
import {DataTableCurrencyFilter} from "../dataTablesFilters/DataTableCurrencyFilter";
import {DataTablesSelectFilter} from "../dataTablesFilters/DataTablesSelectFilter";
import {DataTablesDateFilter} from "../dataTablesFilters/DataTablesDateFilter";

export interface IDataTablesFiltersRowProps {

}

const FILTERS: any = {
    STRING: DataTableStringFilter,
    BOOLEAN: DataTableBooleanFilter,
    DATE: DataTablesDateFilter,
    INT: DataTableIntFilter,
    // decimal: DataTableDecimalFilter,
    CURRENCY: DataTableCurrencyFilter,
    SELECT: DataTablesSelectFilter,
    EMPTY: DataTableEmptyTableFilter,
}

export const DataTablesFiltersRow:FC<IDataTablesFiltersRowProps> = ({
    children
                                        }) => {
    const { options } = useDataTablesContext();

    const filterCells = options.columns.map((column, index) => {
        const Filter = FILTERS[column.useFilter ? column.type : FilterTypes.EMPTY];
        return <Filter key={index} column={column} />
    });

    return (
        <TableRow className="dt-filters-row">
            {filterCells}
        </TableRow>
    )

}