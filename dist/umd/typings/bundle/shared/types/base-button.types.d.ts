/// <reference types="react" />
import type { ColorFromTheme, ColorNameOrValueFromTheme } from './color.types';
import { LayoutStyleProps } from './style-attributes.interfaces';
export interface BaseButtonProps<Value = number, StyleProps extends LayoutStyleProps<Value> = LayoutStyleProps<Value>> {
    onPress?: () => void;
    text?: string;
    renderLeft?: () => React.ReactElement;
    renderRight?: () => React.ReactElement;
    isSelected?: boolean;
    style?: StyleProps;
}
export interface BaseGhostButtonProps<Value = number, StyleProps = {}> extends BaseButtonProps<Value, StyleProps & LayoutStyleProps<Value>> {
    textColorNameOrValueFromTheme: ColorFromTheme;
    backgroundColorFromTheme: ColorNameOrValueFromTheme;
}
