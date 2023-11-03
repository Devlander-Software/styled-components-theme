import type { ColorNameOrValueFromTheme, ColorsInterface } from '../types/color.types';
export declare enum ColorNameOrValueEnum {
    ColorName = "colorName",
    ColorValue = "colorValue"
}
interface PartialThemeForIsColorNameOrValue {
    colors: ColorsInterface;
    [key: string]: any;
}
interface IsColorNameOrValueParameters {
    (nameOrValue: ColorNameOrValueFromTheme, theme: PartialThemeForIsColorNameOrValue): ColorNameOrValueEnum | false;
}
export declare const isColorNameOrValue: IsColorNameOrValueParameters;
export {};
