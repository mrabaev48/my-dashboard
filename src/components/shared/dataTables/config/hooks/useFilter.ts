import {useDataTablesContext} from "./useDataTablesContext";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {FilterModel} from "../../dataTablesComponents/dataTablesFilters/models";
import {DtUtils} from "../../utils/DtUtils";

export const useFilter = (defaultValue: any, column: DataTablesColumn): [(value: any) => void, FilterModel] => {
    const {actions} = useDataTablesContext();

    const filter = actions.getFilterValue(defaultValue, column);

    const setFilter = (value: any): void => {
        const filterData = {
            filterDataSource: column.dataSource,
            filterValue: value
        }

        if (!DtUtils.isFilterWithEmptyValues(filterData)) {
            actions.collectFiltersData(filterData);
        }
    }

    return [setFilter, filter];
}