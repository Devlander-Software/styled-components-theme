import { ColorNameOrValueFromTheme } from './color.types';
import { FontTypeEnum } from './font-type.enum';
import { FontTypeWeightEnum, FontWeightType } from './font-weight.enum';
import { TextFontWeightTypesEnum } from './font-weight.types';
import { ThemeColorAttributes, ThemeFontAttributes } from './style-attributes.interfaces';
import { TextDecorationLineTypes } from './text-decoration-line-types.enum';

// This interface encapsulates all text style related attributes.
export interface UITextStylingAttributes<ExpectedValueType> extends ThemeFontAttributes, ThemeColorAttributes {
  maxFontSizeMultiplier?: number;
  onDark?: boolean;
  fontStyle?: 'normal' | 'italic';
  numberOfLines?: ExpectedValueType;
  paddingLeft?: ExpectedValueType;
  highlight?: boolean;
  paddingTop?: ExpectedValueType;
  marginTop?: ExpectedValueType;
  marginBottom?: ExpectedValueType;
  marginLeft?: ExpectedValueType;
  marginRight?: ExpectedValueType;
  width?: ExpectedValueType;
  lineHeight?: ExpectedValueType;
  fontSize?: ExpectedValueType;
  opacity?: ExpectedValueType;
  destructive?: boolean;
  flex?: ExpectedValueType;
  shadowOpacity?: ExpectedValueType;
  shadowColor?: string;
  shadowOffsetX?: ExpectedValueType;
  shadowOffsetY?: ExpectedValueType;
  shadowRadius?: ExpectedValueType;
  paddingRight?: ExpectedValueType;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;
  textDecorationLine?: TextDecorationLineTypes;
  textDecorationColorFromTheme?: ColorNameOrValueFromTheme;
  colorFromTheme?: ColorNameOrValueFromTheme;
  textColorFromTheme?: ColorNameOrValueFromTheme;
  textColorNameOrValueFromTheme?: ColorNameOrValueFromTheme;
  fontWeight?: TextFontWeightTypesEnum;
}

// Wrapper for text style properties, which can be used to pass styling via props.
export interface TextStylingPropsWrapper<ExpectedValueType = number, StyleProps extends UITextStylingAttributes<ExpectedValueType> = UITextStylingAttributes<ExpectedValueType>>  {
  style?: StyleProps;
}

// This interface is meant for theming text styles, extending the basic text styling props.
export interface ThemedTextStylingProps<Theme, ExpectedValueType = number> extends TextStylingPropsWrapper<ExpectedValueType> {
  theme: Theme;
  maxFontSizeMultiplier?: number;
  onDark?: boolean;
  fontStyle?: 'normal' | 'italic';
  numberOfLines?: ExpectedValueType;
  paddingLeft?: ExpectedValueType;
  highlight?: boolean;
  paddingTop?: ExpectedValueType;
  marginTop?: ExpectedValueType;
  marginBottom?: ExpectedValueType;
  marginLeft?: ExpectedValueType;
  marginRight?: ExpectedValueType;
  width?: ExpectedValueType;
  lineHeight?: ExpectedValueType;
  fontSize?: ExpectedValueType;
  opacity?: ExpectedValueType;
  destructive?: boolean;
  flex?: ExpectedValueType;
  shadowOpacity?: ExpectedValueType;
  shadowColor?: string;
  shadowOffsetX?: ExpectedValueType;
  shadowOffsetY?: ExpectedValueType;
  shadowRadius?: ExpectedValueType;
  paddingRight?: ExpectedValueType;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | undefined;
  textDecorationLine?: TextDecorationLineTypes;
  textDecorationColorFromTheme?: ColorNameOrValueFromTheme;
  colorFromTheme?: ColorNameOrValueFromTheme;
  textColorFromTheme?: ColorNameOrValueFromTheme;
  textColorNameOrValueFromTheme?: ColorNameOrValueFromTheme;
  fontWeight?: TextFontWeightTypesEnum;
  fontType?: FontTypeEnum;
    fontTypeWeight?: FontWeightType | FontTypeWeightEnum;
    focused?: boolean;
    maxFontSize?: number;
}

// This interface could be used where you want to specifically refer to themed text styles within props.
// It is an explicit declaration that can be useful for distinguishing between simple and themed text styles.
export interface ResolvedThemedTextStylingProps<T, U> extends ThemedTextStylingProps<T, U> {
  // You could add more specific properties here if needed.
  theme: T;
    
}
