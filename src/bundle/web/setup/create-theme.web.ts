import { defaultFonts } from '../../shared/defaults/fonts.defaults';
import { lightColors } from '../../shared/defaults/light-colors.defaults';
import { WebTheme } from '../../shared/types/base-theme-types';
import {
  CreateThemeForWeb,
  ThemeConfig,
} from '../../shared/types/create-theme.types';
import { adjustColor } from '../../shared/utils/adjust-color';
import { capFontSize } from '../../shared/utils/cap-font-size';
import { boxShadowOne } from '../../shared/utils/handle-box-shadows';
import { unitPropsHandler } from '../../shared/utils/handle-unit-props';
import getStyleForGhostPropsForWeb from '../utils/theme-functions/get-style-for-ghost-props.web';
import { getStyleForImgPropsForWeb } from '../utils/theme-functions/get-style-for-img-props.web';
import getStyleForTextPropsForWeb from '../utils/theme-functions/get-style-for-text-props.web';
import getStyleFromButtonPropsForWeb from '../utils/theme-functions/get-style-from-button-props.web';
import { getStyleFromPropsForWeb } from '../utils/theme-functions/get-style-from-props.web';
import { colorThemeHandlerWeb } from '../utils/theme-functions/handle-color-for-theme.web';
import { handleFontFromThemeForWeb } from '../utils/theme-functions/handle-font-for-theme.web';
import { handleFontSizePropsForWeb } from '../utils/theme-functions/handle-font-size-props.web';

export const createThemeForWeb: CreateThemeForWeb = (
  config: ThemeConfig
): WebTheme => {
  const { colorPreferences, fontPreferences, deviceOnTheme } = config;
  const theme: WebTheme = {
    colors: {
      ...lightColors,
      ...colorPreferences,
    },
    fonts: {
      ...defaultFonts,
      ...fontPreferences,
    },

    elevation: {
      level1: '',
      level2: '',
      level3: '',
      level4: '',
      level5: '',
    },
    paddingOnTheme: {
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
      platform: 'ios',
      ...deviceOnTheme,
    },
    fontSizeCap: capFontSize,
    colorThemeHandler: colorThemeHandlerWeb,
    fontThemeHandler: handleFontFromThemeForWeb,
    fontSizePropsHandler: handleFontSizePropsForWeb,
    imageStyleGenerator: getStyleForImgPropsForWeb,
    buttonStyleGenerator: getStyleFromButtonPropsForWeb,
    ghostStyleGenerator: getStyleForGhostPropsForWeb,
    textStyleGenerator: getStyleForTextPropsForWeb,
    boxShadowOne: boxShadowOne,
    unitPropsHandler: unitPropsHandler,
    layoutStyleGenerator: getStyleFromPropsForWeb,
    colorAdjuster: adjustColor
  };

  return theme;
};
