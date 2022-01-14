import {IDataTablesContextModel} from "./IDataTablesContextModel";
import {List} from "linqscript";
import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {KeyValuePair, SortingModel} from "../utils/DtUtils";

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
        },setHasError(value: boolean): void {
            throw new Error('setHasError not implemented! Provide this function to actions object');
        }
    },
    options: {
        columns: [],
        loadData() {
            throw new Error('loadData not implemented! Provide this function to options object');
        },
        uniqueKey: '',
        dateFormat: 'd.MM.yyyy',
        timezone: 'GMT',
        useFilters: true,
        useEdit: true,
        useSorting: true,
        useDelete: true,
        /*deleteRecord: (row: any) => {
            throw new Error('deleteRecord not implemented! Provide this function to options object');
        },
        updateRecord: (row: any) => {
            throw new Error('deleteRecord not implemented! Provide this function to options object');
        },*/
    },
    state: {
        data: new List<any>(),
        filtersData: new List<FilterModel | FilterRangeModel>(),
        selectColumnsData: new List<KeyValuePair<string, List<any>>>(),
        sorting: {
            direction: false,
            columnDataSource: 'undefined'
        },
        editRecord: null,
    }
}