import { WebTheme } from '../../shared/types/base-theme-types';

import type React from 'react';

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
  paddingTop?: number;
  paddingBottom?: number;
  error?: boolean;
  fontFamily?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  maxFontSize?: number;
  maxWidth?: number;
  children?: React.ReactNode;
  theme?: WebTheme;
}
