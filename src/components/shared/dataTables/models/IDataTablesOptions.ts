import { DataTablesColumn } from "./IDataTablesColumn";

export interface IDataTablesOptions {
    columns: DataTablesColumn [];
    loadData: () => any[] | Promise<any[]>;
    uniqueKey: string;
    useFilters?: boolean | false;
    dtTableClassName?: string;
    dtHeaderClassName?: string;
    dtBodyClassName?: string;
    dtFooterClassName?: string;
    dateFormat?: string;
}