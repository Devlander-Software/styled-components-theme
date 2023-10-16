import { Platform } from "react-native";

import { FontTypeEnum } from "../../../types/font-type.enum";
import { FontWeightType } from "../../../types/font-weight.enum";
import { FontType } from "../../../types/fonts.interface";
import {
  HandleFontFromThemeParameters,
  ThemeInterface,
} from "../../../types/theme.types";

export type HandleFontFromThemeParametersForNative =
  HandleFontFromThemeParameters<ThemeInterface>;

export const handleFontFromTheme: HandleFontFromThemeParametersForNative = (
  fontType: FontType,
  fontTypeWeight: FontWeightType = "bold",
  theme: ThemeInterface,
): string => {
  const tempFontType = fontType ? fontType : FontTypeEnum.Font2;
  if (
    fontType &&
    fontTypeWeight &&
    Platform.OS === "web" &&
    theme.fonts[tempFontType] &&
    theme.fonts[tempFontType].name
  ) {
    return theme.fonts[fontType].name as string;
  } else if (fontType && fontTypeWeight && Platform.OS !== "web") {
    return theme.fonts[fontType][fontTypeWeight];
  } else if (Platform.OS === "web") {
    return theme.fonts.Font2.name as string;
  } else {
    return theme.fonts.Font2.bold as string;
  }
};

export default handleFontFromTheme;
