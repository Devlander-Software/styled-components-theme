import { TextProps } from "react-native";
import { ThemeInterface, FontTypeWeight, ColorsInterface } from "./theme.types";
import { FontTypeEnum } from "./font-type.enum";
import { CustomTextStylesFromTheme } from './custom-style-props.interface';
import { TextFontWeightTypesEnum } from "./font-weight.types";
export declare enum textTransformTypes {
    none = "none",
    uppercase = "uppercase",
    lowercase = "lowercase"
}
export declare enum textDecorationLineTypes {
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
    textDecoration?: textDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    maxFontSize?: number;
    maxWidth?: number;
    theme?: ThemeInterface;
}
export interface GhostTextInterface extends Partial<TextInterface> {
    fontType: FontTypeEnum;
    fontTypeWeight: keyof FontTypeWeight;
    ghost: boolean;
    disabled: boolean;
    textColorFromTheme: keyof ColorsInterface;
    backgroundColorFromTheme: keyof ColorsInterface;
    theme: ThemeInterface;
}
