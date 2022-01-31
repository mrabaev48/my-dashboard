import {DataTablesColumn} from "./IDataTablesColumn";
import {FilterModel, FilterRangeModel} from "../dataTablesComponents/dataTablesFilters/models";
import {List} from "linqscript";
import {KeyValuePair} from "../utils/DtUtils";
import {IPaginationState} from "./IDataTablesState";

export interface IDataTablesActions {
    getFilterValue: (defaultValue: any, column: DataTablesColumn) => FilterModel;
    collectFiltersData: (filterModel: FilterModel | FilterRangeModel) => void;
    setSelectColumnData: (data: KeyValuePair<string, List<any>>) => void;
    getSelectColumnData: (columnDataSource: string) => List<any>;
    isSelectDataExist: (columnDataSource: string) => boolean;
    clearFilters: () => void;
    addOrUpdateSorting: (columnDataSource: string) => void;
    editRecord: (row: any) => void
    setHasError: (value: boolean) => void;
    isRowSelected: (row: any) => boolean;
    toggleRowSelection: (row: any) => void;
    selectAllRows: () => void;
    unselectAllRows: () => void;
    isTableRowExpanded: (uniqueKey: any) => boolean;
    expandTableRow: (uniqueKey: any) => void;
    collapseTableRow: (uniqueKey: any) => void;
    collectExpandedRows: (uniqueKeys: any[]) => void;
    setTotalRecords: (value: number) => void;
    setFilteredRecords: (value: number) => void;
    setPaginationMin: (value: number) => void;
    setPaginationMax: (value: number) => void;
    setPaginationData: (value: IPaginationState) => void;
    applyFilters: () => void;
}