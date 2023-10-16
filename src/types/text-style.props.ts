import { FontTypeEnum } from "./font-type.enum";
import { FontTypeWeightEnum, FontWeightType } from "./font-weight.enum";
import { TextFontWeightTypesEnum } from "./font-weight.types";
import { TextDecorationLineTypes, TextInterface } from "./text.types";
import { ThemeInterface } from "./theme.types";

export interface TextStyleProps extends Partial<TextInterface> {
  fontType?: FontTypeEnum;
  fontTypeWeight?: FontWeightType | FontTypeWeightEnum;
  maxFontSizeMultiplier?: number;
  onDark?: boolean;
  fontStyle?: "normal" | "italic";
  numberOfLines?: number;
  paddingLeft?: number;
  highlight?: boolean;
  paddingTop?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  width?: number;
  lineHeight?: number;
  fontSize?: number;
  opacity?: number;
  destructive?: boolean;
  flex?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  fontWeight?: TextFontWeightTypesEnum;
  shadowOffsetY?: number;
  shadowRadius?: number;
  maxFontSize?: number;
  paddingRight?: number;
  textAlign?: "left" | "center" | "right";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined;
  textDecorationLine?: TextDecorationLineTypes;
}

export interface TextStylePropsWithTheme extends TextStyleProps {
  theme: ThemeInterface;
}
