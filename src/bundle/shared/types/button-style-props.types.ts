import { ColorNameOrValueFromTheme } from './color.types';

export interface ButtonStyleProps<ValueType = number> {
  paddingLeft?: ValueType;
  paddingRight?: ValueType;
  marginTop?: ValueType;
  marginBottom?: ValueType;
  height?: ValueType | string;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  borderRadius?: ValueType;
  flex?: ValueType;
  width?: ValueType;
  maxWidth?: ValueType;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexShrink?: ValueType;
  marginLeft?: ValueType;
  marginRight?: ValueType;
  paddingTop?: ValueType;
  padding?: ValueType;
  backgroundColor?: string | (symbol & { __TYPE__: 'Color' });
  borderBottomWidth?: ValueType | string;
  paddingBottom?: ValueType | string;
  backgroundColorFromTheme?: ColorNameOrValueFromTheme;
  borderColor?: string | (symbol & { __TYPE__: 'Color' });
  borderWidth?: ValueType;
  borderLeftWidth?: ValueType;
  borderRightWidth?: ValueType;
  borderTopWidth?: ValueType;
  borderColorFromTheme?: ColorNameOrValueFromTheme;
  opacity?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  shadowColor?: string;
  shadowOffsetX?: ValueType;
  shadowOffsetY?: ValueType;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  transform?: string;
}

export interface ButtonStylePropsWithThemeGeneric<
  Theme,
  CSSPropertyTypes = number,
> extends ButtonStyleProps<CSSPropertyTypes> {
  theme: Theme;
}

export interface ButtonStyleFromProps<T, U>
  extends ButtonStylePropsWithThemeGeneric<T, U> {}
