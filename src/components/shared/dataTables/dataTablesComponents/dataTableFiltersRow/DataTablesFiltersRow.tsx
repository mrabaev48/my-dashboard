import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTableStringFilter} from "../dataTablesFilters/DataTableStringFilter";
import {TableRow} from "@mui/material";
import {DataTableEmptyTableFilter} from "../dataTablesFilters/DataTableEmptyTableFilter";
import {FilterTypes} from "../dataTablesFilters/models";
import {DataTableIntFilter} from "../dataTablesFilters/DataTableIntFilter";

export interface IDataTablesFiltersRowProps {

}

const FILTERS: any = {
    STRING: DataTableStringFilter,
    // bool: DataTableBoolTableFilter,
    // date: DataTableDateRangeFilter,
    INT: DataTableIntFilter,
    // decimal: DataTableDecimalFilter,
    // currency: DataTableCurrencyFilter,
    // select: DataTableSelectTableFilter,
    EMPTY: DataTableEmptyTableFilter,
}

export const DataTablesFiltersRow:FC<IDataTablesFiltersRowProps> = ({
    children
                                        }) => {
    const { options } = useDataTablesContext();

    const filterCells = options.columns.map((column, index) => {
        const Filter = FILTERS[column.useFilter ? column.type : FilterTypes.EMPTY];
        return <Filter key={index} column />
    });

    return (
        <TableRow className="dt-filters-row">
            {filterCells}
        </TableRow>
    )

}