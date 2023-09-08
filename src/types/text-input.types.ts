
import { TextInputProps, ViewStyle } from 'react-native'
import { AutoCapitalizeEnum, AutoCompleteTypeEnum, DataDetectorEnum, KeyBoardTypeEnum, TextContentTypeEnum } from './text-field.types'
import { ContainerStyleProps } from './container-style.props.interface'
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


export const FormInputGroupDefaultProps: FormInputGroupProps = {
    label: 'Label',
    underlineColor: '#000',
    backgroundColor: 'transparent',
    opacity: 1,
    autoComplete: AutoCompleteTypeEnum.off as any,
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
    onSubmitEditing: () =>
        console.log('this is onSubmitEditing prop in text field'),
}

export interface SecureInputProps extends FormInputGroupProps {
    secureTextOnIcon?: IoniconNames | string;
    secureTextOffIcon?: IoniconNames | string;
    securePressOnChange: () => void
}



export const SecureInputDefaultProps = {
    securePressOnChange: () => console.log("this is secure"),
	secureTextOffIcon: "eye-off-outline",
	secureTextOnIcon: "eye-outline",
	...FormInputGroupDefaultProps
}
