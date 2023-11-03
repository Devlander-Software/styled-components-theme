import type { LayoutStyleGenerator, WebTheme } from '../../../shared/types/base-theme-types';
import { ComprehensiveStyleProps } from '../../../shared/types/style-attributes.interfaces';


export const getStyleFromPropsForWeb: LayoutStyleGenerator<WebTheme, string | number> = ({
  theme,
  backgroundColorFromTheme,
  flex,
  paddingLeft,
  paddingTop,
  paddingRight,
  width,
  marginTop,
  marginBottom,
  opacity,
  marginLeft,
  marginRight,
  height,
  maxWidth,
  maxHeight,
}: ComprehensiveStyleProps<WebTheme, string | number>): string => {
  // Precompute the values
  const computedBackgroundColor = backgroundColorFromTheme
    ? theme.colorThemeHandler(backgroundColorFromTheme, 1, theme)
    : undefined;
  const computedPaddingLeft =
    paddingLeft && theme.unitPropsHandler(paddingLeft);
  const computedPaddingTop = paddingTop && theme.unitPropsHandler(paddingTop);
  const computedPaddingRight =
    paddingRight && theme.unitPropsHandler(paddingRight);
  const computedWidth = width && theme.unitPropsHandler(width);
  const computedMarginTop = marginTop && theme.unitPropsHandler(marginTop);
  const computedMarginBottom =
    marginBottom && theme.unitPropsHandler(marginBottom);
  const computedMarginLeft = marginLeft && theme.unitPropsHandler(marginLeft);
  const computedMarginRight =
    marginRight && theme.unitPropsHandler(marginRight);
  const computedHeight = height && theme.unitPropsHandler(height);
  const computedMaxWidth = maxWidth && theme.unitPropsHandler(maxWidth);
  const computedMaxHeight = maxHeight && theme.unitPropsHandler(maxHeight);

  return `
    ${computedBackgroundColor ? `background: ${computedBackgroundColor};` : ''}
    ${flex ? `flex: ${flex};` : ''}
    ${computedPaddingLeft ? `padding-left: ${computedPaddingLeft};` : ''}
    ${computedPaddingTop ? `padding-top: ${computedPaddingTop};` : ''}
    ${computedPaddingRight ? `padding-right: ${computedPaddingRight};` : ''}
    ${computedWidth ? `width: ${computedWidth};` : ''}
    ${computedMarginTop ? `margin-top: ${computedMarginTop};` : ''}
    ${computedMarginBottom ? `margin-bottom: ${computedMarginBottom};` : ''}
    ${opacity ? `opacity: ${opacity};` : ''}
    ${computedMarginLeft ? `margin-left: ${computedMarginLeft};` : ''}
    ${computedMarginRight ? `margin-right: ${computedMarginRight};` : ''}
    ${computedHeight ? `height: ${computedHeight};` : ''}
    ${computedMaxWidth ? `max-width: ${computedMaxWidth};` : ''}
    ${computedMaxHeight ? `max-height: ${computedMaxHeight};` : ''}
  `;
};
