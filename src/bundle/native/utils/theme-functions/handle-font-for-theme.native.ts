import { logSeparator, logEnd, logFunction, logStart } from '@devlander/utils';
import { Platform } from 'react-native';
import { defaultFonts } from '../../../shared/defaults/fonts.defaults';
import {
  FontThemeHandler,
  NativeTheme,
} from '../../../shared/types/base-theme-types';
import { FontTypeEnum } from '../../../shared/types/font-type.enum';
import { FontWeightType } from '../../../shared/types/font-weight.enum';
import { FontType } from '../../../shared/types/fonts.interface';

export const handleFontFromThemeForNative: FontThemeHandler<NativeTheme> = (
  fontType: FontType,
  fontTypeWeight: FontWeightType = 'bold',
  theme: NativeTheme
): string => {
  const debugModeEnabled =
    theme?.debug && typeof theme.debug === 'boolean' && theme.debug === true;

  if (debugModeEnabled) {
    logStart('handleFontFromThemeForNative', 'font-theme-handler.native');
    logFunction(
      'handleFontFromThemeForNative',
      { fontType, fontTypeWeight },
      '1. - Initial parameters'
    );
    logSeparator();
  }

  const isPlatformDefined: boolean = Platform && Platform.OS ? true : false;
  const tempFontType = fontType ? fontType : FontTypeEnum.Font2;
  let fontToReturn = defaultFonts.Font1.name;

  if (debugModeEnabled) {
    logFunction(
      'handleFontFromThemeForNative',
      { isPlatformDefined, tempFontType },
      '2. - Platform and fontType check'
    );
    logSeparator();
  }

  if (
    isPlatformDefined &&
    fontType &&
    fontTypeWeight &&
    Platform &&
    Platform.OS === 'web' &&
    theme.fonts[tempFontType] &&
    theme.fonts[tempFontType].name
  ) {
    if (theme.fonts[fontType].name) {
      const webFont = theme.fonts[fontType].name as string;
      fontToReturn = webFont;

      if (debugModeEnabled) {
        logFunction(
          'handleFontFromThemeForNative',
          webFont,
          '3. - Web font returned'
        );
        logSeparator();
      }
    }
  } else if (
    isPlatformDefined &&
    fontType &&
    fontTypeWeight &&
    Platform.OS !== 'web'
  ) {
    if (theme.fonts[fontType][fontTypeWeight]) {
      fontToReturn = theme.fonts[fontType][fontTypeWeight];

      if (debugModeEnabled) {
        logFunction(
          'handleFontFromThemeForNative',
          fontToReturn,
          '4. - Non-web font returned'
        );
        logSeparator();
      }
    }
  } else if (isPlatformDefined && Platform.OS === 'web') {
    fontToReturn = theme.fonts.Font2.name as string;

    if (debugModeEnabled) {
      logFunction(
        'handleFontFromThemeForNative',
        fontToReturn,
        '5. - Default web font returned'
      );
      logSeparator();
    }
  } else {
    fontToReturn = theme.fonts.Font2.bold as string;

    if (debugModeEnabled) {
      logFunction(
        'handleFontFromThemeForNative',
        fontToReturn,
        '6. - Default font returned'
      );
      logSeparator();
    }
  }

  if (debugModeEnabled) {
    logEnd('handleFontFromThemeForNative');
  }

  return fontToReturn;
};
