export interface IDevice {
    id: string;
    name: string;
    model: string;
    brand: string;
}

export interface ICreateDevice {
    id?: string;
    name: string;
    model: string;
    brand: string;
}

export interface IUpdateDevice {
    id: string;
    name?: string;
    model?: string;
    brand?: string;
}

export interface IDeleteDevice {
    id: string;
}
