import {FC} from "react";
import {IDataTablesOptions} from "./models/IDataTablesOptions";
import {DataTablesProvider} from "./config/DataTablesProvider";
import {DataTablesHead} from "./dataTablesComponents/dataTablesHead/DataTablesHead";
import {DataTablesBody} from "./dataTablesComponents/dataTablesBody/DataTablesBody";
import {ConfirmDialogProvider} from "../dialog/confirmDialog/config/ConfirmDialogProvider";
import {Table} from "@mui/material";

import './defaultStyles.scss'
import {DataTablesFooter} from "./dataTablesComponents/dataTablesFooter/DataTablesFooter";
import {DataTablesPagination} from "./dataTablesComponents/dataTablesPagination/DataTablesPagination";

export interface IDataTablesProps {
    options: IDataTablesOptions
}

export const DataTables:FC<IDataTablesProps> = ({options}) => {
    return (
        <DataTablesProvider
            options={options}
        >
                <div className={`dt-container`}>
                    <Table role={'data-table'} className={`${options.dtTableClassName} dt-table`} style={{ width: '100%'}} >
                        <DataTablesHead/>
                        <DataTablesBody/>
                        <DataTablesFooter/>
                    </Table>
                    <DataTablesPagination/>
                    {/*<ColumnSettingsDialog/>*/}
                </div>
        </DataTablesProvider>
    )
}