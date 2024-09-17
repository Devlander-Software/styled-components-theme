import { logSeparator, logFunction, logStart } from '@devlander/utils';
import { AdjustColorFunc } from '../types/base-theme-types';
const colorPackage = require('color');

export type AlphaScale = number; // Assuming AlphaScale is a number type
export type ThemeType = 'light' | 'dark'; // Defining ThemeType based on usage



export const cssColorNamesDefault = ['transparent'];

export const isConsoleAvailable = () =>
  typeof console !== 'undefined' && console.log;

export const logForStyledPackage = (message: string) => {
  if (isConsoleAvailable()) {
    console.log(message);
  }
};

export const canBeConvertedIntoColor = (colorValue: string): boolean => {
  if (cssColorNamesDefault.includes(colorValue)) return true;

  try {
    const color = colorPackage(colorValue);
    return Boolean(color);
  } catch (e) {
    return false;
  }
};

export const adjustColor: AdjustColorFunc = (
  colorValue: string,
  alphaValue: AlphaScale | string,
  mode: ThemeType | string,
  cssColorNames: string[] = cssColorNamesDefault,
  debug: boolean = false
): string => {
  const debugModeEnabled = debug; // Enable debug mode if the `debug` flag is true

  if (debugModeEnabled) {
    logStart('adjustColor', 'adjust-color');
    logFunction(
      'adjustColor',
      { colorValue, alphaValue, mode, cssColorNames },
      '1. - Initial parameters'
    );
    logSeparator();
  }

  if (cssColorNames.includes(colorValue)) return colorValue;

  const alpha =
    typeof alphaValue === 'string' ? parseFloat(alphaValue) : alphaValue;
  if (isNaN(alpha) || alpha < 0 || alpha > 100) {
    logForStyledPackage(
      'Alpha value should be between 0 and 100. Returning default color.'
    );
    return '#FF0000'; // Default color (Red in this case)
  }

  if (canBeConvertedIntoColor(colorValue)) {
    try {
      let adjustedColor = colorPackage(colorValue);

      if (debugModeEnabled) {
        logFunction(
          'adjustColor',
          adjustedColor.hex(),
          '2. - Color converted using color package'
        );
        logSeparator();
      }

      if (mode === 'light') {
        adjustedColor = adjustedColor.lighten(0.2);
        if (debugModeEnabled) {
          logFunction(
            'adjustColor',
            adjustedColor.hex(),
            '3. - Color lightened'
          );
          logSeparator();
        }
      } else if (mode === 'dark') {
        adjustedColor = adjustedColor.darken(0.2);
        if (debugModeEnabled) {
          logFunction(
            'adjustColor',
            adjustedColor.hex(),
            '4. - Color darkened'
          );
          logSeparator();
        }
      }

      const alphaScale = alpha / 100;

      if (adjustedColor.alpha(alphaScale).alpha() === 1) {
        return adjustedColor.hex();
      } else {
        return adjustedColor.rgb().string();
      }
    } catch (error) {
      logForStyledPackage(
        `Error adjusting color with value: ${colorValue}. Returning default color.`
      );
      return '#FF0000'; // Default color (Red in this case)
    }
  } else {
    logForStyledPackage(
      `Failed to convert ${colorValue} into a color. Returning default color.`
    );
    return '#FF0000'; // Default color (Red in this case)
  }
};
