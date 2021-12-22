import {DataTablesColumn} from "./IDataTablesColumn";

export interface IDataTablesActions {
    getFilterValue: (defaultValue: any, column: DataTablesColumn) => any;
}