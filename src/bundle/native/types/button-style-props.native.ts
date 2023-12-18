import { ColorValue, DimensionValue, ViewStyle } from 'react-native';

import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
import type { BaseButtonProps } from '../../shared/types/base-button.types';

export interface ButtonPropsForNative
  extends BaseButtonProps<DimensionValue, ViewStyle> {
  paddingLeft?: number;
  paddingRight?: number;
  marginTop?: number;
  marginBottom?: number;
  height?: number | string;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  borderRadius?: number;
  flex?: number;
  width?: number | string;
  maxWidth?: number | string;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexShrink?: number;
  marginLeft?: number | string;
  borderColor?: ColorValue | undefined;
  marginRight?: number | string;
  paddingTop?: number | string;
  padding?: number | string;
  backgroundColor?: ColorValue | undefined;
  borderBottomWidth?: number | string;
  paddingBottom?: number | string;
  backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}

export interface GhostButtonForNative
  extends BaseButtonProps<DimensionValue, ViewStyle> {
  textColorFromTheme: ColorNameOrValueFromTheme;
  paddingLeft?: number;
  borderColor?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;

  paddingRight?: number;
  marginTop?: number;
  marginBottom?: number;
  height?: number | string;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  borderRadius?: number;
  flex?: number;
  width?: number | string;
  maxWidth?: number | string;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexShrink?: number;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingTop?: number | string;
  padding?: number | string;
  ghost?: boolean;
  borderBottomWidth?: number | string;
  paddingBottom?: number | string;
  backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}
