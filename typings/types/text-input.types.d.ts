/// <reference types="react" />
import { TextInputProps, ViewStyle } from 'react-native';
import { AutoCapitalizeEnum, DataDetectorEnum, KeyBoardTypeEnum, TextContentTypeEnum } from './text-field.types';
import { ContainerStyleProps } from './container-style.props.interface';
import { IoniconNames } from './icon-names.enum';
export interface FormInputGroupProps extends TextInputProps {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element;
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
    secureTextOnIcon?: IoniconNames | string;
    secureTextOffIcon?: IoniconNames | string;
    securePressOnChange: () => void;
}
//# sourceMappingURL=text-input.types.d.ts.map