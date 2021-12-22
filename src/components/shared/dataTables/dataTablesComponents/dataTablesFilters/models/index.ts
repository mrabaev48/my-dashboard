import {DataTablesColumn} from "../../../models/IDataTablesColumn";

export interface IDataTablesFilterProps {
    column: DataTablesColumn
}

// export interface IDataTablesStringFilterProps extends IDataTablesFilterPropsBase {
//
// }

export interface FilterModel {
    filterDataSource: string;
    filterValue: any;
}

export enum FilterTypes {
    STRING = 'STRING',
    EMPTY = 'EMPTY',
    INT = 'INT'
}