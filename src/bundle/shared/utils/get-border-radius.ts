import { logSeparator, logFunction, logStart, logEnd } from '@devlander/utils'; // Assuming these are your log functions
import { GenericTheme } from '../types/base-theme-types';

export const getBorderRadius = (
  theme: GenericTheme<any>, // assuming `theme` has a unitPropsHandler method
  borderRadius?: number, // general borderRadius
  borderTopLeftRadius?: number,
  borderTopRightRadius?: number,
  borderBottomRightRadius?: number,
  borderBottomLeftRadius?: number,
  debug?: boolean // added debug flag
): string => {
  const debugModeEnabled = debug && typeof debug === 'boolean' && debug === true;

  if (debugModeEnabled) {
    logStart('getBorderRadius', 'border-radius-calculation');
    logFunction('getBorderRadius', {
      themeDefined: !!theme,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomRightRadius,
      borderBottomLeftRadius,
    }, 'Initial inputs');
    logSeparator();
  }

  if (!theme || !theme.unitPropsHandler) {
    // Log if theme or unitPropsHandler is not defined
    if (debugModeEnabled) {
      logFunction('getBorderRadius', 'Theme or unitPropsHandler not defined, returning default "0px 0px 0px 0px".', 'Error');
      logEnd('getBorderRadius');
    }
    return 'border-radius: 0px 0px 0px 0px;';
  }

  // If any specific corner values are defined, they take priority over the general borderRadius.
  const borderRadiusValue = `border-radius: ${
    borderTopLeftRadius !== undefined
      ? theme.unitPropsHandler(borderTopLeftRadius)
      : borderRadius !== undefined
      ? theme.unitPropsHandler(borderRadius)
      : '0px'
  } ${
    borderTopRightRadius !== undefined
      ? theme.unitPropsHandler(borderTopRightRadius)
      : borderRadius !== undefined
      ? theme.unitPropsHandler(borderRadius)
      : '0px'
  } ${
    borderBottomRightRadius !== undefined
      ? theme.unitPropsHandler(borderBottomRightRadius)
      : borderRadius !== undefined
      ? theme.unitPropsHandler(borderRadius)
      : '0px'
  } ${
    borderBottomLeftRadius !== undefined
      ? theme.unitPropsHandler(borderBottomLeftRadius)
      : borderRadius !== undefined
      ? theme.unitPropsHandler(borderRadius)
      : '0px'
  };`;

  // Log the final computed border-radius
  if (debugModeEnabled) {
    logFunction('getBorderRadius', borderRadiusValue, 'Final computed border-radius');
    logSeparator();
    logEnd('getBorderRadius');
  }

  return borderRadiusValue;
};
