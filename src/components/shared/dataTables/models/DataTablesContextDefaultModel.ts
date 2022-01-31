import {IDataTablesContextModel} from "./IDataTablesContextModel";
import {List} from "linqscript";
import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {KeyValuePair} from "../utils/DtUtils";
import {IPaginationState} from "./IDataTablesState";

export const DataTablesContextDefaultModel: IDataTablesContextModel = {
    actions: {
        getFilterValue(defaultValue: any): any {
            throw new Error('getFilterValue not implemented! Provide this function to actions object');
        },
        collectFiltersData(filterModel) {
            throw new Error('addToFilters not implemented! Provide this function to actions object');
        },
        setSelectColumnData(data: KeyValuePair<string, List<any>>) {
            throw new Error('setSelectColumnData not implemented! Provide this function to actions object');
        },
        getSelectColumnData(columnDataSource: string): List<any> {
            throw new Error('getSelectColumnData not implemented! Provide this function to actions object');
        },
        isSelectDataExist(columnDataSource: string): boolean {
            throw new Error('isSelectDataExist not implemented! Provide this function to actions object');
        },
        clearFilters(): void {
            throw new Error('clearFilters not implemented! Provide this function to actions object');
        },
        addOrUpdateSorting(columnDatasource: string): void {
            throw new Error('addOrUpdateSorting not implemented! Provide this function to actions object');
        },
        editRecord(row: any): void {
            throw new Error('editRecord not implemented! Provide this function to actions object');
        },
        setHasError(value: boolean): void {
            throw new Error('setHasError not implemented! Provide this function to actions object');
        },
        isRowSelected(row: any): boolean {
            throw new Error('isRowSelected not implemented! Provide this function to actions object');
        },
        toggleRowSelection(row: any): void {
            throw new Error('toggleRowSelection not implemented! Provide this function to actions object');
        },
        selectAllRows(): void {
            throw new Error('selectAllRows not implemented! Provide this function to actions object');
        },
        unselectAllRows(): void {
            throw new Error('unselectAllRows not implemented! Provide this function to actions object');
        },
        isTableRowExpanded(uniqueKey: any): boolean {
            throw new Error('isTableRowExpanded not implemented! Provide this function to actions object');
        },
        expandTableRow(uniqueKey: any): void {
            throw new Error('expandTableRow not implemented! Provide this function to actions object');
        },
        collapseTableRow(uniqueKey: any): void {
            throw new Error('collapseTableRow not implemented! Provide this function to actions object');
        },
        collectExpandedRows(uniqueKeys: any[]): void {
            throw new Error('collectExpandedRows not implemented! Provide this function to actions object');
        },
        setPaginationMin(value: number): void {
            throw new Error('setPaginationMin not implemented! Provide this function to actions object');
        },
        setFilteredRecords(value: number): void {
            throw new Error('setFilteredRecords not implemented! Provide this function to actions object');
        },
        setPaginationMax(value: number): void {
            throw new Error('setPaginationMax not implemented! Provide this function to actions object');
        },
        setTotalRecords(value: number): void {
            throw new Error('setTotalRecords not implemented! Provide this function to actions object');
        },
        setPaginationData(value: IPaginationState): void {
            throw new Error('setTotalRecords not implemented! Provide this function to actions object');
        },
        applyFilters(): void {
            throw new Error('applyFilters not implemented! Provide this function to actions object');
        }
    },
    options: {
        columns: [],
        loadData(requestOptions: any, queryString: string) {
            throw new Error('loadData not implemented! Provide this function to options object');
        },
        uniqueKey: '',
        dateFormat: 'd.MM.yyyy',
        timezone: 'GMT',
        useFilters: true,
        useEdit: true,
        useSorting: true,
        useDelete: true,
        useSelection: true,
        useExpand: false,
        hasExpandDataSource: null,
        expandLazyLoading: false,
        itemsPerPage: [10, 25, 100],
        itemsPerPageDefault: 25,
        usePaging: true,
        baseURL: '',
    },
    state: {
        data: new List<any>(),
        filtersData: new List<FilterModel | FilterRangeModel>(),
        selectColumnsData: new List<KeyValuePair<string, List<any>>>(),
        loadedExpandedRowsKeys: new List<any>(),
        sorting: {
            direction: false,
            columnDataSource: 'undefined'
        },
        editRecord: null,
        selectedRows: new List<any>(),
        expandedRowsUniqueKeys: new List<any>(),
        filteredRecords: 0,
        totalRecords: 0,
        paginationMin: 0,
        paginationMax: 0,
        paginationData: {
            selectedItemsPerPage: null,
            pageCount: 0,
            totalItems: 0,
            currentPageIndex: 1,
            paginationMin: 0,
            paginationMax: 0,
            filteredRecords: 0,
        }
    }
}