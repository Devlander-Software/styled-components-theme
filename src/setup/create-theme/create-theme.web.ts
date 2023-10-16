/* eslint-disable simple-import-sort/imports */
import { defaultFonts } from "../../defaults/fonts.defaults";
import { lightColors } from "../../defaults/light-colors.defaults";
import { ThemeInterfaceForHTML } from "../../types/theme.types";
import adjustColor from "../../utils/adjust-color";
import capFontSize from "../../utils/get-style/shared/cap-font-size";
import boxShadowOne from "../../utils/get-style/shared/handle-box-shadows";
import handleFontSizeProps from "../../utils/get-style/shared/handle-font-size-props";
import handleSnackbarColor from "../../utils/get-style/shared/handle-snackbar-color";
import handleUnitProps from "../../utils/get-style/shared/handle-unit-props";
import getStyleForGhostPropsForWeb from "../../utils/get-style/web/get-style-for-ghost-props.web";
import { getStyleForImgPropsForWeb } from "../../utils/get-style/web/get-style-for-img-props.web";
import getStyleForParagraphProps from "../../utils/get-style/web/get-style-for-paragraph-props.web";
import { getStyleFromProps } from "../../utils/get-style/web/get-style-from-props.web";
import handleColorFromThemeWeb from "../../utils/get-style/web/handle-color-for-theme.web";
import handleFontFromThemeWeb from "../../utils/get-style/web/handle-font-for-theme.web";

import { ThemeConfig } from "./create-theme";

export const createThemeForWeb = (
  config: ThemeConfig,
): ThemeInterfaceForHTML => {
  const { colorPreferences, fontPreferences, deviceOnTheme } = config;
  const theme: ThemeInterfaceForHTML = {
    colors: {
      ...lightColors,
      ...colorPreferences,
    },
    fonts: {
      ...defaultFonts,
      ...fontPreferences,
    },
    handleSnackbarColor: handleSnackbarColor,
    handleFontSizeProps: handleFontSizeProps,
    handleUnitProps: handleUnitProps,
    getStyleForContainerProps: getStyleFromProps,
    handleGhost: getStyleForGhostPropsForWeb,
    getStyleForImageProps: getStyleForImgPropsForWeb,
    getStyleForTextProps: getStyleForParagraphProps,
    boxShadowOne: boxShadowOne,
    boxShadowTwo: boxShadowOne,
    boxShadowThree: boxShadowOne,
    handleColorFromTheme: handleColorFromThemeWeb,
    handleFontFromTheme: handleFontFromThemeWeb,
    elevation: {
      level1: "",
      level2: "",
      level3: "",
      level4: "",
      level5: "",
    },
    padding: {
      paddingForScrollView: 0,
      paddingForScrollViewTwo: 0,
    },
    deviceOnTheme: {
      screenWidth: 0,
      statusBarHeight: 0,
      screenHeight: 0,
      isTablet: false,
      hasNotch: false,
      hasDynamicIsland: false,
      platform: "ios",
      ...deviceOnTheme,
    },
    capFontSize: capFontSize,
    adjustColor: adjustColor,
  };

  return theme;
};
