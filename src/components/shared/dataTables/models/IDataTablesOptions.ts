import { DataTablesColumn } from "./IDataTablesColumn";
import {List} from "linqscript";

export interface IDataTablesOptions {
    columns: DataTablesColumn [];
    loadData: () => any[] | Promise<any[]>;
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
}
