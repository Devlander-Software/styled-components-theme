import {
  ButtonStyleGenerator,
  NativeTheme,
} from '../../../shared/types/base-theme-types';
import { ButtonStyleFromProps } from '../../../shared/types/button-style-props.types';

export const getStyleFromButtonPropsForNative: ButtonStyleGenerator<
  NativeTheme,
  number
> = ({
  borderBottomWidth,
  maxWidth,
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
  alignSelf
}: ButtonStyleFromProps<NativeTheme, number>): string => {
  const css: string[] = [];

  if (
    backgroundColor &&
    typeof backgroundColor !== 'undefined' &&
    typeof backgroundColor == 'string'
  ) {
    css.push(`background-color: ${backgroundColor};`);
  } else if (backgroundColorFromTheme) {
    css.push(
      `background-color: ${theme.colorThemeHandler(
        backgroundColorFromTheme,
        1,
        theme
      )};`
    );
  }
  if (flex) {
    css.push(`flex: ${flex};`);
  }
  if (paddingLeft) {
    css.push(`padding-left: ${theme.unitPropsHandler(paddingLeft)};`);
  }
  if (width) {
    css.push(`width: ${theme.unitPropsHandler(width)};`);
  }
  if (paddingBottom) {
    css.push(`padding-bottom: ${theme.unitPropsHandler(paddingBottom)};`);
  }
  if (paddingTop) {
    css.push(`padding-top: ${theme.unitPropsHandler(paddingTop)};`);
  }
  if (paddingRight) {
    css.push(`padding-right: ${theme.unitPropsHandler(paddingRight)};`);
  }
  if (maxWidth) {
    css.push(`max-width: ${theme.unitPropsHandler(maxWidth)};`);
  }
  if (marginTop) {
    css.push(`margin-top: ${theme.unitPropsHandler(marginTop)};`);
  }
  if (marginBottom) {
    css.push(`margin-bottom: ${theme.unitPropsHandler(marginBottom)};`);
  }
  if (marginLeft) {
    css.push(`margin-left: ${theme.unitPropsHandler(marginLeft)};`);
  }
  if (marginRight) {
    css.push(`margin-right: ${theme.unitPropsHandler(marginRight)};`);
  }
  if (alignSelf) {
    css.push(`align-self: ${alignSelf};`);
  }
  if (padding) {
    css.push(`padding: ${theme.unitPropsHandler(padding)};`);
  }
  if (justifyContent) {
    css.push(`justify-content: ${justifyContent};`);
  }
  if (alignItems) {
    css.push(`align-items: ${alignItems};`);
  }
  if (borderRadius) {
    css.push(`border-radius: ${borderRadius};`);
  }
  if (borderBottomWidth) {
    css.push(
      `border-bottom-width: ${theme.unitPropsHandler(borderBottomWidth)};`
    );
  }

  return css.join(' ');
};
