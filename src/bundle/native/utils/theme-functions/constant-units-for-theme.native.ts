import { logSeparator, logEnd, logFunction, logStart } from '@devlander/utils';
import { Dimensions, Platform } from 'react-native';
import { PaddingOnThemeType } from '../../../shared/types/base-theme-types';

export const dimensionsModuleForNative = (debug?: boolean) => {
  // Only enable debugMode in development or if explicitly set
  const debugModeEnabled = process.env.NODE_ENV !== 'production' && !!debug;

  // If debug mode is enabled, start logging
  if (debugModeEnabled) {
    logStart('dimensionsModuleForNative', 'dimensions-module.native');
    logSeparator();
  }

  // Dynamically determine status bar height, account for web
  const getStatusBarHeight = () => {
    if (Platform.OS === 'ios') {
      return 20;
    } else if (Platform.OS === 'android') {
      return 0;
    } else {
      return 0; // Web or other platforms
    }
  };

  const statusBarHeight = getStatusBarHeight();

  if (debugModeEnabled) {
    logFunction(
      'dimensionsModuleForNative',
      { statusBarHeight },
      '1. - Status bar height'
    );
    logSeparator();
  }

  // Ensure dimensions are available, provide fallback values
  const windowHeight = Dimensions.get('window')?.height || 0.1;
  const windowWidth = Dimensions.get('window')?.width || 0.1;
  const screenHeight = Dimensions.get('screen')?.height || 0.1;
  const screenWidth = Dimensions.get('screen')?.width || 0.1;

  if (debugModeEnabled) {
    logFunction(
      'dimensionsModuleForNative',
      { windowHeight, windowWidth, screenHeight, screenWidth },
      '2. - Window and screen dimensions'
    );
    logSeparator();
  }

  const paddingForScrollView = 15;
  const paddingForScrollViewTwo = 5;

  const paddingObj: PaddingOnThemeType = {
    paddingForScrollView,
    paddingForScrollViewTwo,
  };

  if (debugModeEnabled) {
    logFunction(
      'dimensionsModuleForNative',
      { paddingObj },
      '3. - Padding object'
    );
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
