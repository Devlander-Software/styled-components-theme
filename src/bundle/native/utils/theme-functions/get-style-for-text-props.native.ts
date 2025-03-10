
import { Platform } from 'react-native';
import { logSeparator, logEnd, logFunction, logStart } from '@devlander/utils';
import {
  NativeTheme,
  TextStyleGenerator,
} from '../../../shared/types/base-theme-types';
import { FontTypeEnum } from '../../../shared/types/font-type.enum';
import { ResolvedThemedTextStylingProps } from '../../../shared/types/text-style.types';
import { capFontSize } from '../../../shared/utils/cap-font-size';

export const getStyleForTextPropsForNative: TextStyleGenerator<
  NativeTheme,
  number
> = (props: ResolvedThemedTextStylingProps<NativeTheme, number>): string => {
  const {
    theme,
    fontSize,
    maxFontSize,
    textColorFromTheme,
    fontType,
    fontTypeWeight,
    debug,
    fontWeight,
    color,
    ...restProps
  } = props;

  const debugModeEnabled =
    debug && typeof debug === 'boolean' && debug === true;

  if (debugModeEnabled) {
    logStart(
      'getStyleForTextPropsForNative',
      'get-style-for-text-props.native'
    );
    logFunction(
      'getStyleForTextPropsForNative',
      { props },
      '1. - Initial props'
    );
    logSeparator();
  }

  const unitPropsHandler = theme?.unitPropsHandler ?? null;
  const colorThemeHandler = theme?.colorThemeHandler ?? null;
  const fontSizePropsHandler = theme?.fontSizePropsHandler ?? null;
  const handleFontFromTheme = theme?.fontThemeHandler ?? null;
  const capFontSizeFunc = theme?.fontSizeCap ?? capFontSize;

  const getColor = () => {
    if (restProps.onDark) {
      return theme.colors.whiteAlpha100;
    }
    if (restProps.highlight) {
      return theme.colors.accent;
    }
    if (textColorFromTheme && typeof colorThemeHandler === 'function') {
      return theme.colorThemeHandler(textColorFromTheme, 1, theme);
    }
    if (restProps.destructive) {
      return theme.colors.error;
    }
    return theme.colors.blackAlpha100;
  };

  const cssPropertiesForNative = [
    fontSize && typeof maxFontSize === 'undefined'
      ? `font-size: ${fontSizePropsHandler(fontSize)};`
      : fontSize && maxFontSize
      ? `font-size: ${fontSizePropsHandler(
          capFontSizeFunc(fontSize, maxFontSize)
        )};`
      : '',
  ];

  const cssPropertiesForWeb = [
    fontSize && typeof maxFontSize === 'undefined'
      ? `font-size: ${fontSizePropsHandler(fontSize)};`
      : fontSize && maxFontSize
      ? `font-size: ${fontSizePropsHandler(
          capFontSizeFunc(fontSize, maxFontSize)
        )};`
      : '',
  ];

  const fontFamilyProperties =
    fontType && fontTypeWeight && handleFontFromTheme
      ? `font-family: ${handleFontFromTheme(fontType, fontTypeWeight, theme)};`
      : handleFontFromTheme
      ? `font-family: ${handleFontFromTheme(
          FontTypeEnum.Font1,
          'bold',
          theme
        )};`
      : '';

  const handleShadowType = restProps.shadowColor
    ? `text-shadow-color: ${String(restProps.shadowColor)};`
    : '';

  const handleColor = color
    ? `color: ${color};`
    : textColorFromTheme && colorThemeHandler
    ? `color: ${colorThemeHandler(textColorFromTheme, 1, theme)};`
    : `color: ${getColor()};`;

  const cssProperties = [
    handleShadowType,
    fontFamilyProperties,
    handleColor,
    restProps.textDecorationLine && restProps.textDecorationLine !== 'none'
      ? `text-decoration-line: ${restProps.textDecorationLine};`
      : '',
    restProps.flex ? `flex: ${restProps.flex};` : '',
    fontWeight ? `font-weight: ${fontWeight};` : '',
    restProps.paddingLeft
      ? `padding-left: ${unitPropsHandler(restProps.paddingLeft)};`
      : '',
    restProps.paddingTop
      ? `padding-top: ${unitPropsHandler(restProps.paddingTop)};`
      : '',
    restProps.fontStyle ? `font-style: ${restProps.fontStyle};` : '',
    restProps.paddingRight
      ? `padding-right: ${unitPropsHandler(restProps.paddingRight)};`
      : '',
    restProps.lineHeight
      ? `line-height: ${unitPropsHandler(restProps.lineHeight)};`
      : fontSize
      ? `line-height: ${unitPropsHandler(fontSize + 6)};`
      : '',
    restProps.width ? `width: ${unitPropsHandler(restProps.width)};` : '',
    restProps.textAlign ? `text-align: ${restProps.textAlign};` : '',
    restProps.marginTop
      ? `margin-top: ${unitPropsHandler(restProps.marginTop)};`
      : '',
    restProps.marginBottom
      ? `margin-bottom: ${unitPropsHandler(restProps.marginBottom)};`
      : '',
    restProps.opacity ? `opacity: ${restProps.opacity};` : '',
    restProps.marginLeft
      ? `margin-left: ${unitPropsHandler(restProps.marginLeft)};`
      : '',
    restProps.marginRight
      ? `margin-right: ${unitPropsHandler(restProps.marginRight)};`
      : '',
    restProps.shadowOpacity
      ? `text-shadow-opacity: ${restProps.shadowOpacity};`
      : '',
    restProps.shadowOffsetX || restProps.shadowOffsetY
      ? `text-shadow-offset: ${unitPropsHandler(
          restProps.shadowOffsetX || 0
        )} ${unitPropsHandler(restProps.shadowOffsetY || 0)};`
      : '',
    restProps.shadowRadius
      ? `text-shadow-radius: ${unitPropsHandler(restProps.shadowRadius)};`
      : '',
    restProps.textTransform
      ? `text-transform: ${restProps.textTransform};`
      : '',
  ];

  if (Platform && Platform.OS === 'web') {
    cssProperties.push(...cssPropertiesForWeb);
  } else {
    cssProperties.push(...cssPropertiesForNative);
  }

  const css = cssProperties.filter(Boolean).join('\n');

  if (debugModeEnabled) {
    logFunction(
      'getStyleForTextPropsForNative',
      { cssProperties },
      '2. - CSS properties'
    );
    logSeparator();
    logFunction(
      'getStyleForTextPropsForNative',
      css,
      '3. - Final CSS before return'
    );
    logSeparator();
    logEnd('getStyleForTextPropsForNative');
  }

  return css;
};
