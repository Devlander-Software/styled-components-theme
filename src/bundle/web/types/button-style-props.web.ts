import { WebTheme } from '../../shared/types/base-theme-types';
import { ColorFromTheme } from '../../shared/types/color.types';

export interface ButtonStylePropsForWeb {
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
  backgroundColorFromTheme?: ColorFromTheme;
}

export interface ButtonStylePropsWithThemeForWeb
  extends ButtonStylePropsForWeb {
  theme: WebTheme;
}
