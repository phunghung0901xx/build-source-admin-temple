export const enum ActionType {
    BACK = 'back',
    SAVE = 'save',
}
export interface DataError {
    message: string;
    codeName: string;
    moduleName: string;
    path: string;
    method: string;
    timestamp: string;
}


export interface ResponseDataSuccess<T> {
    data?: T
    error?: DataError;
    message: string;
    status: boolean;
}

export interface ResponsePaginationSuccess<T> {
    data: {
        result: T[];
        metaData: ResponsePaginationMetaData;
    }
}


export interface ResponsePaginationMetaData {
    currentPage: number;
    firstPage: number;
    lastPage: number;
    pageSize: number;
    nextPage: number;
    totalItems: number;
    previousPage: number;
    totalPages: number;
    totalRecords: number;
}