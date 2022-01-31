import { DataTablesColumn } from "./IDataTablesColumn";

export interface IDataTablesOptions {
    columns: DataTablesColumn [];
    loadData: (requestOptions: any, queryString: string) => any[] | Promise<any[]>;
    uniqueKey: string;
    dtTableClassName?: string;
    dtHeaderClassName?: string;
    dtBodyClassName?: string;
    dtFooterClassName?: string;
    dateFormat?: string;
    timezone?: string;
    useEdit?: boolean;
    useDelete?: boolean;
    useSorting?: boolean;
    useFilters?: boolean;
    deleteRecord?: (row: any) => void | Promise<void>;
    updateRecord?: (row: any) => void | Promise<void>;
    useSelection?: boolean;
    useExpand?: boolean;
    hasExpandDataSource?: string | Function | null;
    expandDataSource?: null | string | Function;
    expandLazyLoading?: boolean | null;
    itemsPerPage?: number[];
    itemsPerPageDefault?: number;
    usePaging?: boolean;
    baseURL?: string;
}
