import { hexToRgba, isValidHex } from '@devlander/colors';
import { logSeparator, logEnd, logFunction, logStart } from '@devlander/utils';
import {
  ColorThemeHandler,
  NativeTheme,
} from '../../../shared/types/base-theme-types';
import {
  ColorFromTheme,
  ColorNameOrValueFromTheme,
} from '../../../shared/types/color.types';
import {
  ColorNameOrValueEnum,
  isColorNameOrValue
} from '../../../shared/utils/is-color-name-or-value';
import { isValidHexLegacy } from '../../../shared/utils/is-valid-hex-legacy';

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
  const debugModeEnabled =
    theme?.debug && typeof theme.debug === 'boolean' && theme.debug === true;

  if (debugModeEnabled) {
    logStart('colorThemeHandlerNative', 'color-theme-handler.native');
    logFunction(
      'colorThemeHandlerNative',
      { color, opacity },
      '1. - Initial parameters'
    );
    logSeparator();
  }

  const valueOrName: ColorNameOrValueEnum | boolean = isColorNameOrValue(
    color,
    theme
  );

  if (debugModeEnabled) {
    logFunction(
      'colorThemeHandlerNative',
      valueOrName,
      '2. - Result of isColorNameOrValue'
    );
    logSeparator();
  }

  if (valueOrName) {
    if (valueOrName === ColorNameOrValueEnum.ColorName) {
      const themeColorHex = theme.colors[color as ColorFromTheme] as string;

      if (isValidHex(themeColorHex)) {
        const rgbaColor = hexToRgba(themeColorHex, opacity);
        if (debugModeEnabled) {
          logFunction(
            'colorThemeHandlerNative',
            rgbaColor,
            '3. - Hex color (new version) converted to RGBA'
          );
          logSeparator();
        }
        return rgbaColor;
      } else if (isValidHexLegacy(themeColorHex)) {
        const rgbaColorLegacy = hexToRgba(themeColorHex, opacity);
        if (debugModeEnabled) {
          logFunction(
            'colorThemeHandlerNative',
            rgbaColorLegacy,
            '4. - Hex color (legacy version) converted to RGBA'
          );
          logSeparator();
        }
        return rgbaColorLegacy;
      } else {
        const themeColor = theme.colors[color as ColorFromTheme];
        if (debugModeEnabled) {
          logFunction(
            'colorThemeHandlerNative',
            themeColor,
            '5. - Theme color returned as is'
          );
          logSeparator();
        }
        return themeColor;
      }
    } else {
      const rgbaColor = hexToRgba(color as string, opacity);
      if (debugModeEnabled) {
        logFunction(
          'colorThemeHandlerNative',
          rgbaColor,
          '6. - Hex color value converted to RGBA'
        );
        logSeparator();
      }
      return rgbaColor;
    }
  } else {
    const defaultColor = theme.colors.primaryTextColor;
    if (debugModeEnabled) {
      logFunction(
        'colorThemeHandlerNative',
        defaultColor,
        '7. - Default primaryTextColor returned'
      );
      logSeparator();
      logEnd('colorThemeHandlerNative');
    }
    return defaultColor;
  }
};