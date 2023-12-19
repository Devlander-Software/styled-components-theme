import { NativeTheme } from '../../../shared/types/base-theme-types';
import { sortPropertiesAlphabetically } from '../../../shared/utils/sort-properties-alphabetically';
import type { ComprehensiveStyleProps } from '../../../shared/types/style-attributes.interfaces';

export const getStyleFromPropsNative = ({
  alignItems,
  backgroundColor,
  backgroundColorFromTheme,
  borderColorFromTheme,
  borderBottomWidth,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
  borderRadius,
  borderWidth,
  elevation,
  flex,
  flexDirection,
  height,
  justifyContent,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  margin,
  maxHeight,
  maxWidth,
  theme,
  minHeight,
  opacity,
  overflow,
  padding,
  paddingLeft,
  paddingTop,
  paddingRight,
  shadowColor,
  shadowOffsetX,
  shadowOffsetY,
  shadowOpacity,
  shadowRadius,
  zIndex,
  transform,
  width
}: ComprehensiveStyleProps<NativeTheme, number>): string => {
  const unitPropsHandler = theme.unitPropsHandler;
  const colorThemeHandler = theme.colorThemeHandler;

  // Use type assertions to ensure backgroundColor is treated as a string
  const backgroundValue =
    (typeof backgroundColor === 'string' ? backgroundColor : '') ||
    (backgroundColorFromTheme && colorThemeHandler
      ? colorThemeHandler(backgroundColorFromTheme, 1, theme)
      : '');

  // Define an array of CSS properties to sort alphabetically
  const propertiesToSort: string[] = [
    zIndex ? `z-index: ${zIndex};` : '',
    alignItems ? `align-items: ${alignItems};` : '', // Ternary statement for alignItems
    backgroundValue && `background: ${backgroundValue};`,
    borderRadius ? `border-radius: ${unitPropsHandler(borderRadius)};` : '',
    borderBottomWidth
      ? `border-bottom-width: ${unitPropsHandler(borderBottomWidth)};`
      : '',
    borderTopWidth
      ? `border-top-width: ${unitPropsHandler(borderTopWidth)};`
      : '',
    borderLeftWidth
      ? `border-left-width: ${unitPropsHandler(borderLeftWidth)};`
      : '',
    borderRightWidth
      ? `border-right-width: ${unitPropsHandler(borderRightWidth)};`
      : '',
    borderColorFromTheme
      ? `border-color: ${colorThemeHandler(borderColorFromTheme, 1, theme)};`
      : '',
    borderWidth ? `border-width: ${unitPropsHandler(borderWidth)};` : '',
    elevation ? `elevation: ${elevation};` : '',
    flex ? `flex: ${flex};` : '',
    flexDirection ? `flex-direction: ${flexDirection};` : '',
    height ? `height: ${unitPropsHandler(height)};` : '',
    justifyContent ? `justify-content: ${justifyContent};` : '',
    marginLeft ? `margin-left: ${unitPropsHandler(marginLeft)};` : '',
    marginRight ? `margin-right: ${unitPropsHandler(marginRight)};` : '',
    marginTop ? `margin-top: ${unitPropsHandler(marginTop)};` : '',
    marginBottom ? `margin-bottom: ${unitPropsHandler(marginBottom)};` : '',
    margin ? `margin: ${unitPropsHandler(margin)};` : '',
    maxHeight ? `max-height: ${unitPropsHandler(maxHeight)};` : '',
    maxWidth ? `max-width: ${unitPropsHandler(maxWidth)};` : '',
    minHeight ? `min-height: ${unitPropsHandler(minHeight)};` : '',
    opacity ? `opacity: ${opacity};` : '',
    overflow ? `overflow: ${overflow};` : '',
    padding ? `padding: ${unitPropsHandler(padding)};` : '',
    paddingLeft ? `padding-left: ${unitPropsHandler(paddingLeft)};` : '',
    paddingTop ? `padding-top: ${unitPropsHandler(paddingTop)};` : '',
    paddingRight ? `padding-right: ${unitPropsHandler(paddingRight)};` : '',
    shadowColor ? `shadow-color: ${shadowColor};` : '',
    shadowOffsetX ? `shadow-offset-x: ${unitPropsHandler(shadowOffsetX)};` : '',
    shadowOffsetY ? `shadow-offset-y: ${unitPropsHandler(shadowOffsetY)};` : '',
    shadowOpacity ? `shadow-opacity: ${shadowOpacity};` : '',
    shadowRadius ? `shadow-radius: ${unitPropsHandler(shadowRadius)};` : '',
    transform ? `transform: ${transform};` : '',
    width ? `width: ${unitPropsHandler(width)};` : ''
  ];

  // Sort the properties alphabetically
  const sortedProperties = sortPropertiesAlphabetically(propertiesToSort);

  // Combine the sorted properties into the final CSS string
  const css = sortedProperties.join('\n');

  return css;
};
