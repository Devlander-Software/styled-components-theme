import { logSeparator, logEnd, logFunction, logStart } from '@devlander/utils';
import {
  GhostStyleGenerator,
  NativeTheme
} from '../../../shared/types/base-theme-types';
import { ColorNameOrValueFromTheme } from '../../../shared/types/color.types';

export const getStyleForGhostPropsForNative: GhostStyleGenerator<
  NativeTheme
> = (
  ghost: boolean,
  disabled: boolean,
  theme: NativeTheme,
  colorOne: ColorNameOrValueFromTheme = 'primaryTextColor',
  colorTwo: ColorNameOrValueFromTheme = 'whiteAlpha100',
  debug?: boolean
) => {
  const debugModeEnabled =
    debug && typeof debug === 'boolean' && debug === true;

  if (debugModeEnabled) {
    logStart(
      'getStyleForGhostPropsForNative',
      'get-style-for-ghost-props.native'
    );
    logFunction(
      'getStyleForGhostPropsForNative',
      { ghost, disabled, colorOne, colorTwo },
      '1. - Initial parameters'
    );
    logSeparator();
  }

  let finalColor: string;

  if (disabled === true && ghost === true) {
    finalColor = theme.colorThemeHandler('blackAlpha40', 0.5, theme);
  } else if (disabled === false && ghost === false) {
    finalColor = theme.colorThemeHandler(colorOne, 1, theme);
  } else if (ghost === true) {
    finalColor = theme.colorThemeHandler(colorTwo, 1, theme);
  } else if (disabled) {
    finalColor = theme.colorThemeHandler('blackAlpha40', 0.5, theme);
  } else {
    finalColor = theme.colorThemeHandler(colorOne, 1, theme);
  }

  if (debugModeEnabled) {
    logFunction(
      'getStyleForGhostPropsForNative',
      finalColor,
      '2. - Final color determined'
    );
    logSeparator();
    logEnd('getStyleForGhostPropsForNative');
  }

  return finalColor;
};
