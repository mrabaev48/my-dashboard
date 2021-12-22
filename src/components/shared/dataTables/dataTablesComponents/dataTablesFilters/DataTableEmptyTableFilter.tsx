import {FC} from "react";
import {IDataTablesFilterProps} from "./models";
import {TableCell} from "@mui/material";

export const DataTableEmptyTableFilter:FC<IDataTablesFilterProps> = () => {
    return (
        <TableCell className={'dt-empty-filter'}/>
    )
}