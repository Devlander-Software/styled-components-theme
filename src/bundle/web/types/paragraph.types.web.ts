import type React from 'react';
import { WebTheme } from '../../shared/types/base-theme-types';
import { TextFontWeightTypesEnum } from '../../shared/types/font-weight.types';
import { TextDecorationLineTypes } from '../../shared/types/text-decoration-line-types.enum';


export interface HtmlParagraphInterface
  extends Partial<React.HTMLProps<HTMLParagraphElement>> {
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

  theme?: WebTheme;
}
