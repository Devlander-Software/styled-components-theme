import { DimensionValue, ViewStyle } from 'react-native';
import { BaseButtonProps } from '../../shared/types/base-button.types';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
export interface ButtonPropsForNative extends BaseButtonProps<DimensionValue, ViewStyle> {
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
    marginRight?: number | string;
    paddingTop?: number | string;
    padding?: number | string;
    borderBottomWidth?: number | string;
    paddingBottom?: number | string;
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}
export interface GhostButtonForNative extends BaseButtonProps<DimensionValue, ViewStyle> {
    textColorFromTheme: ColorNameOrValueFromTheme;
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
    marginRight?: number | string;
    paddingTop?: number | string;
    padding?: number | string;
    ghost?: boolean;
    borderBottomWidth?: number | string;
    paddingBottom?: number | string;
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}
