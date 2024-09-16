/**
 * Type definition for handling color from theme.
 */


import { hexToRgba, isValidHex } from '@devlander/colors';
import { ColorThemeHandler, NativeTheme } from '../../../shared/types/base-theme-types';
import { ColorFromTheme, ColorNameOrValueFromTheme } from '../../../shared/types/color.types';
import {
  ColorNameOrValueEnum,
  isColorNameOrValue,
} from '../../../shared/utils/is-color-name-or-value';

/**
 * Retrieve a color from the theme based on the given color name, value, and opacity.
 * If the color is not found, it defaults to the primary text color from the theme.
 *
 * @param color - The name or value of the color from the theme.
 * @param opacity - The desired opacity. Defaults to 1 if not provided.
 * @param theme - The theme object containing the color definitions.
 * @returns The RGBA color string.
 */
export const colorThemeHandlerNative: ColorThemeHandler<NativeTheme> = (
  color: ColorNameOrValueFromTheme,
  opacity: number = 1,
  theme: NativeTheme
): string => {
  const valueOrName: ColorNameOrValueEnum | boolean = isColorNameOrValue(
    color,
    theme
  );
  if (valueOrName) {
    if (valueOrName === ColorNameOrValueEnum.ColorName) {
      if (isValidHex(theme.colors[color as ColorFromTheme] as any)) {
        return hexToRgba(
          theme.colors[color as ColorFromTheme] as string,
          opacity
        );
      } else {
        return theme.colors[color as ColorFromTheme];
      }
    } else {
      return hexToRgba(color as string, opacity);
    }
  } else {
    return theme.colors.primaryTextColor;
  }
};

