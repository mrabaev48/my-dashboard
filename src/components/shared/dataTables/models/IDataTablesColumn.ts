import {DataTablesColumnType} from "./DataTablesColumnType";
import {SortDirection} from "@mui/material/TableCell/TableCell";
import React from "react";

export interface FromToFilterPlaceholder {
    fromPlaceholder: string;
    toPlaceholder: string;
}

export interface IDataTablesColumn {
    label: string;
    dataSource: string;
    type: DataTablesColumnType;
    useFilter?: boolean;
    useSorting?: boolean;
    sortDirection?: SortDirection;
    required?: boolean;
    editable?: boolean;
    className?: string;
    transform?: (it: any) => any;
}

export interface IDataTablesSelectColumn extends IDataTablesColumn {
    loadSelectDataSource: () => any[] | Promise<any[]>;
}

export interface IDataTablesDateColumn extends IDataTablesColumn {
    useTime?: boolean;
    filterPlaceholder?: FromToFilterPlaceholder;
}

export interface IDataTablesIntColumn extends IDataTablesColumn {
    filterPlaceholder?: FromToFilterPlaceholder;
}

export interface IDataTablesCurrencyColumn extends IDataTablesColumn {
    filterPlaceholder?: FromToFilterPlaceholder;
}

export interface IDataTablesStringColumn extends IDataTablesColumn {
    filterPlaceholder?: string;
}

export interface IDataTablesActionColumn extends IDataTablesColumn { }

export interface IDataTablesSelectionColumn extends IDataTablesColumn { }

export interface IDataTablesExpandColumn extends IDataTablesColumn { }

export type DataTablesColumn =
    IDataTablesColumn |
    IDataTablesSelectColumn |
    IDataTablesDateColumn |
    IDataTablesIntColumn |
    IDataTablesCurrencyColumn |
    IDataTablesStringColumn |
    IDataTablesActionColumn |
    IDataTablesSelectionColumn |
    IDataTablesExpandColumn