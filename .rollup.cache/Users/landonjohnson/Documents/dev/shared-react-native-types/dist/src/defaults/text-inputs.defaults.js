import { AutoCapitalizeEnum, AutoCompleteTypeEnum, KeyBoardTypeEnum, TextContentTypeEnum } from '../types/text-field.types';
export const FormInputGroupDefaultProps = {
    label: 'Label',
    underlineColor: '#000',
    backgroundColor: 'transparent',
    opacity: 1,
    autoComplete: AutoCompleteTypeEnum.off,
    dense: false,
    editable: true,
    textContentType: TextContentTypeEnum.none,
    autoCapitalize: AutoCapitalizeEnum.none,
    onChangeText: () => console.log('this is onChangeText prop in text field'),
    disabled: false,
    error: false,
    errorText: null,
    secureTextEntry: false,
    keyboardType: KeyBoardTypeEnum.default,
    onSubmitEditing: () => console.log('this is onSubmitEditing prop in text field'),
};
export const SecureInputDefaultProps = {
    securePressOnChange: () => console.log("this is secure"),
    secureTextOffIcon: "eye-off-outline",
    secureTextOnIcon: "eye-outline",
    ...FormInputGroupDefaultProps
};
//# sourceMappingURL=text-inputs.defaults.js.map