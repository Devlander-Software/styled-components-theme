import { FontTypeEnum } from './font-type.enum';
import { colorsInterface, FontTypeWeight } from './theme.types';
export interface CustomTextStylesFromTheme {
    textDecorationColorFromTheme?: keyof colorsInterface;
    colorFromTheme?: keyof colorsInterface;
    textColorFromTheme?: keyof colorsInterface;
    fontTypeWeight?: keyof FontTypeWeight;
    highlight?: boolean;
    onDark?: boolean;
    fontType?: FontTypeEnum;
    hasRead?: boolean;
    focused?: boolean;
    ghost?: boolean;
    destructive?: boolean;
    boxShadowColorFromTheme?: keyof colorsInterface;
}
export interface CustomViewStylePropsInterface {
    borderColorFromTheme?: keyof colorsInterface;
    backgroundColorFromTheme?: keyof colorsInterface;
    boxShadowColorFromTheme?: keyof colorsInterface;
    ghost?: boolean;
    destructive?: boolean;
}
export interface CustomButtonTypes {
    submitting?: boolean;
    backgroundColorFromTheme?: keyof colorsInterface;
}
export interface CustomStylePropsInterface extends CustomTextStylesFromTheme, CustomViewStylePropsInterface, CustomButtonTypes {
}
//# sourceMappingURL=custom-style-props.interface.d.ts.map