import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {KeyValuePair, SortingModel} from "../utils/DtUtils";

export interface IDataTablesState {
    data: List<any>;
    filtersData: List<FilterModel | FilterRangeModel>;
    selectColumnsData: List<KeyValuePair<string, List<any>>>;
    sorting: SortingModel;
    selectedRows: List<any>;
    expandedRowsUniqueKeys: List<any>;
    loadedExpandedRowsKeys: List<any>;
    filteredRecords: number;
    totalRecords: number;
    paginationMin: number;
    paginationMax: number;
    paginationData: IPaginationState;
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