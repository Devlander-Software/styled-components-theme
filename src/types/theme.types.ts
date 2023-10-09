
import { PlatformOSType } from "react-native"
import { capFontSizeInterface } from "../utils/get-style/cap-font-size"
import { GetStyleForContainerPropsParameters } from "../utils/get-style/get-style-for-container-props"
import { GetStyleForGhostPropsParametersNative } from "../utils/get-style/get-style-for-ghost-props"
import { GetStyleForTextPropsParametersNative } from "../utils/get-style/get-style-for-text-props"
import { GetStyleForTouchableOpacityInterface } from "../utils/get-style/get-style-for-touchable-opacity-props"
import { boxShadowFuncInterface } from "../utils/get-style/handle-box-shadows"
import { handleColorFromThemeInterface } from "../utils/get-style/handle-color-from-theme"
import { HandleFontFromThemeParametersForNative } from "../utils/get-style/handle-font-for-theme"
import { HandleFontSizePropsInterface } from "../utils/get-style/handle-font-size-props"
import { handleSnackbarColorInterface } from "../utils/get-style/handle-snackbar-color"
import { handleUnitPropsInterface } from "../utils/get-style/handle-unit-props"
import { GetStyleForGhostPropsParametersWeb } from "../utils/get-style/web/get-style-for-ghost-props.web"
import { GetStyleForImgPropsInterface } from '../utils/get-style/web/get-style-for-img-props'
import { GetStyleForParagraphPropsWeb } from "../utils/get-style/web/get-style-for-paragraph-props"
import { HandleFontFromThemeParametersForWeb } from "../utils/get-style/web/handle-font-for-theme.web"
import { ContainerStyleInterfaceWithTheme } from "./container-style.props.interface"


export interface GetStyleForTextPropsParameters<Props> {
	(props: Props): string
}


export interface HandleFontFromThemeParameters <T>  {
  (fontType: keyof ThemeInterface['fonts'],
  fontTypeWeight: keyof FontTypeWeight,
  theme: T): string
}


export interface GetStyleForGhostPropsParameters<T> {
  (
    ghost: boolean,
    disabled: boolean,
    theme: T,
    colorOne: keyof ColorsInterface,
    colorTwo: keyof ColorsInterface,
  ): string
}




export type ElevationObjType = {
  level1: string
  level2: string
  level3: string
  level4: string
  level5: string
}
export interface ColorsInterface  {
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

export interface FontsInterface {
  Font2: FontTypeWeight
  CondensedFont: FontTypeWeight
  Font1: FontTypeWeight
  Font3: FontTypeWeight
}

export interface FontConfigItemInterface {
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

export interface FontConfigInterface {
  web: FontConfigItemInterface
  ios: FontConfigItemInterface
  default: FontConfigItemInterface
}

export type PaddingOnThemeType = {
  paddingForScrollView: number
  paddingForScrollViewTwo: number
}

export type DeviceOnTheme = {
  screenWidth: number
  statusBarHeight: number
  screenHeight: number
  isTablet: boolean
  hasNotch: boolean
  hasDynamicIsland: boolean
  platform: PlatformOSType
}
export interface ThemeInterface {
  padding: PaddingOnThemeType
  handleSnackbarColor: handleSnackbarColorInterface
  handleFontSizeProps: HandleFontSizePropsInterface
  handleUnitProps: handleUnitPropsInterface
  getStyleForTouchableOpacityProps: GetStyleForTouchableOpacityInterface
  getStyleForContainerProps: (props: ContainerStyleInterfaceWithTheme) => string
  handleGhost: GetStyleForGhostPropsParametersNative;
  getStyleForTextProps: GetStyleForTextPropsParametersNative
  boxShadowOne: boxShadowFuncInterface
  boxShadowTwo?: boxShadowFuncInterface

  elevation?: ElevationObjType
  boxShadowThree?: boxShadowFuncInterface
  handleColorFromTheme: handleColorFromThemeInterface
  handleFontFromTheme: HandleFontFromThemeParametersForNative
  colors: ColorsInterface
  fonts: FontsInterface
  darkThemeEnabled?: boolean
  deviceOnTheme: DeviceOnTheme
  capFontSize: capFontSizeInterface
}

export interface ThemeInterfaceForHTML {
  padding: PaddingOnThemeType
  handleSnackbarColor: handleSnackbarColorInterface
  handleFontSizeProps: HandleFontSizePropsInterface
  handleUnitProps: handleUnitPropsInterface
  getStyleForContainerProps: GetStyleForContainerPropsParameters
  getStyleForImageProps: GetStyleForImgPropsInterface,

  handleGhost: GetStyleForGhostPropsParametersWeb;
  getStyleForTextProps: GetStyleForParagraphPropsWeb
  boxShadowOne: boxShadowFuncInterface
  boxShadowTwo?: boxShadowFuncInterface
  boxShadowThree?: boxShadowFuncInterface

  elevation?: ElevationObjType
  handleColorFromTheme: handleColorFromThemeInterface
  handleFontFromTheme: HandleFontFromThemeParametersForWeb
  colors: ColorsInterface
  fonts: FontsInterface
  darkThemeEnabled?: boolean
  deviceOnTheme: DeviceOnTheme
  capFontSize: capFontSizeInterface
}

