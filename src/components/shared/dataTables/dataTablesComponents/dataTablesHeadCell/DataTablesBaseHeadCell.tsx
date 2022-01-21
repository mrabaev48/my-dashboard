import {FC} from "react";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {DtUtils, SortDirections} from "../../utils/DtUtils";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import {TableCell} from "@mui/material";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {IDataTablesHeadCellProps} from "./models";

export const DataTablesBaseHeadCell: FC<IDataTablesHeadCellProps> = ({
                                                                     column
                                                                 }) => {

    const {options, actions, state} = useDataTablesContext();
    const sortModel = state.sorting;

    const isSorted = column.dataSource === sortModel.columnDataSource;
    const isSortable = column.useSorting !== false && options.useSorting !== false;

    const sortOnClick = (e: any, column: DataTablesColumn) => {
        if (column.useSorting !== false
            && options.useSorting !== false
        ) {
            actions.addOrUpdateSorting(column.dataSource);
        }
    }

    return (
        <TableCell
            role={'gridcell'}
            className={`dt-head-cell ${isSortable ? 'dt-sortable-head-cell' : ''} ${DtUtils.getCellClassNameByColumn(column)}`}
            onClick={(e: any) => sortOnClick(e, column)}
            sortDirection={sortModel.direction}
        >
            {isSorted && sortModel.direction === SortDirections.ASC
                ?
                <ArrowUpward className={'dt-sortable-head-cell-icon'} color={"primary"} fontSize={"small"}/>
                :
                null}
            {isSorted && sortModel.direction === SortDirections.DESC
                ?
                <ArrowDownward className={'dt-sortable-head-cell-icon'} color={"primary"}
                               fontSize={"small"}/>
                :
                null}
            {column.label}
        </TableCell>
    )
}