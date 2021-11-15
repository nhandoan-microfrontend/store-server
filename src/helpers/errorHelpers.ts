export const MAP_CODE_TO_MESSAGE = {
    401: 'Unauthorized',
}


export class ErrorModel {
    code: number;
    message: string;
    constructor(code: number, message?: string) {
        this.code = code;
        this.message = message || MAP_CODE_TO_MESSAGE[code] || '';
    }
}
