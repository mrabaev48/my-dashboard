import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {DataTablesColumn, IDataTablesActionColumn, IDataTablesDateColumn} from "../models/IDataTablesColumn";
import {format, utcToZonedTime} from "date-fns-tz";
import {IDataTablesContextModel} from "../models/IDataTablesContextModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {DataTablesColumnType} from "../models/DataTablesColumnType";
import {SortDirection} from "@mui/material/TableCell/TableCell";
import {IPaginationState} from "../models/IDataTablesState";
import {IRequestOptions} from "../models";

export class DtUtils {

    static getCellClassNameByColumn(column: DataTablesColumn): string {
        return `dt-${column.type.toString().toLowerCase()}-cell dt-cell`;
    }

    static getDateFormat(column: IDataTablesDateColumn, context: IDataTablesContextModel): string {

        if (column.useTime === false) {
            return context.options.dateFormat!;
        }

        return context.options.dateFormat + ' HH:mm';
    }

    static getFormattedDate(date: Date | string, column: IDataTablesDateColumn, context: IDataTablesContextModel) {

        if (date === null || date === new Date(UTC_MIN_DATE)) {
            return null;
        }
        const zonedTime = utcToZonedTime(new Date(date), context.options.timezone!);
        return format(zonedTime, this.getDateFormat(column, context));
    }

    static showTimeSelect(column: IDataTablesDateColumn) {
        return column.useTime !== false;
    }

    private static shouldRemoveFilter(filterModel: FilterModel | FilterRangeModel) {
        if (!filterModel || !filterModel.filterValue) {
            return true;
        }

        return this.hasFilterEmptyValues(filterModel);
    }

    static hasFilterEmptyValues(filterModel: FilterModel | FilterRangeModel): boolean {
        if (filterModel.filterValue === 0 || filterModel.filterValue === '' || filterModel.filterValue === null || filterModel.filterValue === undefined) {
            return true;
        }

        if (filterModel.filterValue instanceof Object) {
            if (
                (!filterModel.filterValue.fromValue && !filterModel.filterValue.toValue) ||
                (filterModel.filterValue.fromValue === 0 && filterModel.filterValue.toValue === 0) ||
                (filterModel.filterValue.fromValue === null && filterModel.filterValue.toValue === null) ||
                (filterModel.filterValue.fromValue === '' && filterModel.filterValue.toValue === '')
            )
                return true;
        }

        return false;
    }

    static changeFilterOrRemove(filters: List<FilterModel | FilterRangeModel>, filterModel: FilterModel | FilterRangeModel): List<FilterModel | FilterRangeModel> {
        if (this.shouldRemoveFilter(filterModel)) {
            return filters.Where(x => x.filterDataSource !== filterModel.filterDataSource);
        }

        const res = filters.map((filter) => {
            if (filter.filterDataSource === filterModel.filterDataSource) {
                filter.filterValue = filterModel.filterValue;
            }
            return filter;
        });

        return new List<FilterModel | FilterRangeModel>(res);
    }

    static isDecimal(stringVal: string): boolean {
        stringVal = stringVal.trim()
        const regexp = /^\d+\.?\d{0,10}$/;
        return regexp.test(stringVal)
    }

    static isInteger(stringVal: string): boolean {
        stringVal = stringVal.trim()
        const regex = /^\d+$/
        return regex.test(stringVal)
    }

    static isActionCellNeeded(options: IDataTablesOptions): boolean {
        return Boolean(options.useFilters || options.useDelete || options.useEdit);
    }

    static getActionColumnObject(): IDataTablesActionColumn {
        return  {
            label: 'Actions',
            dataSource: 'null',
            type: DataTablesColumnType.ACTION,
            useFilter: true,
            useSorting: false
        }
    }

    static getSelectionColumnObject(): IDataTablesActionColumn {
        return  {
            label: '',
            dataSource: 'null',
            type: DataTablesColumnType.SELECTION,
            useFilter: false,
            useSorting: false
        }
    }

    static getExpandColumnObject(): IDataTablesActionColumn {
        return  {
            label: '',
            dataSource: 'null',
            type: DataTablesColumnType.EXPAND,
            useFilter: false,
            useSorting: false
        }
    }

    static hasTableRowExpand(options: IDataTablesOptions, row: any): boolean {
        if (options.useExpand && options.hasExpandDataSource === null) {
            return true;
        }

        return options.useExpand === true && options.expandLazyLoading === true &&
            ((typeof options.hasExpandDataSource === 'string' && row[options.hasExpandDataSource]) ||
                (typeof options.hasExpandDataSource === 'function' && options.hasExpandDataSource(row)));
    }

