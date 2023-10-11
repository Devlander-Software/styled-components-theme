export enum AutoCapitalizeEnum {
  none = "none",
  words = "words",
  sentences = "sentences",
  characters = "characters",
}

export enum KeyBoardTypeEnum {
  default = "default",
  numberPad = "number-pad",
  decimalPad = "decimal-pad",
  numeric = "numeric",
  emailAddress = "email-address",
  phonePad = "phone-pad",
}

export enum DataDetectorEnum {
  none = "none",
  all = "all",
  phoneNumber = "phoneNumber",
  link = "link",
  calendarEvent = "calendarEvent",
}
export enum TextContentTypeEnum {
  none = "none",
  URL = "URL",
  addressCity = "addressCity",
  addressCityAndState = "addressCityAndState",
  addressState = "addressState",
  countryName = "countryName",
  creditCardNumber = "creditCardNumber",
  emailAddress = "emailAddress",
  familyName = "familyName",
  fullStreetAddress = "fullStreetAddress",
  givenName = "givenName",
  jobTitle = "jobTitle",
  location = "location",
  middleName = "middleName",
  name = "name",
  namePrefix = "namePrefix",
  nameSuffix = "nameSuffix",
  nickname = "nickname",
  organizationName = "organizationName",
  postalCode = "postalCode",
  streetAddressLine1 = "streetAddressLine1",
  streetAddressLine2 = "streetAddressLine2",
  sublocality = "sublocality",
  telephoneNumber = "telephoneNumber",
  username = "username",
  newPassword = "newPassword",
  oneTimeCode = "oneTimeCode",
}

export enum AutoCompleteTypeEnum {
  "birthdate-day",
  "birthdate-full",
  "birthdate-month",
  "birthdate-year",
  "cc-csc",
  "cc-exp",
  "cc-exp-day",
  "cc-exp-month",
  "cc-exp-year",
  "cc-number",
  "email",
  "gender",
  "name",
  "name-family",
  "name-given",
  "name-middle",
  "name-middle-initial",
  "name-prefix",
  "name-suffix",
  "password",
  "password-new",
  "postal-address",
  "postal-address-country",
  "postal-address-extended",
  "postal-address-extended-postal-code",
  "postal-address-locality",
  "postal-address-region",
  "postal-code",
  "street-address",
  "sms-otp",
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-device",
  "username",
  "username-new",
  "off",
}

export default {
  AutoCapitalizeEnum,
  KeyBoardTypeEnum,
  DataDetectorEnum,
  TextContentTypeEnum,
  AutoCompleteTypeEnum,
};
