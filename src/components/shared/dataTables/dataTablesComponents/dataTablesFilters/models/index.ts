import {DataTablesColumn} from "../../../models/IDataTablesColumn";

export interface IDataTablesFilterProps {
    column: DataTablesColumn
}

export interface FilterModel {
    filterDataSource: string;
    filterValue: any;
}

export interface FilterRangeModel {
    filterDataSource: string;
    filterValue: {
        fromValue: any;
        toValue: any;
    }
}


export enum FilterTypes {
    STRING = 'STRING',
    EMPTY = 'EMPTY',
    INT = 'INT'
}