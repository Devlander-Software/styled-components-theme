import { ColorsInterface } from "./color.types";
import { FontTypeEnum } from "./font-type.enum";
import { FontWeightType } from "./font-weight.enum";
import { ThemeInterfaceForHTML } from "./theme.types";
export interface CustomTextStylesFromTheme {
    textDecorationColorFromTheme?: keyof ColorsInterface;
    colorFromTheme?: keyof ColorsInterface;
    textColorFromTheme?: keyof ColorsInterface;
    fontTypeWeight?: FontWeightType;
    highlight?: boolean;
    onDark?: boolean;
    fontType?: FontTypeEnum;
    hasRead?: boolean;
    focused?: boolean;
    ghost?: boolean;
    destructive?: boolean;
    boxShadowColorFromTheme?: keyof ColorsInterface;
}
export interface CustomViewStylePropsInterface {
    borderColorFromTheme?: keyof ColorsInterface;
    backgroundColorFromTheme?: keyof ColorsInterface;
    boxShadowColorFromTheme?: keyof ColorsInterface;
    ghost?: boolean;
    destructive?: boolean;
}
export interface CustomButtonTypes {
    submitting?: boolean;
    backgroundColorFromTheme?: keyof ColorsInterface;
}
export interface CustomStylePropsInterface extends CustomTextStylesFromTheme, CustomViewStylePropsInterface, CustomButtonTypes {
}
export interface StylePropsInterface extends CustomTextStylesFromTheme, CustomViewStylePropsInterface, CustomButtonTypes {
}
export interface StylePropsInterfaceWithTheme extends StylePropsInterface {
    theme: ThemeInterfaceForHTML;
    maxWidth?: number | string;
    maxHeight?: number | string;
    height?: number | string;
    marginTop?: number | string;
    width?: number | string;
    flex?: number;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    margin?: number | string;
    borderWidth?: number | string;
    minHeight?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    opacity?: number;
    backgroundColorFromTheme?: keyof ColorsInterface;
}
