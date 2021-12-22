import {DataTablesColumnType} from "./DataTablesColumnType";

export interface IDataTablesColumn {
    label: string;
    dataSource: string;
    type: DataTablesColumnType;
    useFilter?: boolean | false;
}

export interface IDataTablesSelectColumn extends IDataTablesColumn {
    loadSelectDataSource: () => any[] | Promise<any[]>
}

export type DataTablesColumn = IDataTablesColumn | IDataTablesSelectColumn