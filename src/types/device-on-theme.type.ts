import { PlatformOSType } from "react-native"

export type DeviceOnTheme = {
    screenWidth: number
    statusBarHeight: number
    screenHeight: number
    isTablet: boolean
    hasNotch: boolean
    hasDynamicIsland: boolean
    platform: PlatformOSType
  }