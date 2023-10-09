import { FontTypeEnum } from "./font-type.enum";
import { FontTypeWeight } from "./font-weight.enum";
import { TextFontWeightTypesEnum } from "./font-weight.types";
import { TextInterface, textDecorationLineTypes } from "./text.types";
import { ThemeInterface } from "./theme.types";
export interface TextStyleProps extends Partial<TextInterface> {
    fontType?: FontTypeEnum;
    fontTypeWeight?: keyof FontTypeWeight;
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
    textDecorationLine?: textDecorationLineTypes;
}
export interface TextStylePropsWithTheme extends TextStyleProps {
    theme: ThemeInterface;
}
