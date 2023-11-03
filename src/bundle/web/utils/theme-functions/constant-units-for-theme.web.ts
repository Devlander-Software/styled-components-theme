import { PaddingOnThemeType } from "../../../shared/types/base-theme-types";

export const dimensionsModuleForWeb = () => {
  const globalThis = global || {};
  const window = globalThis.window || {};
  // For web, there's no native status bar, so this will be 0.
  const statusBarHeight = 0;

  // For the dimensions, we use the window object.
  const windowHeight = window.innerHeight || 0.1;
  const windowWidth = window.innerWidth || 0.1;

  // In web context, the screen and window dimensions are typically the same, but for completeness:
  const screenHeight = window.screen.height || 0.1;
  const screenWidth = window.screen.width || 0.1;

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

export default dimensionsModuleForWeb;
