import {DataTablesColumn} from "./IDataTablesColumn";
import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {KeyValuePair} from "../utils/DtUtils";

export interface IDataTablesActions {
    getFilterValue: (defaultValue: any, column: DataTablesColumn) => FilterModel;
    collectFiltersData: (filterModel: FilterModel | FilterRangeModel) => void;
    setSelectColumnData: (data: KeyValuePair<string, List<any>>) => void;
    getSelectColumnData: (columnDataSource: string) => List<any>;
    isSelectDataExist: (columnDataSource: string) => boolean;
    clearFilters: () => void;
    addOrUpdateSorting: (columnDataSource: string) => void;
    editRecord: (row: any) => void
    setHasError: (value: boolean) => void;
    isRowSelected: (row: any) => boolean;
    toggleRowSelection: (row: any) => void;
    selectAllRows: () => void;
    unselectAllRows: () => void;
    isTableRowExpanded: (uniqueKey: any) => boolean;
    expandTableRow: (uniqueKey: any) => void;
    collapseTableRow: (uniqueKey: any) => void;
}