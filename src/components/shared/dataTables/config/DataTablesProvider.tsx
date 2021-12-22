import {FC, useEffect, useState} from "react";
import {DataTablesContext} from "./DataTablesContext";
import {DataTablesContextDefaultModel} from "../models/DataTablesContextDefaultModel";
import {IDataTablesOptions} from "../models/IDataTablesOptions";
import {List} from "linqscript";
import {
    FilterModel,
} from "../dataTablesComponents/dataTablesFilters/models";
import {DataTablesColumn} from "../models/IDataTablesColumn";

import _ from 'lodash';

export interface IDataTablesProviderProps {
    options: IDataTablesOptions;
}

export const DataTablesProvider: FC<IDataTablesProviderProps> = ({
                                                                     options,
                                                                     children
                                                                 }) => {
    const [data, setData] = useState<any[]>([]);
    const [filtersData, setFiltersData] = useState<List<FilterModel>>(new List<FilterModel>())

    useEffect(() => {
        const loadTableData = async () => {
            setData(await options.loadData());
        }
        loadTableData();
    }, [])

    const tmp = {
        ...DataTablesContextDefaultModel.options,
        ...options
    }
    console.log('OPTIONS: ', tmp)

    return (
        <DataTablesContext.Provider
            value={{
                state: {
                    data,
                    filtersData,
                },
                actions: {
                    ...DataTablesContextDefaultModel.actions,
                    getFilterValue(defaultValue: any, column: DataTablesColumn): any {
                        const filterModel = filtersData.find(f => f.filterDataSource === column.type);
                        if (filterModel) {
                            return _.cloneDeep(filterModel.filterValue);
                        }

                        return defaultValue;
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