import { ColorNameOrValueEnum } from "../utils/is-color-name-or-value";
export interface ImageStyle<ValueType = number> {
    backgroundColorFromTheme: ColorNameOrValueEnum;
    maxWidth: ValueType;
    borderBottomRightRadius: ValueType;
    borderColorFromTheme: ColorNameOrValueEnum;
    borderTopRightRadius: ValueType;
    maxHeight: ValueType;
    height: ValueType;
    width: ValueType;
    borderRadius: ValueType;
    borderWidth: ValueType;
    borderBottomLeftRadius: ValueType;
    borderTopLeftRadius: ValueType;
}
export interface ImageStyleWithThemeGeneric<Theme, CSSPropertyTypes = number> extends ImageStyle<CSSPropertyTypes> {
    theme: Theme;
}
export interface ImageStyleFromProps<T, U> extends ImageStyleWithThemeGeneric<T, U> {
}
