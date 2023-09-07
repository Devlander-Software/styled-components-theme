import { FontTypeEnum } from "./font-type.enum"
import { TextInterface, textDecorationLineTypes } from "./text.types"
import { FontTypeWeight, ThemeInterface } from "./theme.types"

export interface TextStyleProps extends   Partial<TextInterface>{
    fontType?: FontTypeEnum;
    fontTypeWeight?: keyof FontTypeWeight;
    maxFontSizeMultiplier?: number;
    onDark?: boolean;
    fontStyle?: "normal" | "italic";
    numberOfLines?: number;
    paddingLeft?: number 
    highlight?: boolean;
    paddingTop?: number 
    marginTop?: number 
    marginBottom?: number 
    marginLeft?: number 
    marginRight?: number 
    width?: number 
    lineHeight?: number;
    fontSize?:  number;
    opacity?: number;
    destructive?: boolean;
    flex?: number;
    shadowOpacity?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    fontWeight?:  "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    shadowOffsetY?: number;
    shadowRadius?: number;
    maxFontSize?: number;
    paddingRight?: number;
    textAlign?: "left" | "center" | "right";
    textDecorationLine?: textDecorationLineTypes;
   
}

export interface TextStylePropsWithTheme extends TextStyleProps {
    theme: ThemeInterface;
}