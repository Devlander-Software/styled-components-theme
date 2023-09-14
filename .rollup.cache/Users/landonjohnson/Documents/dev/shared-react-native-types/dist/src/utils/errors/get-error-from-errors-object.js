const getErrorMessageFromErrorObject = (field, errors) => {
    if (errors && errors[`${field}`]) {
        return errors[`${field}`];
    }
    else {
        return null;
    }
};
export default getErrorMessageFromErrorObject;
//# sourceMappingURL=get-error-from-errors-object.js.map