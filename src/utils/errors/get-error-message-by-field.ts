import { isEmpty } from "lodash";

import getErrorMessageFromErrorObject from "./get-error-from-errors-object";
import getErrorMessageFromErrorMessages from "./get-error-message-from-errors-messages";

export interface ErrorMessages {
  [key: string]: any;
  message?: string[];
}

export const getErrorMessageByField = (
  fieldsToCheck: string | string[],
  errors: ErrorMessages,
): string | undefined => {
  const getMessageForField = (field: string): string | undefined => {
    if (!isEmpty(errors) && getErrorMessageFromErrorObject(field, errors)) {
      return getErrorMessageFromErrorObject(field, errors);
    } else if (
      !isEmpty(errors) &&
      getErrorMessageFromErrorMessages(field, errors)
    ) {
      return getErrorMessageFromErrorMessages(field, errors) as any;
    }
    return undefined; // Ensure this returns undefined rather than null
  };
  if (typeof fieldsToCheck === "string") {
    return getMessageForField(fieldsToCheck);
  } else if (Array.isArray(fieldsToCheck)) {
    let messageToReturn: string | undefined = undefined;
    fieldsToCheck.forEach((f) => {
      if (getMessageForField(f)) {
        messageToReturn = getMessageForField(f);
      }
    });

    return messageToReturn;
  } else {
    return undefined;
  }
};

export default getErrorMessageByField;
