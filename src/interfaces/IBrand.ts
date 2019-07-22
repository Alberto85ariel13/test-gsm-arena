export interface IBrand {
    id: string;
    name: string;
    devices: number;
    url: string;
}

export interface ICreateBrand {
    id?: string;
    name: string;
    devices?: number;
    url: string;
}

export interface IUpdateBrand {
    id: string;
    name?: string;
    devices?: string;
    url: string;
}

export interface IDeleteBrand {
    id: string;
}