    static getQueryOptions(sorting: SortingModel, filtersData: List<FilterModel>, paginationData: IPaginationState): IRequestOptions {
        const options: IRequestOptions = {
            headers: {
                token: undefined
            },
            urlData: {
                sortCSV: this.convertSortingToCSVFormat(sorting),
                filters: this.formatFiltersData(filtersData),
                pagination: {
                    paginationMin: paginationData.paginationMin,
                    paginationMax: paginationData.paginationMax
                }
            }
        }

        return options;
    }

    static convertSortingToCSVFormat(sorting: SortingModel) {
        let result = '';

        const tmp = [sorting];

        if (sorting === undefined || sorting === null) {
            return result;
        }

        tmp.forEach((element: SortingModel, index: number) => {
            result += (Object.keys(element)
                .map((k:string) =>  {
                    return (element as any)[k];
                })) + (index === tmp.length - 1 ? '' : ',');
        });

        return result;
    }

    static formatFiltersData(filtersData: List<FilterModel>) {
        let formattedObject = {};

        if (filtersData === undefined || filtersData.length === 0) {
            return formattedObject;
        }

        filtersData.forEach((element, index) => {
            const fieldNameFrom = element.filterDataSource + 'From';
            const fieldNameTo = element.filterDataSource + 'To';

            if(element.filterValue != null) {
                if (typeof element.filterValue === 'object' && !Array.isArray(element.filterValue)) {
                    if (element.filterValue.startRange !== null) {
                        (formattedObject as any)[fieldNameFrom] = element.filterValue.fromValue;
                    }
                    if (element.filterValue.endRange !== null) {
                        (formattedObject as any)[fieldNameTo] = element.filterValue.toValue;
                    }
                } else {
                    if (element.filterValue.trim instanceof Function) {
                        element.filterValue = element.filterValue.trim();
                    }

                    (formattedObject as any)[element.filterDataSource] = element.filterValue;
                }
            }
        });
        return formattedObject;
    }

    static buildRequestQueryString(options: IRequestOptions, dtOptions: IDataTablesOptions, baseUrl: string = ''): string {
        let queryString = baseUrl;

        let filtersQueryString = this.buildQueryStringWithNestedObject(options.urlData.filters);
        filtersQueryString = filtersQueryString !== '' ? '&' + filtersQueryString : filtersQueryString;

        let sortQueryString = options.urlData.sortCSV === '' ? '' : `&${ this.buildQueryString({sortCSV: options.urlData.sortCSV}).substr(1)}`

        let paginationQueryString = '';

        if (dtOptions.usePaging) {
            paginationQueryString =
                '&Pagination.Min=' + options.urlData.pagination.paginationMin
                + '&Pagination.Max=' + options.urlData.pagination.paginationMax;
        }

        queryString =
            queryString + (queryString.indexOf('?') !== -1 ? '' : '?')
            + sortQueryString
            + filtersQueryString
            + paginationQueryString;

        return queryString;
    }

    static buildQueryString(data: any) {
        let query = "";
        if (data) {
            query = "?" + (Object.keys(data)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                .join('&'));
        }

        return query;
    }

    static buildQueryStringWithNestedObject(data: any) {
        let query = "&";
        if (data) {
            query = (Object.keys(data)
                .map((k, index) => {
                    if (Array.isArray(data[k]) && data[k].length > 0) {
                        return `&${encodeURIComponent(k)}=` + data[k].map((x: any) => encodeURIComponent(x)).join(`&${encodeURIComponent(k)}=`)
                    }
                    else if (Array.isArray(data[k])) {
                        return ''
                    }

                    if(typeof data[k] === 'object') {
                        return this.buildQueryStringWithNestedObject(data[k])
                    }
                    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
                })
                .join('&'));
        }

        return query;
    }

    static JSONStringifyValuesOfObjectKeys(object: any) {
        let result = {}
        if (object) {
            Object.keys(object).map(k => {
                (result as any)[k] = JSON.stringify(object[k]);
            })
        }
        return result
    }
}

export const UTC_MIN_DATE = '0001-01-01T00:00:00'

export interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

export enum SortDirections {
    ASC = 'asc',
    DESC = 'desc',
    FALSE = 'false'
}

export interface SortingModel {
    columnDataSource: string;
    direction: SortDirection;
}
