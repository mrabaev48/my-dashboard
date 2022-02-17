import { DataTablesColumn } from "./IDataTablesColumn";
import React from "react";

export interface IFilterEntity {
    key: string,
    filter: JSX.Element;
    colspan?: number;
}

export interface IDataTablesOptions {
    columns: DataTablesColumn [];
    filters?: IFilterEntity [];
    tableData: any[];
    uniqueKey: string;
    dtTableClassName?: string;
    dtHeaderClassName?: string;
    dtBodyClassName?: string;
    dtFooterClassName?: string;
    dateFormat?: string;
    timezone?: string;
    useEdit?: boolean;
    useDelete?: boolean;
    useSorting?: boolean;
    useFilters?: boolean;
    deleteRecord?: (row: any) => void | Promise<void>;
    updateRecord?: (row: any) => void | Promise<void>;
    useSelection?: boolean;
    useExpand?: boolean;
    itemsPerPage?: number[];
    itemsPerPageDefault?: number;
    usePaging?: boolean;
    renderExpandedDataControl?: (row: any) => JSX.Element;
    renderCustomActionsControls?: (row: any) => JSX.Element [];
}
