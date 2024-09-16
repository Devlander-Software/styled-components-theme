import { adjustColor } from '@devlander/colors';
import { defaultFonts } from '../../../shared/defaults/fonts.defaults';
import { lightColors } from '../../../shared/defaults/light-colors.defaults';

import { NativeTheme } from '../../../shared/types/base-theme-types';
import {
  CreateThemeForNative,
  ThemeConfig,
} from '../../../shared/types/create-theme.types';
import { capFontSize } from '../../../shared/utils/cap-font-size';
import { boxShadowOne } from '../../../shared/utils/handle-box-shadows';
import { unitPropsHandler } from '../../../shared/utils/handle-unit-props';
import { getStyleForGhostPropsForNative } from '../../utils/theme-functions/get-style-for-ghost-props.native';
import { getStyleForImgPropsForNative } from '../../utils/theme-functions/get-style-for-img-props.native';
import { getStyleForTextPropsForNative } from '../../utils/theme-functions/get-style-for-text-props.native';
import { getStyleFromButtonPropsForNative } from '../../utils/theme-functions/get-style-from-button-props.native';
import { getStyleFromPropsNative } from '../../utils/theme-functions/get-style-from-props.native';
import { colorThemeHandlerNative } from '../../utils/theme-functions/handle-color-from-theme.native';
import { handleFontFromThemeForNative } from '../../utils/theme-functions/handle-font-for-theme.native';
import { handleFontSizePropsForNative } from '../../utils/theme-functions/handle-font-size-props.native';

export const createThemeForNative: CreateThemeForNative = (
  config: ThemeConfig
): NativeTheme => {
  const { colorPreferences, fontPreferences, deviceOnTheme } = config;
  const theme: NativeTheme = {
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
      paddingForScrollView: 10,
      paddingForScrollViewTwo: 10,
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
    colorThemeHandler: colorThemeHandlerNative,
    fontThemeHandler: handleFontFromThemeForNative,
    fontSizePropsHandler: handleFontSizePropsForNative,
    imageStyleGenerator: getStyleForImgPropsForNative,
    buttonStyleGenerator: getStyleFromButtonPropsForNative,
    ghostStyleGenerator: getStyleForGhostPropsForNative,
    textStyleGenerator: getStyleForTextPropsForNative,
    boxShadowOne: boxShadowOne,
    unitPropsHandler: unitPropsHandler,
    layoutStyleGenerator: getStyleFromPropsNative,
    colorAdjuster: adjustColor,
  };

  return theme;
};
