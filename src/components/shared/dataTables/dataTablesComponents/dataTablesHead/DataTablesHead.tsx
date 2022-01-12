import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableCell, TableHead, TableRow} from "@mui/material";
import {DataTablesFiltersRow} from "../dataTableFiltersRow/DataTablesFiltersRow";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import {SortDirections} from "../../utils/DtUtils";
import {DataTablesColumn} from "../../models/IDataTablesColumn";

export interface IDataTablesHeadProps {

}

export const DataTablesHead: FC<IDataTablesHeadProps> = (props) => {

    const {options, actions, state} = useDataTablesContext();
    const sortModel = state.sorting;

    const sortOnClick = (e: any, column: DataTablesColumn) => {
        if (column.useSorting !== false
            && options.useSorting !== false
        ) {
            actions.addOrUpdateSorting(column.dataSource);
        }
    }

    const columns = options.columns.map((column, index) => {
        const isSorted = column.dataSource === sortModel.columnDataSource;
        const isSortable = column.useSorting !== false && options.useSorting !== false;
        return (
            <TableCell
                role={'gridcell'}
                className={`dt-head-cell ${isSortable ? 'dt-sortable-head-cell' : ''}`}
                key={index}
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
                    <ArrowDownward className={'dt-sortable-head-cell-icon'} color={"primary"} fontSize={"small"}/>
                    :
                    null}
                {column.label}
            </TableCell>
        )
    });

    return (
        <TableHead role={'heading'} className={`${options.dtHeaderClassName} dt-head`}>
            <TableRow role={'row'} className={'dt-head-row'}>
                {columns}
            </TableRow>
            {options.useFilters &&
                <DataTablesFiltersRow/>
            }
        </TableHead>
    )
}