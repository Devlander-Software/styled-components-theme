import type { BaseTextInputProps } from './base-input-props.types';
import type { IconNames } from './icons/icon-names.enum';
export interface SecureInputProps<ContainerStyleProps = {}, OnChangeText = (text: string) => void, OnSubmitEditing = (e: any) => void> extends BaseTextInputProps<ContainerStyleProps, OnChangeText, OnSubmitEditing> {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
}
