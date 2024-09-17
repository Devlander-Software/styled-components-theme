import { DimensionValue } from 'react-native';
import { BaseButtonProps } from '../../shared/types/base-button.types';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';

export interface ButtonPropsForNative
  extends BaseButtonProps<DimensionValue, Record<any, any>> {
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
  height?: DimensionValue;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  borderRadius?:  DimensionValue
  flex?: number;
  width?: DimensionValue;
  maxWidth?: DimensionValue;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexShrink?: number;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  paddingTop?: DimensionValue;
  padding?: DimensionValue;
  borderBottomWidth?: DimensionValue;
  paddingBottom?: DimensionValue;
  backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}

export interface GhostButtonForNative
  extends BaseButtonProps<DimensionValue, Record<any, any>> {
  textColorFromTheme: ColorNameOrValueFromTheme;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
  height?: DimensionValue;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  borderRadius?: DimensionValue; // Updated to DimensionValue
  flex?: number;
  width?: DimensionValue;
  maxWidth?: DimensionValue;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexShrink?: number;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  paddingTop?: DimensionValue;
  padding?: DimensionValue;
  ghost?: boolean;
  borderBottomWidth?: DimensionValue;
  paddingBottom?: DimensionValue;
  backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}
