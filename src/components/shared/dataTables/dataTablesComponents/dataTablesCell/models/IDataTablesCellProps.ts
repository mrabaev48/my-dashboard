import {
    DataTablesColumn, IDataTablesDateColumn, IDataTablesSelectColumn
} from "../../../models/IDataTablesColumn";

export interface IDataTablesCellPropsBase {
    useAutofocus: boolean | false;
    cellValue: any;
    column: DataTablesColumn;
    rowCells: any;
    error?: string | '';
    className?: string;
}

export interface IDataTablesStringCellProps extends  IDataTablesCellPropsBase {
    cellValue: string;
}

export interface IDataTablesIntCellProps extends  IDataTablesCellPropsBase {
    cellValue: string;
}

export interface IDataTablesBooleanCellProps extends  IDataTablesCellPropsBase {
    cellValue: boolean;
}

export interface IDataTablesCurrencyCellProps extends  IDataTablesCellPropsBase {
    cellValue: number;
}

export interface IDataTablesSelectCellProps extends  IDataTablesCellPropsBase {
    column: IDataTablesSelectColumn;
    cellValue: string;
}

export interface IDataTablesDecimalCellProps extends  IDataTablesCellPropsBase {
    cellValue: number;
}

export interface IDataTablesDateCellProps extends  IDataTablesCellPropsBase {
    column: IDataTablesDateColumn;
    cellValue: Date | string;
}

export interface IDataTablesActionCellProps {
    rowCells: any;
    className?: string;
}

export interface IDataTablesSelectionCellProps {
    rowCells: any;
    className?: string;
}