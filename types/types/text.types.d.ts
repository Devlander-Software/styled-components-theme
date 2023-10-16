import { TextProps } from "react-native";
import { ColorNameOrValueFromTheme } from "./color.types";
import { CustomTextStylesFromTheme } from "./custom-style-props.interface";
import { FontTypeEnum } from "./font-type.enum";
import { FontTypeWeightEnum } from "./font-weight.enum";
import { TextFontWeightTypesEnum } from "./font-weight.types";
import { ThemeInterface } from "./theme.types";
export declare enum TextTransformTypes {
    none = "none",
    uppercase = "uppercase",
    lowercase = "lowercase"
}
export declare enum TextDecorationLineTypes {
    none = "none",
    underline = "underline",
    lineThrough = "line-through",
    underlineLineThrough = "underline line-through"
}
export interface TextInterface extends TextProps, CustomTextStylesFromTheme {
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
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    maxFontSize?: number;
    maxWidth?: number;
    theme?: ThemeInterface;
}
export interface GhostTextInterface extends Partial<TextInterface> {
    fontType: FontTypeEnum;
    fontTypeWeight: FontTypeWeightEnum;
    ghost: boolean;
    disabled: boolean;
    textColorFromTheme: ColorNameOrValueFromTheme;
    backgroundColorFromTheme: ColorNameOrValueFromTheme;
    theme: ThemeInterface;
}
