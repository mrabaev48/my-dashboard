import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTablesBodyRow} from "../dataTablesBodyRow/DataTablesBodyRow";
import {TableBody} from "@mui/material";

export interface IDataTablesBodyProps {

}

export const DataTablesBody:FC<IDataTablesBodyProps> = (props) => {
    const { state, options } = useDataTablesContext();
    const tableRows = state.data.map((rowData: any, index) => {
        return (
            <DataTablesBodyRow
                data-cy={'datatables-tableBody_' + options.uniqueKey}
                key={index + '_' + rowData[options.uniqueKey]}
                rowCells={rowData}
            />
        )
    })
    return (
        <TableBody data-cy={'datatables-tableBody_' + options.uniqueKey} className={`${options.dtBodyClassName} dt-body`}>
            {tableRows}
        </TableBody>
    )
}