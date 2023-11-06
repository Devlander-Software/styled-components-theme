import type { TextProps } from 'react-native';
import { NativeTheme } from '../../shared/types/base-theme-types';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
import { FontTypeEnum } from '../../shared/types/font-type.enum';
import { FontTypeWeightEnum } from '../../shared/types/font-weight.enum';
import { TextFontWeightTypesEnum } from '../../shared/types/font-weight.types';
import { ThemeFontAttributes } from '../../shared/types/style-attributes.interfaces';
import { TextDecorationLineTypes } from '../../shared/types/text-decoration-line-types.enum';
export interface TextInterfaceNative extends TextProps, ThemeFontAttributes {
    fontSize?: number;
    color?: string;
    maxLineHeight?: number;
    marginTop?: number;
    boxShadowX?: number | string;
    boxShadowY?: number | string;
    boxShadowBlurRadius?: number | string;
    paddingLeft?: number;
    paddingRight?: number;
    maxFontSizeMultiplier?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    opacity?: number;
    lineHeight?: number;
    letterSpacing?: number;
    flex?: number;
    width?: number;
    fontWeight?: TextFontWeightTypesEnum;
    paddingTop?: number;
    paddingBottom?: number;
    textDecoration?: TextDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    maxFontSize?: number;
    maxWidth?: number;
    theme?: NativeTheme;
}
export interface GhostTextInterfaceNative extends Partial<TextInterfaceNative> {
    fontType: FontTypeEnum;
    fontTypeWeight: FontTypeWeightEnum;
    ghost: boolean;
    disabled: boolean;
    textColorFromTheme: ColorNameOrValueFromTheme;
    backgroundColorFromTheme: ColorNameOrValueFromTheme;
    theme: NativeTheme;
}
