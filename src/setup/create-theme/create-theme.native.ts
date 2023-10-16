/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { defaultFonts } from "../../defaults/fonts.defaults";
import { lightColors } from '../../defaults/light-colors.defaults';
import { ThemeInterface } from "../../types/theme.types";
import adjustColor from "../../utils/adjust-color";
import getStyleForContainerProps from "../../utils/get-style/native/get-style-for-container-props.native";
import getStyleForGhostProps from "../../utils/get-style/native/get-style-for-ghost-props.native";
import getStyleForTextProps from "../../utils/get-style/native/get-style-for-text-props.native";
import getStyleForTouchableOpacityProps from "../../utils/get-style/native/get-style-for-touchable-opacity-props.native";
import handleFontFromTheme from "../../utils/get-style/native/handle-font-for-theme.native";
import capFontSize from "../../utils/get-style/shared/cap-font-size";
import boxShadowOne from "../../utils/get-style/shared/handle-box-shadows";
import handleColorFromTheme from "../../utils/get-style/shared/handle-color-from-theme";
import handleFontSizeProps from "../../utils/get-style/shared/handle-font-size-props";
import handleSnackbarColor from "../../utils/get-style/shared/handle-snackbar-color";
import handleUnitProps from "../../utils/get-style/shared/handle-unit-props";
import { ThemeConfig } from "./create-theme";

export const createThemeForNative = (config: ThemeConfig): ThemeInterface => {
  const { colorPreferences, fontPreferences, deviceOnTheme } = config;
  const theme: ThemeInterface = {
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
    getStyleForTouchableOpacityProps: getStyleForTouchableOpacityProps,
    getStyleForContainerProps: getStyleForContainerProps,
    handleGhost: getStyleForGhostProps,
    getStyleForTextProps: getStyleForTextProps,
    boxShadowOne: boxShadowOne,
    boxShadowTwo: boxShadowOne,
    boxShadowThree: boxShadowOne,
    handleColorFromTheme: handleColorFromTheme,
    handleFontFromTheme: handleFontFromTheme,
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
