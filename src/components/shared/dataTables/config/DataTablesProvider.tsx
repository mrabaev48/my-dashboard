import React, {FC, useEffect, useState} from "react";
import {DataTablesContext} from "./DataTablesContext";
import {DataTablesContextDefaultModel} from "../models/DataTablesContextDefaultModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {List} from "linqscript";
import {FilterModel, FilterRangeModel,} from "../dataTablesComponents/dataTablesFilters/models";
import {DataTablesColumn, IDataTablesActionColumn} from "../models/IDataTablesColumn";

import _ from 'lodash';
import {DtUtils, KeyValuePair, SortDirections, SortingModel} from "../utils/DtUtils";
import {DraggableDialog} from "../../dialogExt/DraggableDialog";
import {Button, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import {DataTablesEditForm} from "../dataTablesComponents/dataTablesEditForm/DataTablesEditForm";


export interface IDataTablesProviderProps {
    options: IDataTablesOptions;
}

export const DataTablesProvider: FC<IDataTablesProviderProps> = ({
                                                                     options,
                                                                     children
                                                                 }) => {
    const mergedOptions = {
        ...DataTablesContextDefaultModel.options,
        ...options
    };

    const [data, setData] = useState<List<any>>(new List<any>());
    const [filtersData, setFiltersData] = useState<List<FilterModel | FilterRangeModel>>(new List<FilterModel | FilterRangeModel>());
    const [selectColumnsData, setSelectColumnsData] = useState<List<KeyValuePair<string, List<any>>>>(new List<KeyValuePair<string, List<any>>>());
    const [sorting, setSorting] = useState<SortingModel>(DataTablesContextDefaultModel.state.sorting);
    const [editRecord, setEditRecord] = useState<any | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [selectedRows, setSelectedRows] = useState<List<any>>(new List<any>());
    const [expandedRowsUniqueKeys, setExpandedRowsUniqueKeys] = useState<List<any>>(new List<any>());

    useEffect(() => {
        const loadTableData = async () => {
            const loadedData = await mergedOptions.loadData();
            setData(new List<any>(loadedData));
        }

        if (DtUtils.isActionCellNeeded(mergedOptions)) {
            mergedOptions.columns.push(DtUtils.getActionColumnObject());
        }

        if (mergedOptions.useSelection) {
            mergedOptions.columns.unshift(DtUtils.getSelectionColumnObject());
        }

        if (mergedOptions.useExpand) {
            mergedOptions.columns.unshift(DtUtils.getExpandColumnObject());
        }

        const sortColumn = mergedOptions.columns.find(x => x.sortDirection !== undefined && x.sortDirection !== false);

        if (sortColumn) {
            const sortModel = {...sorting};
            sortModel.columnDataSource = sortColumn.dataSource;
            sortModel.direction = sortColumn.sortDirection!;
            setSorting(sortModel);
        }

        if (!mergedOptions.useExpand) {
            mergedOptions.expandLazyLoading = null;
        }

        if (!mergedOptions.expandLazyLoading) {
            mergedOptions.hasExpandDataSource = null;
        }

        loadTableData();
    }, []);

    useEffect(() => {
        if (editRecord) {
            setDialogOpen(true);
        }
    }, [editRecord]);

    console.log('OPTIONS & STATE DATA: ', {
        options: mergedOptions,
        editRecord,
        filtersData,
        sorting,
        data,
        selectColumnsData,
        hasError,
        selectedRows,
        expandedRowsUniqueKeys
    })

    const handleCancelButton = () => {
        setDialogOpen(false);
        setEditRecord(null);
    }

    const closeButtonCallback = (event: object) => {
        setDialogOpen(false);
        setEditRecord(null);
    }

    const handleApplyButton = async () => {
        if (!hasError) {
            if (mergedOptions.updateRecord) {
                await mergedOptions.updateRecord(editRecord);
            }
            setDialogOpen(false);
            setEditRecord(null);
        }
    }

    return (
        <DataTablesContext.Provider
            value={{
                state: {
                    data,
                    filtersData,
                    selectColumnsData,
                    sorting,
                    editRecord,
                    selectedRows,
                    expandedRowsUniqueKeys
                },
                actions: {
                    ...DataTablesContextDefaultModel.actions,
                    getFilterValue(defaultValue: any, column: DataTablesColumn): FilterModel | FilterRangeModel {
                        const filterModel = filtersData.find(f => f.filterDataSource === column.dataSource);

                        if (filterModel) {
                            return _.cloneDeep(filterModel);
                        }

                        return {filterValue: defaultValue, filterDataSource: column.dataSource};
                    },
                    collectFiltersData(filterModel) {
                        const isExists = filtersData.Any(x => x.filterDataSource === filterModel.filterDataSource);
                        let filters = new List<FilterModel | FilterRangeModel>([...filtersData]);

                        if (isExists) {
                            filters = DtUtils.changeFilterOrRemove(filters, filterModel);
                        } else {
                            filters.Add(filterModel)
                        }
                        setFiltersData(filters);
                    },
                    setSelectColumnData(data: KeyValuePair<string, List<any>>) {
                        const isExist = selectColumnsData.Any(x => x.key === data.key);
                        const current = new List([...selectColumnsData]);
                        if (isExist) {
                            current.forEach(item => {
                                if (item.key === data.key) {
                                    item.value = data.value;
                                }
                            })
                        } else {
                            current.Add(data);
                        }

                        setSelectColumnsData(current);
                    },
                    getSelectColumnData(columnDataSource: string): List<any> {
                        let result = new List<any>();

                        selectColumnsData.forEach(item => {
                            if (item.key === columnDataSource) {
                                result = item.value;
                            }
                        })

                        return result;
                    },
                    isSelectDataExist(columnDataSource: string): boolean {
                        return selectColumnsData.Any(x => x.key === columnDataSource);
                    },
                    clearFilters(): void {
                        setFiltersData(new List<FilterModel | FilterRangeModel>());
                    },
                    addOrUpdateSorting(columnDataSource: string): void {
                        const current = {...sorting};
                        if (current.columnDataSource === columnDataSource) {
                            current.direction = current!.direction === SortDirections.ASC ? SortDirections.DESC : SortDirections.ASC;
                        } else {
                            current.columnDataSource = columnDataSource;
                            current.direction = SortDirections.ASC;
                        }

                        setSorting(current);
                    },
                    editRecord(row: any): void {
                        setEditRecord(row);
                    },
                    setHasError,
                    isRowSelected(row: any): boolean {
                        if (selectedRows.length === 0) {
                            return false;
                        }

                        return selectedRows.Any(x => x === row[mergedOptions.uniqueKey]);
                    },
                    toggleRowSelection(row: any): void {
                        let selected = new List<any>([...selectedRows]);
                        const item = selected.find(x => x === row[mergedOptions.uniqueKey]);

                        if (item) {
                           selected = selected.Where(x => x !== item);
                        } else {
                            selected.Add(row[mergedOptions.uniqueKey]);
                        }

                        setSelectedRows(selected);
                    },
                    selectAllRows(): void {
                        const rows = data.map(x => {
                            return x[mergedOptions.uniqueKey];
                        })
                        setSelectedRows(new List<any>(rows));
                    },
                    unselectAllRows(): void {
                        setSelectedRows(new List<any>());
                    },
                    isTableRowExpanded(uniqueKey: any): boolean {
                        return expandedRowsUniqueKeys.Any(x => x === uniqueKey);
                    },
                    expandTableRow(uniqueKey: any): void {
                        const expandedRows = new List<any>([...expandedRowsUniqueKeys]);
                        expandedRows.Add(uniqueKey);

                        setExpandedRowsUniqueKeys(expandedRows);
                    },
                    collapseTableRow(uniqueKey: any): void {
                        const expandedRows = expandedRowsUniqueKeys.Where(x => x !== uniqueKey);
                        setExpandedRowsUniqueKeys(expandedRows);
                    }
                },
                options: mergedOptions
            }}
        >
            {children}
            <DraggableDialog
                open={dialogOpen}
                title={'Edit dialog'}
                className={`dt-edit-dialog`}
                closeButtonCallback={closeButtonCallback}
            >
                <DialogContent>
                    {/*<DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>*/}
                    <DataTablesEditForm
                        columns={mergedOptions.columns}
                        row={editRecord}
                    />
                </DialogContent>
                <DialogActions className={`dt-edit-dialog-actions`}>
                    <Button variant={"outlined"} onClick={handleCancelButton}>
                        Cancel
                    </Button>
                    <Button variant={"contained"} disabled={hasError} onClick={handleApplyButton}>Update</Button>
                </DialogActions>
            </DraggableDialog>
        </DataTablesContext.Provider>
    )
}