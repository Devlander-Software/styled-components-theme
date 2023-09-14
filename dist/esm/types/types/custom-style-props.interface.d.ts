import { FontTypeEnum } from './font-type.enum';
import { ColorsInterface, FontTypeWeight } from './theme.types';
export interface CustomTextStylesFromTheme {
    textDecorationColorFromTheme?: keyof ColorsInterface;
    colorFromTheme?: keyof ColorsInterface;
    textColorFromTheme?: keyof ColorsInterface;
    fontTypeWeight?: keyof FontTypeWeight;
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
