import "styled-components/native"
import "styled-components"
import { PlatformOSType } from "react-native"
import { ContainerStyleInterfaceWithTheme } from "./container-style.props.interface"
import { getStyleForTouchableOpacityProps } from "../utils/get-style/get-style-for-touchable-opacity-props"
import { getStyleForGhostProps } from "../utils/get-style/get-style-for-ghost-props"
import { getStyleForTextProps } from "../utils/get-style/get-style-for-text-props"
import { handleColorFromTheme } from "../utils/get-style/handle-color-from-theme"
import { handleFontFromTheme } from "../utils//get-style/handle-font-for-theme"

export interface handleFontSizePropsInterface {
  (fontSize: string | number | undefined): string
}

export interface handleUnitPropsInterface {
  (fontSize: string | number | undefined): string | number
}

export interface handleSnackbarColorInterface {
  (colorType?: string | number, theme?: ThemeInterface): string | number
}

export interface capFontSizeInterface {
  (fontSize: string | number, maxFontSize: number): string | number
}

export interface handleColorFromThemeInterface {
  (color: keyof colorsInterface, opacity: number, theme: ThemeInterface):
    | string
    | elevationObjType
}

export interface boxShadowFuncInterface {
  (fontSize: string): string
}

export type elevationObjType = {
  level1: string
  level2: string
  level3: string
  level4: string
  level5: string
}
export type colorsInterface = {
  disabled: string
  backdrop: string
  placeholder: string
  accentDarkest: string
  primaryDarkest: string
  primary: string
  primaryLighter: string
  transparent: string
  white80: string
  black80: string
  secondary: string
  grey: string
  darkGrey: string
  error: string
  white: string
  black: string
  background: string
  reference: string
  errorColor: string
  colorOne: string
  colorTwo: string
  colorThree: string
  colorFour: string
  colorFive: string

  logoColor: string
  headerBackground: string
  accent: string
  accentLighter: string
  accent50: string
  accent80: string
  successColor: string
  selectedColorOne10: string
  selectedColorOne40: string
  selectedColorOne100: string
  cardBorderColor: string
  cardBackgroundColor: string
  dividerColor: string
  primaryTextColor: string
  text: string
  secondaryTextColor: string
  secondaryButtonBackgroundColor: string
  secondaryIconTextColor: string
  webWashColor: string
  mediumTextColor: string
  primaryIconColor: string
  primaryIconTextColor: string
  secondaryIconColor: string
  tabBarColor: string
  commentBackgroundColor: string
  warningAlpha22: string
  warningAlpha62: string
  whiteAlpha00: string
  whiteAlpha01: string
  whiteAlpha05: string
  whiteAlpha10: string
  whiteAlpha15: string
  whiteAlpha20: string
  whiteAlpha30: string
  whiteAlpha40: string
  whiteAlpha50: string
  whiteAlpha60: string
  whiteAlpha70: string
  whiteAlpha80: string
  whiteAlpha90: string
  whiteAlpha95: string
  whiteAlpha97: string
  whiteAlpha100: string
  blackAlpha00: string
  blackAlpha01: string
  blackAlpha05: string
  blackAlpha10: string
  blackAlpha15: string
  blackAlpha20: string
  blackAlpha30: string
  blackAlpha40: string
  blackAlpha50: string
  blackAlpha60: string
  blackAlpha70: string
  blackAlpha80: string
  blackAlpha90: string
  blackAlpha95: string
  blackAlpha97: string
  blackAlpha100: string
  primaryContainer: string
  secondaryContainer: string
  tertiary: string
  tertiaryContainer: string
  surface: string
  surfaceVariant: string
  surfaceDisabled: string
  errorContainer: string
  onPrimary: string
  onPrimaryContainer: string
  onSecondary: string
  onSecondaryContainer: string
  onTertiary: string
  onTertiaryContainer: string
  onSurface: string
  onSurfaceVariant: string
  onSurfaceDisabled: string
  onError: string
  onErrorContainer: string
  onBackground: string
  outline: string
  shadow: string
  inverseOnSurface: string
  inverseSurface: string
  inversePrimary: string
}

export enum FontWeightEnum {
  name = "name",
  light = "light",
  regular = "regular",
  bold = "bold",
}

export type FontTypeWeight = {
  name: string
  light: string
  regular: string
  bold: string
}

export interface fontsInterface {
  Font2: FontTypeWeight
  CondensedFont: FontTypeWeight
  Font1: FontTypeWeight
  regular: {
    fontFamily: string
    fontWeight: string
  }
  medium: {
    fontFamily: string
    fontWeight: string
  }
  light: {
    fontFamily: string
    fontWeight: string
  }
  thin: {
    fontFamily: string
    fontWeight: string
  }
}

export interface fontConfigItemInterface {
  regular: {
    fontFamily: string
    fontWeight: string
  }
  medium: {
    fontFamily: string
    fontWeight: string
  }
  light: {
    fontFamily: string
    fontWeight: string
  }
  thin: {
    fontFamily: string
    fontWeight: string
  }
}

export interface fontConfigInterface {
  web: fontConfigItemInterface
  ios: fontConfigItemInterface
  default: fontConfigItemInterface
}

export type paddingForThemeType = {
  paddingForScrollView: number
  paddingForScrollViewTwo: number
}

export type deviceOnThemeType = {
  screenWidth: number
  statusBarHeight: number
  screenHeight: number
  isTablet: boolean
  hasNotch: boolean
  hasDynamicIsland: boolean
  platform: PlatformOSType
}
export interface ThemeInterface {
  padding: paddingForThemeType

  handleSnackbarColor: handleSnackbarColorInterface
  handleFontSizeProps: handleFontSizePropsInterface
  handleUnitProps: handleUnitPropsInterface
  getStyleForTouchableOpacityProps: typeof getStyleForTouchableOpacityProps
  getStyleForContainerProps: (props: ContainerStyleInterfaceWithTheme) => string
  handleGhost: typeof getStyleForGhostProps
  getStyleForTextProps: typeof getStyleForTextProps
  boxShadowOne: boxShadowFuncInterface
  boxShadowTwo?: boxShadowFuncInterface
  elevation?: elevationObjType
  boxShadowThree?: boxShadowFuncInterface
  handleColorFromTheme: typeof handleColorFromTheme
  handleFontFromTheme: typeof handleFontFromTheme
  colors: colorsInterface
  fonts: fontsInterface

  darkThemeEnabled?: boolean
  deviceOnTheme: deviceOnThemeType
  capFontSize: capFontSizeInterface
}
declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeInterface {}
}
