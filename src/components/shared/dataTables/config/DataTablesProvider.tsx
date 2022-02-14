import React, {FC, useEffect, useState} from "react";
import {DataTablesContext} from "./DataTablesContext";
import {DataTablesContextDefaultModel} from "../models/DataTablesContextDefaultModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {List} from "linqscript";
import {FilterModel, FilterRangeModel,} from "../dataTablesComponents/dataTablesFilters/models";
import {DataTablesColumn} from "../models/IDataTablesColumn";

import _ from 'lodash';
import {DtUtils, KeyValuePair, SortDirections, SortingModel} from "../utils/DtUtils";
import {IDataTablesState, IPaginationState} from "../models/IDataTablesState";


export interface IDataTablesProviderProps {
    options: IDataTablesOptions;
}

let _LoadedExpandedRowsKeys: any[] = [];

export const DataTablesProvider: FC<IDataTablesProviderProps> = ({
                                                                     options,
                                                                     children
                                                                 }) => {
    const mergedOptions = {
        ...DataTablesContextDefaultModel.options,
        ...options
    };

    const [dtState, setDtState] = useState<IDataTablesState>(DataTablesContextDefaultModel.state);

    const collectDtOptionsData = () => {
        if (DtUtils.isActionCellNeeded(mergedOptions)) {
            mergedOptions.columns.push(DtUtils.getActionColumnObject());
        }

        if (mergedOptions.useSelection === true) {
            mergedOptions.columns.unshift(DtUtils.getSelectionColumnObject());
        }

        if (mergedOptions.useExpand === true && mergedOptions.renderExpandedDataControl) {
            mergedOptions.columns.unshift(DtUtils.getExpandColumnObject());
        }

        const sortColumn = mergedOptions.columns.find(x => x.sortDirection !== undefined && x.sortDirection !== false);

        const sortModel = {...dtState.sorting};

        if (sortColumn) {
            sortModel.columnDataSource = sortColumn.dataSource;
            sortModel.direction = sortColumn.sortDirection!;
        }

        setDtState({
            ...dtState,
            sorting: sortModel,
            columns: mergedOptions.columns
        })
    }

    useEffect(() => {
        collectDtOptionsData();
    }, []);

    console.log('OPTIONS: ', {mergedOptions, dtState})

    return (
        <DataTablesContext.Provider
            value={{
                state: dtState,
                actions: {
                    ...DataTablesContextDefaultModel.actions,
                    getFilterValue(defaultValue: any, column: DataTablesColumn): FilterModel | FilterRangeModel {
                        const filterModel = dtState.filtersData.find(f => f.filterDataSource === column.dataSource);

                        if (filterModel) {
                            return _.cloneDeep(filterModel);
                        }

                        return {filterValue: defaultValue, filterDataSource: column.dataSource};
                    },
                    collectFiltersData(filterModel) {
                        const isExists = dtState.filtersData.Any(x => x.filterDataSource === filterModel.filterDataSource);
                        let filters = new List<FilterModel | FilterRangeModel>([...dtState.filtersData]);

                        if (isExists) {
                            filters = DtUtils.changeFilterOrRemove(filters, filterModel);
                        } else {
                            filters.Add(filterModel)
                        }
                        setDtState({
                            ...dtState,
                            filtersData: filters
                        })
                    },
                    setSelectColumnData(data: KeyValuePair<string, List<any>>) {
                        const isExist = dtState.selectColumnsData.Any(x => x.key === data.key);
                        const current = new List([...dtState.selectColumnsData]);
                        if (isExist) {
                            current.forEach(item => {
                                if (item.key === data.key) {
                                    item.value = data.value;
                                }
                            })
                        } else {
                            current.Add(data);
                        }

                        setDtState({
                            ...dtState,
                            selectColumnsData: current
                        });
                    },
                    getSelectColumnData(columnDataSource: string): List<any> {
                        let result = new List<any>();

                        dtState.selectColumnsData.forEach(item => {
                            if (item.key === columnDataSource) {
                                result = item.value;
                            }
                        })

                        return result;
                    },
                    isSelectDataExist(columnDataSource: string): boolean {
                        return dtState.selectColumnsData.Any(x => x.key === columnDataSource);
                    },
                    clearFilters(): void {
                        setDtState({
                            ...dtState,
                            filtersData: new List<FilterModel | FilterRangeModel>()
                        });
                    },
                    async applyFilters(): Promise<void> {

                    },
                    addOrUpdateSorting(columnDataSource: string): void {
                        const current = {...dtState.sorting};
                        if (current.columnDataSource === columnDataSource) {
                            current.direction = current!.direction === SortDirections.ASC ? SortDirections.DESC : SortDirections.ASC;
                        } else {
                            current.columnDataSource = columnDataSource;
                            current.direction = SortDirections.ASC;
                        }

                        setDtState({
                            ...dtState,
                            sorting: current
                        });
                    },
                    isRowSelected(row: any): boolean {
                        if (dtState.selectedRows.length === 0) {
                            return false;
                        }

                        return dtState.selectedRows.Any(x => x === row[mergedOptions.uniqueKey]);
                    },
                    toggleRowSelection(row: any): void {
                        let selected = new List<any>([...dtState.selectedRows]);
                        const item = selected.find(x => x === row[mergedOptions.uniqueKey]);

                        if (item) {
                           selected = selected.Where(x => x !== item);
                        } else {
                            selected.Add(row[mergedOptions.uniqueKey]);
                        }

                        setDtState({
                            ...dtState,
                            selectedRows: selected
                        });
                    },
                    selectAllRows(): void {
                        const rows = mergedOptions.tableData.map(x => {
                            return x[mergedOptions.uniqueKey];
                        })
                        setDtState({
                            ...dtState,
                            selectedRows: new List<any>([...rows, ..._LoadedExpandedRowsKeys])
                        });
                    },
                    unselectAllRows(): void {
                        setDtState({
                            ...dtState,
                            selectedRows: new List<any>()
                        });
                    },
                    isTableRowExpanded(uniqueKey: any): boolean {
                        return dtState.expandedRowsUniqueKeys.Any(x => x === uniqueKey);
                    },
                    expandTableRow(uniqueKey: any): void {
                        const expandedRows = new List<any>([...dtState.expandedRowsUniqueKeys]);
                        expandedRows.Add(uniqueKey);

                        setDtState({
                            ...dtState,
                            expandedRowsUniqueKeys: expandedRows
                        });
                    },
                    collapseTableRow(uniqueKey: any): void {
                        const expandedRows = dtState.expandedRowsUniqueKeys.Where(x => x !== uniqueKey);

                        setDtState({
                            ...dtState,
                            expandedRowsUniqueKeys: expandedRows
                        });
                    },
                    collectExpandedRows(expandedRowsKeys): void {
                        _LoadedExpandedRowsKeys = expandedRowsKeys;
                    },

                    setPaginationData(value): void {
                        setDtState({
                            ...dtState,
                            paginationData: value
                        });
                    }
                },
                options: mergedOptions
            }}
        >
            {children}
        </DataTablesContext.Provider>
    )
}