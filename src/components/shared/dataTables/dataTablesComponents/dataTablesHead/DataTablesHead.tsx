import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableHead, TableRow} from "@mui/material";
import {DataTablesFiltersRow} from "../dataTableFiltersRow/DataTablesFiltersRow";
import {DataTablesHeadCell} from "../dataTablesHeadCell/DataTablesHeadCell";
import {DataTablesDisplayFiltersRow} from "../dataTablesDisplayFiltersRow/DataTablesDisplayFiltersRow";

export const DataTablesHead: FC = (props) => {

    const {options, state} = useDataTablesContext();
    const columns = state.columns.map((column, index) => {
        return (
            <DataTablesHeadCell column={column} key={index}/>
        )
    });

    return (
        <TableHead role={'heading'} className={`${options.dtHeaderClassName} dt-head`}>
            <TableRow role={'row'} className={'dt-head-row'}>
                {columns}
            </TableRow>
            {options.filters && options.filters.length > 0 &&
                <DataTablesFiltersRow/>
            }
            {options.useFilters &&
                <DataTablesDisplayFiltersRow/>
            }
        </TableHead>
    )
}