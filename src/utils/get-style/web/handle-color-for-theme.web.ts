import hexToRgba from "hex-to-rgba";

import { ColorFromTheme } from "../../../types/color.types";
import {
  HandleColorFromThemeParameters,
  ThemeInterfaceForHTML,
} from "../../../types/theme.types";
import { isValidHex } from "../is-valid-hex";

export type HandleColorFromThemeInterfaceWeb =
  HandleColorFromThemeParameters<ThemeInterfaceForHTML>;

export const handleColorFromThemeWeb: HandleColorFromThemeInterfaceWeb = (
  color: ColorFromTheme,
  opacity: number = 1,
  theme: ThemeInterfaceForHTML,
): string => {
  const tempColor = color ? color : ("primaryTextColor" as string);
  const colorExistsInTheme =
    theme && theme.colors && theme.colors[tempColor as ColorFromTheme]
      ? true
      : false;
  if (colorExistsInTheme && isValidHex(theme.colors[color] as any)) {
    return hexToRgba(theme.colors[color] as string, opacity);
  } else if (theme.colors[color]) {
    return theme.colors[color];
  } else {
    return theme.colors.primaryTextColor;
  }
};

export default handleColorFromThemeWeb;
