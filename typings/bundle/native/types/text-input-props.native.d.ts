import type { TextInputProps } from 'react-native';
import { ViewStyle } from 'react-native';
import { BaseTextInputProps } from '../../shared/types/base-input-props.types';
import { LayoutStyleProps } from '../../shared/types/style-attributes.interfaces';
interface NativeInputProps extends BaseTextInputProps<ViewStyle, TextInputProps["onChangeText"], TextInputProps["onSubmitEditing"]> {
    onChangeText: TextInputProps["onChangeText"];
    onSubmitEditing: TextInputProps["onSubmitEditing"];
}
export interface FormInputGroupPropsForNative extends Partial<TextInputProps>, NativeInputProps {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element | null;
    onChangeText: TextInputProps["onChangeText"];
    onSubmitEditing: TextInputProps["onSubmitEditing"];
    containerStyleFromTheme?: LayoutStyleProps<number>;
}
export {};
