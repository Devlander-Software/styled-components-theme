
import { Platform } from 'react-native';
import { NativeTheme, TextStyleGenerator } from '../../../shared/types/base-theme-types';
import { FontTypeEnum } from '../../../shared/types/font-type.enum';
import { ResolvedThemedTextStylingProps } from '../../../shared/types/text-style.types';
import { capFontSize } from '../../../shared/utils/cap-font-size';



export const getStyleForTextPropsForNative: TextStyleGenerator<NativeTheme, number> = (
  props: ResolvedThemedTextStylingProps<NativeTheme, number>
): string => {
  const {
    theme,
    fontSize,
    maxFontSize,
    textColorFromTheme,
    fontType,
    fontTypeWeight,
    fontWeight,
    ...restProps
  } = props;

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
    if (
      textColorFromTheme &&
      typeof colorThemeHandler === 'function' &&
      typeof textColorFromTheme !== 'undefined'
    ) {
      const color: string = theme.colorThemeHandler(
        textColorFromTheme,
        1,
        theme
      );
      return color;
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
      : null,
  ];

  const cssPropertiesForWeb = [
    fontSize && typeof maxFontSize === 'undefined'
      ? `font-size: ${fontSizePropsHandler(fontSize)};`
      : fontSize && maxFontSize
      ? `font-size: ${fontSizePropsHandler(
          capFontSizeFunc(fontSize, maxFontSize)
        )};`
      : null,
  ];
  const fontFamilyProperties =
    fontType && fontTypeWeight && handleFontFromTheme
      ? `font-family: ${handleFontFromTheme(fontType, fontTypeWeight, theme)};`
      : handleFontFromTheme
      ? `font-family: ${handleFontFromTheme(
          FontTypeEnum.Font1,
          'bold',
          theme
        )}: bold;`
      : null;

const handleShadowType =    restProps.shadowColor
? `text-shadow-color: ${String(restProps.shadowColor)};`
: null

  const cssProperties = [
    handleShadowType,
    fontFamilyProperties,

    restProps.textDecorationLine && restProps.textDecorationLine !== 'none'
      ? `text-decoration-line: ${restProps.textDecorationLine};`
      : null,
    textColorFromTheme && colorThemeHandler
      ? `color: ${colorThemeHandler(textColorFromTheme, 1, theme)};`
      : `color: ${getColor()};`,
    restProps.flex ? `flex: ${restProps.flex};` : null,
    fontWeight ? `font-weight: ${fontWeight};` : null,
    restProps.paddingLeft
      ? `padding-left: ${unitPropsHandler(restProps.paddingLeft)};`
      : null,
    restProps.paddingTop
      ? `padding-top: ${unitPropsHandler(restProps.paddingTop)};`
      : null,
    restProps.fontStyle ? `font-style: ${restProps.fontStyle};` : null,
    restProps.paddingRight
      ? `padding-right: ${unitPropsHandler(restProps.paddingRight)};`
      : null,
    restProps.lineHeight
      ? `line-height: ${unitPropsHandler(restProps.lineHeight)};`
      : fontSize
      ? `line-height: ${unitPropsHandler(fontSize + 6)};`
      : null,
    restProps.width ? `width: ${unitPropsHandler(restProps.width)};` : null,
    restProps.textAlign ? `text-align: ${restProps.textAlign};` : null,
    restProps.marginTop
      ? `margin-top: ${unitPropsHandler(restProps.marginTop)};`
      : null,
    restProps.marginBottom
      ? `margin-bottom: ${unitPropsHandler(restProps.marginBottom)};`
      : null,
    restProps.opacity ? `opacity: ${restProps.opacity};` : null,
    restProps.marginLeft
      ? `margin-left: ${unitPropsHandler(restProps.marginLeft)};`
      : null,
    restProps.marginRight
      ? `margin-right: ${unitPropsHandler(restProps.marginRight)};`
      : null,
    restProps.shadowOpacity
      ? `text-shadow-opacity: ${restProps.shadowOpacity};`
      : null,
 
    restProps.shadowOffsetX || restProps.shadowOffsetY
      ? `text-shadow-offset: ${unitPropsHandler(
          restProps.shadowOffsetX || 0
        )} ${unitPropsHandler(restProps.shadowOffsetY || 0)};`
      : null,
    restProps.shadowRadius
      ? `text-shadow-radius: ${unitPropsHandler(restProps.shadowRadius)};`
      : null,
    restProps.textTransform
      ? `text-transform: ${restProps.textTransform};`
      : null,
  ];

  if (Platform.OS === 'web') {
    cssProperties.push(...cssPropertiesForWeb);
  } else {
    cssProperties.push(...cssPropertiesForNative);
  }

  const css = cssProperties.filter(Boolean).join('\n');
  // console.log("css", css)

  return css;
};

