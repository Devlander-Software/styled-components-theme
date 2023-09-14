import { isEmpty } from "lodash";
const getErrorMessageFromErrorMessages = (field, errors) => {
    if (!isEmpty(errors) && errors.hasOwnProperty('message')) {
        let { message } = errors;
        if (message && Array.isArray(message)) {
            let messages = message || [];
            let messageToBeFound = messages.find((msg) => msg.includes(field));
            if (messageToBeFound) {
                return messageToBeFound;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
};
export default getErrorMessageFromErrorMessages;
//# sourceMappingURL=get-error-message-from-errors-messages.js.map