import {DataTablesColumnType} from "./DataTablesColumnType";

export interface FromToFilterPlaceholder {
    fromPlaceholder: string;
    toPlaceholder: string;
}

export interface IDataTablesColumn {
    label: string;
    dataSource: string;
    type: DataTablesColumnType;
    useFilter?: boolean | false;
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

export interface IDataTablesActionColumn extends IDataTablesColumn{

}

export type DataTablesColumn =
    IDataTablesColumn |
    IDataTablesSelectColumn |
    IDataTablesDateColumn |
    IDataTablesIntColumn |
    IDataTablesCurrencyColumn |
    IDataTablesStringColumn |
    IDataTablesActionColumn