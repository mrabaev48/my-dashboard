import {FC, useEffect, useState} from "react";
import {DataTablesContext} from "./DataTablesContext";
import {DataTablesContextDefaultModel} from "../models/DataTablesContextDefaultModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {List} from "linqscript";
import {
    FilterModel, FilterRangeModel,
} from "../dataTablesComponents/dataTablesFilters/models";
import {DataTablesColumn} from "../models/IDataTablesColumn";

import _ from 'lodash';
import {DtUtils, KeyValuePair} from "../utils/DtUtils";

export interface IDataTablesProviderProps {
    options: IDataTablesOptions;
}

// let filtersData = new List<FilterModel>();

export const DataTablesProvider: FC<IDataTablesProviderProps> = ({
                                                                     options,
                                                                     children
                                                                 }) => {
    const [data, setData] = useState<List<any>>(new List<any>());
    const [filtersData, setFiltersData] = useState<List<FilterModel | FilterRangeModel>>(new List<FilterModel | FilterRangeModel>());
    const [selectColumnsData, setSelectColumnsData] = useState<List<KeyValuePair<string, List<any>>>>(new List<KeyValuePair<string, List<any>>>());

    useEffect(() => {
        const loadTableData = async () => {
            setData(await options.loadData());
        }
        loadTableData();
    }, [])

    const opt = {
        ...DataTablesContextDefaultModel.options,
        ...options
    }
    console.log('OPTIONS & STATE DATA: ', {options: opt, filtersData, data, selectColumnsData})

    return (
        <DataTablesContext.Provider
            value={{
                state: {
                    data,
                    filtersData,
                    selectColumnsData
                },
                actions: {
                    ...DataTablesContextDefaultModel.actions,
                    getFilterValue(defaultValue: any, column: DataTablesColumn): FilterModel | FilterRangeModel {
                        const filterModel = filtersData.find(f => f.filterDataSource === column.type);

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
                        // console.log('filters: ', filtersData)
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
                    }
                },
                options: {
                    ...DataTablesContextDefaultModel.options,
                    ...options
                }
            }}
        >
            {children}
        </DataTablesContext.Provider>
    )
}