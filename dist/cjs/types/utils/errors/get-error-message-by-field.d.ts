interface ErrorMessages {
    [key: string]: any;
    message?: string[];
}
declare const getErrorMessageByField: (fieldsToCheck: string | string[], errors: ErrorMessages) => string | undefined;
export default getErrorMessageByField;
