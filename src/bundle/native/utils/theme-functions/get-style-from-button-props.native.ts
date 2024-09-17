import {
  logSeparator,
  logEnd,
  logFunction,
  logStart,
} from '@devlander/utils';
import { ButtonStyleGenerator, NativeTheme } from '../../../shared/types/base-theme-types';
import { ButtonStyleFromProps } from '../../../shared/types/button-style-props.types';
import { sortPropertiesAlphabetically } from '../../../shared/utils/sort-properties-alphabetically';

export const getStyleFromButtonPropsForNative: ButtonStyleGenerator<NativeTheme, number> = ({
  borderBottomWidth,
  maxWidth,
  borderColorFromTheme,
  borderRadius,
  paddingBottom,
  alignItems,
  justifyContent,
  padding,
  theme,
  marginTop,
  backgroundColor,
  width,
  backgroundColorFromTheme,
  marginBottom,
  marginLeft,
  marginRight,
  paddingLeft,
  paddingRight,
  flex,
  paddingTop,
  alignSelf,
  borderColor,
  borderWidth,
  borderLeftWidth,
  borderRightWidth,
  borderTopWidth,
  opacity,
  overflow,
  shadowColor,
  shadowOffsetX,
  shadowOffsetY,
  shadowOpacity,
  shadowRadius,
  elevation,
  transform,
  debug,
}: ButtonStyleFromProps<NativeTheme, number>): string => {
  const debugModeEnabled = debug && typeof debug === 'boolean' && debug === true;

  if (debugModeEnabled) {
    logStart('getStyleFromButtonPropsForNative', 'get-style-from-button-props.native');
    logFunction('getStyleFromButtonPropsForNative', {}, '1. - Initial setup');
    logSeparator();
  }

  const css: string[] = [];
  const colorThemeHandler = theme.colorThemeHandler;

  if (debugModeEnabled) {
    logFunction('getStyleFromButtonPropsForNative', {css}, '2. - Initial CSS array');
    logSeparator();
  }

  if (backgroundColor && typeof backgroundColor === 'string') {
    css.push(`background-color: ${backgroundColor};`);
  } else if (backgroundColorFromTheme) {
    css.push(
      `background-color: ${colorThemeHandler(backgroundColorFromTheme, 1, theme)};`
    );
  }

  if (flex) css.push(`flex: ${flex};`);
  if (paddingLeft) css.push(`padding-left: ${theme.unitPropsHandler(paddingLeft)};`);
  if (width) css.push(`width: ${theme.unitPropsHandler(width)};`);
  if (paddingBottom) css.push(`padding-bottom: ${theme.unitPropsHandler(paddingBottom)};`);
  if (paddingTop) css.push(`padding-top: ${theme.unitPropsHandler(paddingTop)};`);
  if (paddingRight) css.push(`padding-right: ${theme.unitPropsHandler(paddingRight)};`);
  if (maxWidth) css.push(`max-width: ${theme.unitPropsHandler(maxWidth)};`);
  if (marginTop) css.push(`margin-top: ${theme.unitPropsHandler(marginTop)};`);
  if (marginBottom) css.push(`margin-bottom: ${theme.unitPropsHandler(marginBottom)};`);
  if (marginLeft) css.push(`margin-left: ${theme.unitPropsHandler(marginLeft)};`);
  if (marginRight) css.push(`margin-right: ${theme.unitPropsHandler(marginRight)};`);
  if (alignSelf) css.push(`align-self: ${alignSelf};`);
  if (padding) css.push(`padding: ${theme.unitPropsHandler(padding)};`);
  if (justifyContent) css.push(`justify-content: ${justifyContent};`);
  if (alignItems) css.push(`align-items: ${alignItems};`);
  if (borderRadius) css.push(`border-radius: ${theme.unitPropsHandler(borderRadius)};`);
  if (borderBottomWidth) css.push(`border-bottom-width: ${theme.unitPropsHandler(borderBottomWidth)};`);

  const borderColorValue =
    (borderColor && typeof borderColor === 'string' ? borderColor : '') ||
    (borderColorFromTheme && colorThemeHandler
      ? colorThemeHandler(borderColorFromTheme, 1, theme)
      : '');

  if (borderColor) css.push(`border-color: ${borderColorValue};`);
  if (borderWidth) css.push(`border-width: ${theme.unitPropsHandler(borderWidth)}px;`);
  if (borderLeftWidth) css.push(`border-left-width: ${theme.unitPropsHandler(borderLeftWidth)}px;`);
  if (borderRightWidth) css.push(`border-right-width: ${theme.unitPropsHandler(borderRightWidth)}px;`);
  if (borderTopWidth) css.push(`border-top-width: ${theme.unitPropsHandler(borderTopWidth)}px;`);
  if (opacity) css.push(`opacity: ${opacity};`);
  if (overflow) css.push(`overflow: ${overflow};`);
  if (shadowColor) css.push(`shadow-color: ${shadowColor};`);
  if (shadowOffsetX) css.push(`shadow-offset-x: ${theme.unitPropsHandler(shadowOffsetX)}px;`);
  if (shadowOffsetY) css.push(`shadow-offset-y: ${theme.unitPropsHandler(shadowOffsetY)}px;`);
  if (shadowOpacity) css.push(`shadow-opacity: ${shadowOpacity};`);
  if (shadowRadius) css.push(`shadow-radius: ${theme.unitPropsHandler(shadowRadius)}px;`);
  if (elevation) css.push(`elevation: ${elevation};`);
  if (transform) css.push(`transform: ${transform};`);

  if (debugModeEnabled) {
    logFunction('getStyleFromButtonPropsForNative', {css}, '3. - CSS array before sorting');
    logSeparator();
  }

  const sortedProperties = sortPropertiesAlphabetically(css);

  if (debugModeEnabled) {
    logFunction('getStyleFromButtonPropsForNative', {sortedProperties}, '4. - Sorted CSS array');
    logSeparator();
  }

  const finalCss = sortedProperties.join(' ');

  if (debugModeEnabled) {
    logFunction('getStyleFromButtonPropsForNative', finalCss, '5. - Final CSS before return');
    logSeparator();
    logEnd('getStyleFromButtonPropsForNative');
  }

  return finalCss;
};