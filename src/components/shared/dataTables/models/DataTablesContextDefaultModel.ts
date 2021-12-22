import {IDataTablesContextModel} from "./IDataTablesContextModel";

export const DataTablesContextDefaultModel: IDataTablesContextModel = {
    actions: {
        getFilterValue(defaultValue: any): any {
            throw new Error('getFilterValue not implemented! Provide this function to options object');
        }
    },
    options: {
        columns: [],
        loadData() {
            throw new Error('loadData not implemented! Provide this function to options object');
        },
        uniqueKey: '',
        useFilters: false,
        dateFormat: 'd.MM.yyyy',
    },
    state: {
        data: [],
        filtersData: []
    }
}