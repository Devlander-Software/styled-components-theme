import { IconNames } from "../types/icon-names.enum";
import {
  AutoCapitalizeEnum,
  AutoCompleteTypeEnum,
  KeyBoardTypeEnum,
  TextContentTypeEnum,
} from "../types/text-field.types";
import {
  FormInputGroupProps,
  SecureInputProps,
} from "../types/text-input.types";

export const FormInputGroupDefaultProps: FormInputGroupProps = {
  label: "Label",
  underlineColor: "#000",
  backgroundColor: "transparent",
  opacity: 1,
  autoComplete: AutoCompleteTypeEnum.off as any,
  dense: false,
  editable: true,
  textContentType: TextContentTypeEnum.none,
  autoCapitalize: AutoCapitalizeEnum.none,
  onChangeText: () => console.log("this is onChangeText prop in text field"),
  disabled: false,
  error: false,
  errorText: null,
  secureTextEntry: false,
  keyboardType: KeyBoardTypeEnum.default,
  onSubmitEditing: () =>
    console.log("this is onSubmitEditing prop in text field"),
};

export const SecureInputDefaultProps: SecureInputProps = {
  securePressOnChange: () => console.log("this is secure"),
  secureTextOffIcon: "eye-off-outline" as IconNames,
  secureTextOnIcon: "eye-outline" as IconNames,
  ...FormInputGroupDefaultProps,
};
