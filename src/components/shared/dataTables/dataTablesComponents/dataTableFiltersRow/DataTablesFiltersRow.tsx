import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableRow} from "@mui/material";
import {DataTableFilter} from "../dataTablesFilters/DataTableFilter";



export const DataTablesFiltersRow:FC = ({
    children
                                        }) => {
    const context = useDataTablesContext();

    const filterCells = context.options.columns.map((column, index) => {
        return (
            <DataTableFilter key={index} column={column}/>
        )
    });

    return (
        <TableRow className="dt-filters-row">
            {filterCells}
        </TableRow>
    )

}