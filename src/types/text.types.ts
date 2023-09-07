import { TextProps } from "react-native"
import { ThemeInterface, FontTypeWeight, colorsInterface } from "./theme.types"
import { FontTypeEnum } from "./font-type.enum"
import { CustomTextStylesFromTheme } from './custom-style-props.interface'

export enum textTransformTypes {
  none = "none",
  uppercase = "uppercase",
  lowercase = "lowercase",
}





export enum textDecorationLineTypes {
  none = "none",
  underline = "underline",
  lineThrough = "line-through",
  underlineLineThrough = "underline line-through",
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
  textTransform?: textTransformTypes;
  textDecorationLine?: textDecorationLineTypes;
  flex?: number;
  width?: number;
  fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal" | "light";
  paddingTop?: number;
  paddingBottom?: number;
  textDecoration?: textDecorationLineTypes;
  error?: boolean;
  fontFamily?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  maxFontSize?: number;
  maxWidth?: number 
 
  theme?: ThemeInterface;
}


export interface GhostTextInterface extends Partial<TextInterface> {

  fontType: FontTypeEnum;
  fontTypeWeight: keyof FontTypeWeight;
  ghost: boolean;
  disabled: boolean;
  textColorFromTheme: keyof colorsInterface
  backgroundColorFromTheme: keyof colorsInterface

  theme: ThemeInterface;
}


