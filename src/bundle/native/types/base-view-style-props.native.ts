import { NativeTheme } from '../../shared/types/base-theme-types';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
import { ThemedLayoutStyleProps } from '../../shared/types/style-attributes.interfaces';



export interface BaseViewStyleProps extends  ThemedLayoutStyleProps<NativeTheme, any>   {
  padding?: number;
  paddingTop?: number;
  width?: number;
  position?: 'absolute' | 'relative';
  maxWidth?: number;
  paddingLeft?: number;
  marginBottom?: number;
  opacity?: number;
  paddingRight?: number;
  maxHeight?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingBottom?: number;
  height?: number;
  borderWidth?: number;
  flex?: number;
  borderColor?: string;
  backgroundOpacity?: number;
  backgroundColorFromTheme?: ColorNameOrValueFromTheme
  // [key: string]: keyof ViewProps | keyof BaseNativeTheme | number | string | undefined;
 
}