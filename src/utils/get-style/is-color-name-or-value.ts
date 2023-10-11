import { ColorNameOrValueFromTheme } from "../../types/color.types";
import { ThemeInterface } from "../../types/theme.types";
import { extractKeysAndValuesFromColorsInterface } from "./extract-values-from-colors-interface";

export enum NameOrValue {
  Name = "name",
  Value = "value",
}

export const isColorNameOrValue = (
  nameOrValue: ColorNameOrValueFromTheme,
  theme: ThemeInterface,
): NameOrValue | false => {
  const [keys, values] = extractKeysAndValuesFromColorsInterface(theme.colors);

  if (keys.includes(nameOrValue as string)) {
    return NameOrValue.Name;
  }

  if (values.includes(nameOrValue as string)) {
    return NameOrValue.Value;
  }

  return false;
};
