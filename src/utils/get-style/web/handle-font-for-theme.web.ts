import { FontTypeEnum } from "../../../types/font-type.enum";
import { FontWeightType } from "../../../types/font-weight.enum";
import { FontType } from "../../../types/fonts.interface";
import {
  HandleFontFromThemeParameters,
  ThemeInterfaceForHTML,
} from "../../../types/theme.types";

export type HandleFontFromThemeParametersForWeb =
  HandleFontFromThemeParameters<ThemeInterfaceForHTML>;

export const handleFontFromThemeWeb: HandleFontFromThemeParametersForWeb = (
  fontType: FontType,
  fontTypeWeight: FontWeightType = "bold",
  theme: ThemeInterfaceForHTML,
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

export default handleFontFromThemeWeb;
