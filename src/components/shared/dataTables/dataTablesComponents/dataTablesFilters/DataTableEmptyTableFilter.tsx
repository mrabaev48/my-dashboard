import {FC} from "react";
import {IDataTablesFilterProps} from "./models";
import {TableCell} from "@mui/material";
import {DtUtils} from "../../utils/DtUtils";

export const DataTableEmptyTableFilter:FC<IDataTablesFilterProps> = ({className, column}) => {
    return (
        <TableCell className={`dt-empty-filter dt-filter ${className || '' } ${DtUtils.getCellClassNameByColumn(column)}`}/>
    )
}