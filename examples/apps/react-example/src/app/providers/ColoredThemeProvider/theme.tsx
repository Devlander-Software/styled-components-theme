import {
  createThemeForWeb,
  dimensionsModuleForWeb,
} from "@devlander/shared-react-native-types"
import { lightTheme } from "./colors"
import fontOptions from "./fonts"

export const theme = createThemeForWeb({
  colorPreferences: {
    ...lightTheme,
  },
  fontPreferences: {
    ...fontOptions,
  },
  deviceOnTheme: {
    platform: "web",
    isTablet: false,
    hasNotch: false,
    statusBarHeight: 15,
    hasDynamicIsland: false,
    screenWidth: dimensionsModuleForWeb().screenWidth,
    screenHeight: dimensionsModuleForWeb().screenHeight,
  },
})
