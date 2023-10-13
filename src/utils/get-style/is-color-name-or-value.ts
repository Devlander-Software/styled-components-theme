import { ColorNameOrValueFromTheme } from "../../types/color.types";
import { ThemeInterface } from "../../types/theme.types";
import { extractKeysAndValuesFromColorsInterface } from "./extract-values-from-colors-interface";

export enum ColorNameOrValueEnum {
  ColorName = "colorName",
  ColorValue = "colorValue",
}

export const isColorNameOrValue = (
  nameOrValue: ColorNameOrValueFromTheme,
  theme: ThemeInterface,
): ColorNameOrValueEnum | false => {
  const [keys, values] = extractKeysAndValuesFromColorsInterface(theme.colors);

  if (keys.includes(nameOrValue as string)) {
    return ColorNameOrValueEnum.ColorName;
  }

  if (values.includes(nameOrValue as string)) {
    return ColorNameOrValueEnum.ColorValue;
  }

  return false;
};
