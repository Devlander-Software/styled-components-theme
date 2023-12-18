import { NativeTheme } from '../../../shared/types/base-theme-types';
import { ComprehensiveStyleProps } from '../../../shared/types/style-attributes.interfaces';

export const getStyleFromPropsNative = ({
  maxWidth,
  maxHeight,
  height,
  theme,
  marginTop,
  width,
  backgroundColorFromTheme,
  marginBottom,
  minHeight,
  opacity,
  marginLeft,
  marginRight,
  backgroundColor,
  paddingLeft,
  borderColorFromTheme,
  paddingRight,
  margin,
  borderWidth,
  flex,
  paddingTop
}: ComprehensiveStyleProps<NativeTheme, number>): string => {
  const unitPropsHandler = theme.unitPropsHandler;
  const colorThemeHandler = theme.colorThemeHandler;
  const handleBackground =
    backgroundColor && typeof backgroundColor !== 'undefined'
      ? `background: ${backgroundColor};`
      : backgroundColorFromTheme && colorThemeHandler
      ? `background: ${colorThemeHandler(backgroundColorFromTheme, 1, theme)};`
      : '';

  const css = `
  ${handleBackground}
  ${flex ? `flex: ${flex};` : ''}
  ${paddingLeft ? `padding-left: ${unitPropsHandler(paddingLeft)};` : ''}
  ${paddingTop ? `padding-top: ${unitPropsHandler(paddingTop)};` : ''}
  ${paddingRight ? `padding-right: ${unitPropsHandler(paddingRight)};` : ''}
  ${width ? `width: ${unitPropsHandler(width)};` : ''}
  ${marginTop ? `margin-top: ${unitPropsHandler(marginTop)};` : ''}
  ${marginBottom ? `margin-bottom: ${unitPropsHandler(marginBottom)};` : ''}
  ${opacity ? `opacity: ${opacity};` : ''}
  ${marginLeft ? `margin-left: ${unitPropsHandler(marginLeft)};` : ''}
  ${marginRight ? `margin-right: ${unitPropsHandler(marginRight)};` : ''}
  ${height ? `height: ${unitPropsHandler(height)};` : ''}
  ${maxWidth ? `max-width: ${unitPropsHandler(maxWidth)};` : ''}
  ${maxHeight ? `max-height: ${unitPropsHandler(maxHeight)};` : ''}
  ${minHeight ? `min-height: ${unitPropsHandler(minHeight)};` : ''}
  ${
    borderColorFromTheme
      ? `border-color: ${colorThemeHandler(borderColorFromTheme, 1, theme)};`
      : ''
  }
  ${borderWidth ? `border-width: ${unitPropsHandler(borderWidth)};` : ''}
  ${margin ? `margin: ${unitPropsHandler(margin)};` : ''}
`;

  return css;
};
