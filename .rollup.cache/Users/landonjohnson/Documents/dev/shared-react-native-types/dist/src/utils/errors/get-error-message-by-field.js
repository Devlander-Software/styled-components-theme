import getErrorMessageFromErrorObject from './get-error-from-errors-object';
import { isEmpty } from 'lodash';
import getErrorMessageFromErrorMessages from './get-error-message-from-errors-messages';
const getErrorMessageByField = (fieldsToCheck, errors) => {
    const getMessageForField = (field) => {
        if (!isEmpty(errors) && getErrorMessageFromErrorObject(field, errors)) {
            return getErrorMessageFromErrorObject(field, errors);
        }
        else if (!isEmpty(errors) && getErrorMessageFromErrorMessages(field, errors)) {
            return getErrorMessageFromErrorMessages(field, errors);
        }
        return undefined; // Ensure this returns undefined rather than null
    };
    if (typeof fieldsToCheck === "string") {
        return getMessageForField(fieldsToCheck);
    }
    else if (Array.isArray(fieldsToCheck)) {
        let messageToReturn = undefined;
        fieldsToCheck.forEach((f) => {
            if (getMessageForField(f)) {
                messageToReturn = getMessageForField(f);
            }
        });
        return messageToReturn;
    }
    else {
        return undefined;
    }
};
export default getErrorMessageByField;
//# sourceMappingURL=get-error-message-by-field.js.map