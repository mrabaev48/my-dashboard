import React, {FC} from 'react';
import {TableRow} from "@mui/material";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTableFilter} from "../dataTablesFilters/DataTableFilter";

export const DataTablesDisplayFiltersRow:FC = () => {

    const { state } = useDataTablesContext();

    const filterCells = state.columns.map((column, index) => {
        return (
            <DataTableFilter key={index} column={column}/>
        )
    });

    return (
        <TableRow className="dt-filters-row">
            {filterCells}
        </TableRow>
    );
};