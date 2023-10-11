import { ViewStyle } from "react-native";
import { ContainerStyleProps } from "../container-style.props.interface";
import { IconNames } from "../icon-names.enum";
import { AutoCapitalizeEnum, DataDetectorEnum, KeyBoardTypeEnum, TextContentTypeEnum } from "../text-field.types";
export interface HtmlFormInputGroupProps extends Partial<HTMLInputElement> {
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
    errorText?: string | null | boolean | undefined;
    error?: boolean;
    label?: string;
    onChangeText: (text: string) => void;
    underlineColor?: string;
    editable?: boolean;
    autoCapitalize?: AutoCapitalizeEnum | undefined;
    backgroundColor?: string;
    submitting?: boolean;
    onSubmitEditing?: () => void;
}
export interface HtmlSecureInputProps extends HtmlFormInputGroupProps {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
}
