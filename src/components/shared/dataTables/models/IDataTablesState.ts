import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {KeyValuePair, SortingModel} from "../utils/DtUtils";
import {DataTablesColumn} from "./IDataTablesColumn";

export interface IDataTablesState {
    filtersData: List<FilterModel | FilterRangeModel>;
    selectColumnsData: List<KeyValuePair<string, List<any>>>;
    sorting: SortingModel;
    selectedRows: List<any>;
    expandedRowsUniqueKeys: List<any>;
    loadedExpandedRowsKeys: List<any>;
    paginationData: IPaginationState;

    columns: DataTablesColumn [];
}

export interface IPaginationState {
    selectedItemsPerPage: number | null;
    pageCount: number;
    totalItems: number;
    currentPageIndex: number;
    paginationMin: number;
    paginationMax: number;
    filteredRecords: number;
}