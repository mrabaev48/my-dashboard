export interface IRequestOptions {
    headers: IHeaders;
    urlData: IUrlData;
}

export interface IUrlData {
    sortCSV: string;
    filters: {
        [key:string]: any;
    }
    pagination: {
        paginationMin: number;
        paginationMax: number;
    }
}

export interface  IHeaders {
    token?: string;
}