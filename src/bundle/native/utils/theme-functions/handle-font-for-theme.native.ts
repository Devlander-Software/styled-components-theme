import { Platform } from 'react-native';
import { FontThemeHandler, NativeTheme } from '../../../shared/types/base-theme-types';
import { FontTypeEnum } from '../../../shared/types/font-type.enum';
import { FontWeightType } from '../../../shared/types/font-weight.enum';
import { FontType } from '../../../shared/types/fonts.interface';


export const handleFontFromThemeForNative: FontThemeHandler<NativeTheme> = (
  fontType: FontType,
  fontTypeWeight: FontWeightType = 'bold',
  theme: NativeTheme
): string => {
  const tempFontType = fontType ? fontType : FontTypeEnum.Font2;
  if (
    fontType &&
    fontTypeWeight &&
    Platform.OS === 'web' &&
    theme.fonts[tempFontType] &&
    theme.fonts[tempFontType].name
  ) {
    return theme.fonts[fontType].name as string;
  } else if (fontType && fontTypeWeight && Platform.OS !== 'web') {
    return theme.fonts[fontType][fontTypeWeight];
  } else if (Platform.OS === 'web') {
    return theme.fonts.Font2.name as string;
  } else {
    return theme.fonts.Font2.bold as string;
  }
};

