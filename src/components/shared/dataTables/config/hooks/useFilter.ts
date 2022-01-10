import {useDataTablesContext} from "./useDataTablesContext";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {FilterModel} from "../../dataTablesComponents/dataTablesFilters/models";

export const useFilter = (defaultValue: any, column: DataTablesColumn): [(value: any) => void, FilterModel] => {
    const {actions} = useDataTablesContext();

    const filter = actions.getFilterValue(defaultValue, column);

    const setFilter = (value: any): void => {
        actions.collectFiltersData({
            filterDataSource: column.dataSource,
            filterValue: value
        });
    }

    return [setFilter, filter];
}