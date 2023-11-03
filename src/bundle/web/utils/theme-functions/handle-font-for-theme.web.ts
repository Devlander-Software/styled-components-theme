
import { FontThemeHandler, WebTheme } from '../../../shared/types/base-theme-types';
import { FontTypeEnum } from '../../../shared/types/font-type.enum';
import type { FontWeightType } from '../../../shared/types/font-weight.enum';
import type { FontType } from '../../../shared/types/fonts.interface';



export const handleFontFromThemeForWeb: FontThemeHandler<WebTheme> = (
  fontType: FontType,
  fontTypeWeight: FontWeightType = 'bold',
  theme: WebTheme
): string => {
  const tempFontType = fontType ? fontType : FontTypeEnum.Font2;
  if (
    fontType &&
    fontTypeWeight &&
    theme.fonts[tempFontType] &&
    theme.fonts[tempFontType].name
  ) {
    return theme.fonts[fontType].name as string;
  } else {
    return theme.fonts.Font2.bold as string;
  }
};

