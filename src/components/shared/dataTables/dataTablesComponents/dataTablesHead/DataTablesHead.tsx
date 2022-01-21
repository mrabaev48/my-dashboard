import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableHead, TableRow} from "@mui/material";
import {DataTablesFiltersRow} from "../dataTableFiltersRow/DataTablesFiltersRow";
import {DataTablesHeadCell} from "../dataTablesHeadCell/DataTablesHeadCell";

export const DataTablesHead: FC = (props) => {

    const {options} = useDataTablesContext();

    const columns = options.columns.map((column, index) => {
        return (
            <DataTablesHeadCell column={column} key={index}/>
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