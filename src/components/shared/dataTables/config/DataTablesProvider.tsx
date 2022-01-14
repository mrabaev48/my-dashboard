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


    useEffect(() => {
        const loadTableData = async () => {
            setData(await mergedOptions.loadData());
        }

        if (DtUtils.isActionCellNeeded(mergedOptions)) {
            mergedOptions.columns.push(DtUtils.getActionColumnObject());
        }

        const sortColumn = mergedOptions.columns.find(x => x.sortDirection !== undefined && x.sortDirection !== false);
        if (sortColumn) {
            const sortModel = {...sorting};
            sortModel.columnDataSource = sortColumn.dataSource;
            sortModel.direction = sortColumn.sortDirection!;
            setSorting(sortModel);
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
        selectColumnsData
    })

    const handleCancelButton = () => {
        alert('handleCancelButton')
        setDialogOpen(false);
        setEditRecord(null);
    }

    const closeButtonCallback = (event: object) => {
        alert('onCloseCallback')
    }

    const handleApplyButton = () => {
        alert("You are click apply!")
    }

    return (
        <DataTablesContext.Provider
            value={{
                state: {
                    data,
                    filtersData,
                    selectColumnsData,
                    sorting,
                    editRecord
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
                        console.log('im working')
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
                    }
                },
                options: mergedOptions
            }}
        >
            {children}
            <DraggableDialog
                open={dialogOpen}
                title={'Edit dialog'}
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
                <DialogActions>
                    <Button variant={"outlined"} onClick={handleCancelButton}>
                        Cancel
                    </Button>
                    <Button variant={"contained"} onClick={handleApplyButton}>Subscribe</Button>
                </DialogActions>
            </DraggableDialog>
        </DataTablesContext.Provider>
    )
}