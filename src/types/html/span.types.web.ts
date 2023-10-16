import React from "react";

import { TextFontWeightTypesEnum } from "../font-weight.types";
import { TextDecorationLineTypes } from "../text.types";
import { ThemeInterfaceForHTML } from "../theme.types";

export interface HtmlSpanInterface
  extends Partial<React.HTMLProps<HTMLSpanElement>> {
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
  children?: React.ReactNode;
  theme?: ThemeInterfaceForHTML;
}
