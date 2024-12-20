import { AutoCapitalizeType } from './auto-capatlize.enum';
import { KeyboardTypeValue } from './keyboard-type.enum';
import type { BaseTextInputProps } from './base-input-props.types';
import type { IconNames } from './icons/icon-names.enum';
export interface SecureInputProps<ContainerStyleProps = {}, OnChangeText = (text: string) => void, OnSubmitEditing = (e: any) => void, KeyboardType = KeyboardTypeValue, AutoCapitalize = AutoCapitalizeType> extends BaseTextInputProps<ContainerStyleProps, OnChangeText, OnSubmitEditing, KeyboardType, AutoCapitalize> {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
}
