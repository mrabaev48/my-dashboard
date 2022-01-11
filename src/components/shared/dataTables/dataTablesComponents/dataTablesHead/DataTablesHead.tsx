import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableCell, TableHead, TableRow} from "@mui/material";
import {DataTablesFiltersRow} from "../dataTableFiltersRow/DataTablesFiltersRow";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";

export interface IDataTablesHeadProps {

}

export const DataTablesHead:FC<IDataTablesHeadProps> = (props) => {

    const { options } = useDataTablesContext();

    const columns = options.columns.map((column, index) => {
        return (
            <TableCell
                role={'gridcell'}
                key={index}
                className={'dt-head-cell'}
            >
                {column.type !== DataTablesColumnType.ACTION ? column.label : 'Actions'}
            </TableCell>
        );
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