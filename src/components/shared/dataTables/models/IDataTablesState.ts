import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {KeyValuePair} from "../utils/DtUtils";

export interface IDataTablesState {
    data: List<any>;
    filtersData: List<FilterModel | FilterRangeModel>;
    selectColumnsData: List<KeyValuePair<string, List<any>>>;
}