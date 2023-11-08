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
  const isPlatformDefined: boolean = Platform && Platform.OS ? true : false;
  const tempFontType = fontType ? fontType : FontTypeEnum.Font2;
  let fontToReturn = defaultFonts.Font1.name;
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
      console.log(webFont);
      fontToReturn = webFont;
    }
  } else if (
    isPlatformDefined &&
    fontType &&
    fontTypeWeight &&
    Platform.OS !== 'web'
  ) {
    if (theme.fonts[fontType][fontTypeWeight]) {
      fontToReturn = theme.fonts[fontType][fontTypeWeight];
    }
  } else if (isPlatformDefined && Platform.OS === 'web') {
    fontToReturn = theme.fonts.Font2.name as string;
  } else {
    fontToReturn = theme.fonts.Font2.bold as string;
  }

  return fontToReturn;
};
