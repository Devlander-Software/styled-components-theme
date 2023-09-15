export interface ErrorMessages {
    [key: string]: any;
    message?: string[];
}
export declare const getErrorMessageByField: (fieldsToCheck: string | string[], errors: ErrorMessages) => string | undefined;
export default getErrorMessageByField;
