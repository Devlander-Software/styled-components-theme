/* eslint-disable no-undef */
import { TextInputProps, ViewStyle } from "react-native";

import { ContainerStyleProps } from "./container-style.props.interface";
import { IconNames } from "./icons/icon-names.enum";
import {
  AutoCapitalizeEnum,
  DataDetectorEnum,
  KeyBoardTypeEnum,
  TextContentTypeEnum,
} from "./text-field.types";

export interface FormInputGroupProps extends TextInputProps {
  opacity?: number;
  dense?: boolean;
  renderRight?: () => JSX.Element | null;
  containerStyleProps?: ViewStyle;
  containerStyleFromTheme?: ContainerStyleProps;

  renderBottom?: () => JSX.Element | null;
  dataDetectorTypes?: DataDetectorEnum;
  textContentType?: TextContentTypeEnum;
  keyboardType?: KeyBoardTypeEnum;
  secureTextEntry?: boolean;
  disabled?: boolean;
  errorText?: string | null | boolean | undefined;
  error?: boolean;
  label?: string;
  defaultValue?: string;
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  underlineColor?: string;
  editable?: boolean;
  autoCapitalize?: AutoCapitalizeEnum | undefined;
  backgroundColor?: string;
  submitting?: boolean;
  onSubmitEditing?: () => void;
}

export interface SecureInputProps extends FormInputGroupProps {
  secureTextOnIcon?: IconNames;
  secureTextOffIcon?: IconNames;
  securePressOnChange: () => void;
}
