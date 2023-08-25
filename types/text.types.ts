import { TextProps } from "react-native"
import { ThemeInterface, FontTypeWeight, colorsInterface } from "./theme.types"
import { FontTypeEnum } from "./font-type.enum"
import { CustomTextStylesFromTheme } from './custom-style-props.interface';

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
  fontSize?: number | string;
  color?: string;
  maxLineHeight?: number;
  boxShadowX?: number | string;
  boxShadowY?: number | string;
  boxShadowBlurRadius?: number | string;

  textDecoration?: textDecorationLineTypes;
  error?: boolean;
  fontFamily?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  maxFontSize?: number;
  maxWidth?: number | string;
 
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


