import {FC} from "react";
import {IDataTablesOptions} from "./models/IDataTablesOptions";
import {DataTablesProvider} from "./config/DataTablesProvider";
import {DataTablesHead} from "./dataTablesComponents/dataTablesHead/DataTablesHead";
import {DataTablesBody} from "./dataTablesComponents/dataTablesBody/DataTablesBody";
import {ConfirmDialogProvider} from "../dialog/confirmDialog/config/ConfirmDialogProvider";
import {Table} from "@mui/material";

import './defaultStyles.scss'

export interface IDataTablesProps {
    options: IDataTablesOptions
}

export const DataTables:FC<IDataTablesProps> = ({options}) => {
    return (
        <DataTablesProvider
            options={options}
        >
            <ConfirmDialogProvider>
                <div className={`dt-container`}>
                    <Table role={'data-table'} className={`${options.dtTableClassName} dt-table`}>
                        <DataTablesHead/>
                        <DataTablesBody/>
                        {/*<DataTableFooter/>*/}
                    </Table>
                    {/*<DataTablePagination/>*/}
                    {/*<ColumnSettingsDialog/>*/}
                </div>
            </ConfirmDialogProvider>
        </DataTablesProvider>
    )
}