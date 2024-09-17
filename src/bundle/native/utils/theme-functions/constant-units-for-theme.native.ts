import {
  logSeparator,
  logEnd,
  logFunction,
  logStart,
} from '@devlander/utils';
import { PaddingOnThemeType } from "../../../shared/types/base-theme-types";

export const dimensionsModuleForNative = () => {
  const { Dimensions, Platform } = require('react-native');
  const debugModeEnabled = true; // Assuming you want to enable debug mode here for logging

  if (debugModeEnabled) {
    logStart('dimensionsModuleForNative', 'dimensions-module.native');
    logSeparator();
  }

  // For web, there's no native status bar, so this will be 0.
  const statusBarHeight = Platform.OS === 'ios' ? 20 : 0;

  if (debugModeEnabled) {
    logFunction('dimensionsModuleForNative', { statusBarHeight }, '1. - Status bar height');
    logSeparator();
  }

  const windowHeight = Dimensions.get('window').height || 0.1;
  const windowWidth = Dimensions.get('window').width || 0.1;
  const screenHeight = Dimensions.get('screen').height || 0.1;
  const screenWidth = Dimensions.get('screen').width || 0.1;

  if (debugModeEnabled) {
    logFunction('dimensionsModuleForNative', { windowHeight, windowWidth, screenHeight, screenWidth }, '2. - Window and screen dimensions');
    logSeparator();
  }

  const paddingForScrollView = 15;
  const paddingForScrollViewTwo = 5;

  const paddingObj: PaddingOnThemeType = {
    paddingForScrollView,
    paddingForScrollViewTwo,
  };

  if (debugModeEnabled) {
    logFunction('dimensionsModuleForNative', { paddingObj }, '3. - Padding object');
    logSeparator();
    logEnd('dimensionsModuleForNative');
  }

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