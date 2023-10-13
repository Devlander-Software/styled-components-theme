import { ColorNameOrValueFromTheme } from "../../types/color.types";
import { ThemeInterface } from "../../types/theme.types";
export declare enum ColorNameOrValueEnum {
    ColorName = "colorName",
    ColorValue = "colorValue"
}
export declare const isColorNameOrValue: (nameOrValue: ColorNameOrValueFromTheme, theme: ThemeInterface) => ColorNameOrValueEnum | false;
