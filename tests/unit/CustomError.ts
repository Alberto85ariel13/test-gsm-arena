export class CustomError implements NodeJS.ErrnoException {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
    name: string;
    message: string;
}
