import React from 'react';
import { ViewStyle } from 'react-native';
import { BaseTextInputProps } from '../../shared/types/base-input-props.types';
import { LayoutStyleProps } from '../../shared/types/style-attributes.interfaces';
import type { TextInputProps } from 'react-native';
interface NativeInputProps extends BaseTextInputProps<ViewStyle, TextInputProps['onChangeText'], TextInputProps['onSubmitEditing'], TextInputProps['keyboardType'], TextInputProps['autoCapitalize']> {
    onChangeText: TextInputProps['onChangeText'];
    onSubmitEditing: TextInputProps['onSubmitEditing'];
    autoCapitalize?: TextInputProps['autoCapitalize'];
    keyboardType?: TextInputProps['keyboardType'];
}
export interface FormInputGroupPropsForNative extends Partial<TextInputProps>, NativeInputProps {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => React.JSX.Element | null;
    onChangeText: TextInputProps['onChangeText'];
    onSubmitEditing: TextInputProps['onSubmitEditing'];
    keyboardType?: TextInputProps['keyboardType'];
    autoCapitalize?: TextInputProps['autoCapitalize'];
    containerStyleFromTheme?: LayoutStyleProps<number>;
}
export {};
