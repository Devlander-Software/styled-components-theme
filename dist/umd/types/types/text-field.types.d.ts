export declare enum AutoCapitalizeEnum {
    none = "none",
    words = "words",
    sentences = "sentences",
    characters = "characters"
}
export declare enum KeyBoardTypeEnum {
    default = "default",
    numberPad = "number-pad",
    decimalPad = "decimal-pad",
    numeric = "numeric",
    emailAddress = "email-address",
    phonePad = "phone-pad"
}
export declare enum DataDetectorEnum {
    none = "none",
    all = "all",
    phoneNumber = "phoneNumber",
    link = "link",
    calendarEvent = "calendarEvent"
}
export declare enum TextContentTypeEnum {
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
    oneTimeCode = "oneTimeCode"
}
export declare enum AutoCompleteTypeEnum {
    "birthdate-day" = 0,
    "birthdate-full" = 1,
    "birthdate-month" = 2,
    "birthdate-year" = 3,
    "cc-csc" = 4,
    "cc-exp" = 5,
    "cc-exp-day" = 6,
    "cc-exp-month" = 7,
    "cc-exp-year" = 8,
    "cc-number" = 9,
    "email" = 10,
    "gender" = 11,
    "name" = 12,
    "name-family" = 13,
    "name-given" = 14,
    "name-middle" = 15,
    "name-middle-initial" = 16,
    "name-prefix" = 17,
    "name-suffix" = 18,
    "password" = 19,
    "password-new" = 20,
    "postal-address" = 21,
    "postal-address-country" = 22,
    "postal-address-extended" = 23,
    "postal-address-extended-postal-code" = 24,
    "postal-address-locality" = 25,
    "postal-address-region" = 26,
    "postal-code" = 27,
    "street-address" = 28,
    "sms-otp" = 29,
    "tel" = 30,
    "tel-country-code" = 31,
    "tel-national" = 32,
    "tel-device" = 33,
    "username" = 34,
    "username-new" = 35,
    "off" = 36
}
declare const _default: {
    AutoCapitalizeEnum: typeof AutoCapitalizeEnum;
    KeyBoardTypeEnum: typeof KeyBoardTypeEnum;
    DataDetectorEnum: typeof DataDetectorEnum;
    TextContentTypeEnum: typeof TextContentTypeEnum;
    AutoCompleteTypeEnum: typeof AutoCompleteTypeEnum;
};
export default _default;
