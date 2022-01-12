import {FC, useEffect, useState} from "react";
import {DataTablesContext} from "./DataTablesContext";
import {DataTablesContextDefaultModel} from "../models/DataTablesContextDefaultModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {List} from "linqscript";
import {FilterModel, FilterRangeModel,} from "../dataTablesComponents/dataTablesFilters/models";
import {DataTablesColumn, IDataTablesActionColumn} from "../models/IDataTablesColumn";

import _ from 'lodash';
import {DtUtils, KeyValuePair, SortDirections, SortingModel} from "../utils/DtUtils";


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
    // const [sorting, setSorting] = useState<List<SortingModel>>(new List<SortingModel>());
    const [sorting, setSorting] = useState<SortingModel>(DataTablesContextDefaultModel.state.sorting);



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

    console.log('OPTIONS & STATE DATA: ', {options: mergedOptions, filtersData, sorting, data, selectColumnsData})

    return (
        <DataTablesContext.Provider
            value={{
                state: {
                    data,
                    filtersData,
                    selectColumnsData,
                    sorting
                },
                actions: {
                    ...DataTablesContextDefaultModel.actions,
                    getFilterValue(defaultValue: any, column: DataTablesColumn): FilterModel | FilterRangeModel {
                        const filterModel = filtersData.find(f => f.filterDataSource === column.dataSource);

                        if (filterModel) {
                            return _.cloneDeep(filterModel);
                        }

                        return { filterValue: defaultValue, filterDataSource: column.dataSource };
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
                },
                options: mergedOptions
            }}
        >
            {children}
        </DataTablesContext.Provider>
    )
}