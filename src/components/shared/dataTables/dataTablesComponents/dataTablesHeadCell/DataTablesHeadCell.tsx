import {FC} from "react";
import {DataTablesBaseHeadCell} from "./DataTablesBaseHeadCell";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";
import {IDataTablesHeadCellProps} from "./models";
import {DataTablesSelectionHeadCell} from "./DataTablesSelectionHeadCell";
import {TableCell} from "@mui/material";
import {DtUtils} from "../../utils/DtUtils";

export const DataTablesHeadCell: FC<IDataTablesHeadCellProps> = ({
                                                                     column
                                                                 }) => {
    switch (column.type) {
        case DataTablesColumnType.SELECTION:
            return (
                <DataTablesSelectionHeadCell column={column}/>
            );
        case DataTablesColumnType.EXPAND:
            return (
                <TableCell role={'gridcell'} className={`${DtUtils.getCellClassNameByColumn(column)}`}/>
            );
        default:
            return (
                <DataTablesBaseHeadCell column={column}/>
            );
    }
}