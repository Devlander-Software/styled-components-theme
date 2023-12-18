import { OpaqueColorValue } from 'react-native';
import { ColorNameOrValueFromTheme } from './color.types';
import { FontProperty } from './font-type.enum';
import { FontTypeWeightEnum, FontWeightType } from './font-weight.enum';
import { ThemeColorAttributes, ThemeFontAttributes } from './style-attributes.interfaces';
export interface SharedTextProperties {
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;
    onDark?: boolean;
    fontStyle?: 'normal' | 'italic';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
    fontType?: FontProperty;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
}
export interface UITextStylingAttributes<ExpectedValueType> extends ThemeFontAttributes, ThemeColorAttributes, SharedTextProperties {
    numberOfLines?: ExpectedValueType;
    paddingLeft?: ExpectedValueType;
    highlight?: boolean;
    paddingTop?: ExpectedValueType;
    marginTop?: ExpectedValueType;
    marginBottom?: ExpectedValueType;
    marginLeft?: ExpectedValueType;
    marginRight?: ExpectedValueType;
    width?: ExpectedValueType;
    lineHeight?: ExpectedValueType;
    fontSize?: ExpectedValueType;
    opacity?: ExpectedValueType;
    destructive?: boolean;
    flex?: ExpectedValueType;
    shadowOpacity?: ExpectedValueType;
    shadowColor?: string | OpaqueColorValue;
    shadowOffsetX?: ExpectedValueType;
    shadowOffsetY?: ExpectedValueType;
    shadowRadius?: ExpectedValueType;
    paddingRight?: ExpectedValueType;
    textDecorationColorFromTheme?: ColorNameOrValueFromTheme;
    colorFromTheme?: ColorNameOrValueFromTheme;
    textColorFromTheme?: ColorNameOrValueFromTheme;
    textColorNameOrValueFromTheme?: ColorNameOrValueFromTheme;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;
    onDark?: boolean;
    fontStyle?: 'normal' | 'italic';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
    fontType?: FontProperty;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
}
export interface TextStylingPropsWrapper<ExpectedValueType = number, StyleProps extends UITextStylingAttributes<ExpectedValueType> = UITextStylingAttributes<ExpectedValueType>> {
    style?: StyleProps;
}
export interface ThemedTextStylingProps<Theme, ExpectedValueType = number> extends TextStylingPropsWrapper<ExpectedValueType>, SharedTextProperties {
    theme: Theme;
    shadowColor?: string | OpaqueColorValue;
    numberOfLines?: ExpectedValueType;
    paddingLeft?: ExpectedValueType;
    highlight?: boolean;
    paddingTop?: ExpectedValueType;
    marginTop?: ExpectedValueType;
    marginBottom?: ExpectedValueType;
    marginLeft?: ExpectedValueType;
    marginRight?: ExpectedValueType;
    width?: ExpectedValueType;
    lineHeight?: ExpectedValueType;
    fontSize?: ExpectedValueType;
    opacity?: ExpectedValueType;
    destructive?: boolean;
    flex?: ExpectedValueType;
    shadowOpacity?: ExpectedValueType;
    shadowOffsetX?: ExpectedValueType;
    shadowOffsetY?: ExpectedValueType;
    shadowRadius?: ExpectedValueType;
    paddingRight?: ExpectedValueType;
    textDecorationColorFromTheme?: ColorNameOrValueFromTheme;
    colorFromTheme?: ColorNameOrValueFromTheme;
    textColorFromTheme?: ColorNameOrValueFromTheme;
    textColorNameOrValueFromTheme?: ColorNameOrValueFromTheme;
    color?: string;
    fontTypeWeight?: FontWeightType | FontTypeWeightEnum;
    focused?: boolean;
    maxFontSize?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;
    onDark?: boolean;
    fontStyle?: 'normal' | 'italic';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
    fontType?: FontProperty;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
}
export interface ResolvedThemedTextStylingProps<T, U> extends ThemedTextStylingProps<T, U>, SharedTextProperties {
    theme: T;
}
