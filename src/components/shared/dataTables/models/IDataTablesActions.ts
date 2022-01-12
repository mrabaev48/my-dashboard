import {DataTablesColumn} from "./IDataTablesColumn";
import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {KeyValuePair, SortingModel} from "../utils/DtUtils";

export interface IDataTablesActions {
    getFilterValue: (defaultValue: any, column: DataTablesColumn) => FilterModel;
    collectFiltersData: (filterModel: FilterModel | FilterRangeModel) => void;
    setSelectColumnData: (data: KeyValuePair<string, List<any>>) => void;
    getSelectColumnData: (columnDataSource: string) => List<any>;
    isSelectDataExist: (columnDataSource: string) => boolean;
    clearFilters: () => void;
    addOrUpdateSorting: (columnDataSource: string) => void;
}