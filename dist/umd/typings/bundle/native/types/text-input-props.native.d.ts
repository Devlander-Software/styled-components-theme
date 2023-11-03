/// <reference types="react" />
import type { ViewStyle } from 'react-native';
import type { BaseTextInputProps } from '../../shared/types/base-input-props.types';
import { LayoutStyleProps } from '../../shared/types/style-attributes.interfaces';
export interface FormInputGroupPropsForNative extends BaseTextInputProps {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element | null;
    containerStyleProps?: ViewStyle;
    containerStyleFromTheme?: LayoutStyleProps<number>;
}
