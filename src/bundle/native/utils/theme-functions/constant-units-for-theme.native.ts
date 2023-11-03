import { PaddingOnThemeType } from "../../../shared/types/base-theme-types";

export const dimensionsModuleForNative = () => {
  const { Dimensions, Platform } = require('react-native');
  // For web, there's no native status bar, so this will be 0.
  const statusBarHeight = Platform.OS === 'ios' ? 20 : 0;

  const windowHeight = Dimensions.get('window').height || 0.1;
  const windowWidth = Dimensions.get('window').width || 0.1;
  const screenHeight = Dimensions.get('screen').height || 0.1;
  const screenWidth = Dimensions.get('screen').width || 0.1;

  const paddingForScrollView = 15;
  const paddingForScrollViewTwo = 5;

  const paddingObj: PaddingOnThemeType = {
    paddingForScrollView,
    paddingForScrollViewTwo,
  };

  return {
    statusBarHeight,
    windowHeight,
    windowWidth,
    screenHeight,
    screenWidth,
    paddingForScrollView,
    paddingForScrollViewTwo,
    paddingObj,
  };
};

export default dimensionsModuleForNative;
