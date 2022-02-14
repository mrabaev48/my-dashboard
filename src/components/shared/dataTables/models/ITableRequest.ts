export class ITableRequest {

    private _filters: IFilterRequest [];
    private _sorting: ISortRequest [];
    private _paging: IPagination;

    get filters(): IFilterRequest[] {
        return this._filters;
    }

    set filters(value: IFilterRequest[]) {
        this._filters = value;
    }

    get sorting(): ISortRequest[] {
        return this._sorting;
    }

    set sorting(value: ISortRequest[]) {
        this._sorting = value;
    }

    get paging(): IPagination {
        return this._paging;
    }

    set paging(value: IPagination) {
        this._paging = value;
    }

    constructor() {
        this._filters = [];
        this._sorting = [];
        this._paging = {
            currentPageIndex: 0,
            paginationMax: 0,
            paginationMin: 0,
        }
    }
}

export interface IFilterRequest {
    columnName: string,
    value: string;
}

export interface ISortRequest {
    columnName: string;
    sortDirection: string;
}

export interface IPagination {
    currentPageIndex: number,
    paginationMax: number,
    paginationMin: number,
}