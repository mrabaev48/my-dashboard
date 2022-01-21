import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {DataTablesColumn, IDataTablesActionColumn, IDataTablesDateColumn} from "../models/IDataTablesColumn";
import {format, utcToZonedTime} from "date-fns-tz";
import {IDataTablesContextModel} from "../models/IDataTablesContextModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {DataTablesColumnType} from "../models/DataTablesColumnType";
import {SortDirection} from "@mui/material/TableCell/TableCell";

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

        return this.isFilterWithEmptyValues(filterModel);
    }

    static isFilterWithEmptyValues(filterModel: FilterModel | FilterRangeModel): boolean {

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
        if (!this.shouldRemoveFilter(filterModel)) {
            filters.forEach((filter) => {
                if (filter.filterDataSource === filterModel.filterDataSource) {
                    filter.filterValue = filterModel.filterValue;
                }
            });
        } else {
            filters = filters.Where(x => x.filterDataSource !== filterModel.filterDataSource);
        }
        return filters;
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
