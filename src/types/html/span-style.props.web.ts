/* eslint-disable import/order */
import { CustomTextStylesFromTheme } from "../custom-style-props.interface";
import { FontTypeEnum } from "../font-type.enum";
import { FontWeightType } from "../font-weight.enum";
import { TextFontWeightTypesEnum } from "../font-weight.types";
import { TextDecorationLineTypes } from "../text.types";
import { ThemeInterfaceForHTML } from "../theme.types";
import { HtmlSpanInterface } from "./span.types.web";

export interface HtmlSpanStyleProps
  extends Partial<HtmlSpanInterface>,
    CustomTextStylesFromTheme {
  fontType?: FontTypeEnum;
  fontTypeWeight?: FontWeightType;
  maxFontSizeMultiplier?: number;
  onDark?: boolean;
  fontStyle?: "normal" | "italic";
  numberOfLines?: number;
  paddingLeft?: number;
  highlight?: boolean;
  paddingTop?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  width?: number;
  lineHeight?: number;
  fontSize?: number;
  opacity?: number;
  destructive?: boolean;
  flex?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  fontWeight?: TextFontWeightTypesEnum;
  shadowOffsetY?: number;
  shadowRadius?: number;
  maxFontSize?: number;
  paddingRight?: number;
  textAlign?: "left" | "center" | "right";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined;
  textDecorationLine?: TextDecorationLineTypes;
}

export interface HtmlSpanStylePropsWithTheme extends HtmlSpanStyleProps {
  theme: ThemeInterfaceForHTML;
}
