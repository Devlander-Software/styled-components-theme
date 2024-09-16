/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { adjustColor } from "@devlander/colors";
import type {
  BackgroundColors,
  BrandColors,
  ColorsInterface,
  ElementColors,
  FeedbackColors,
  GrayScaleColors,
  InteractionColors,
  LegacyColors
} from "../types/color.types";

export const defaultLegacyLightColors: LegacyColors = {
  placeholder: "#A8A8A8",
  selectedColorOne10: "rgba(229, 115, 115, 0.1)",
  selectedColorOne40: "rgba(229, 115, 115, 0.4)",
  selectedColorOne100: "#E57373",
  accentDarkest: "#FFA000",
  primaryDarkest: "#0055AA",
  onPrimary: "#FFFFFF",
  error: "#D32F2F",
  onPrimaryContainer: "#007BFF",
  onSecondary: "#333333",
  onSecondaryContainer: "#F5F5F5",
  onSurface: "#212121",
  onSurfaceVariant: "#757575",
  onSurfaceDisabled: "#BDBDBD",
  onBackground: "#333333",
  warningAlpha22: "rgba(255, 165, 0, 0.22)",
  warningAlpha62: "rgba(255, 165, 0, 0.62)",
  hyperLinkColor: "#1b88bf",
  colorOne: "#E57373",
  colorTwo: "#81C784",
  colorThree: "#64B5F6",
  colorFour: "#FFD54F",
  colorFive: "#BA68C8",
  primary: "#007BFF",
  primaryLighter: "#66AFFF",
  secondary: "#6C757D",
  background: "#FAFAFA",
  headerBackground: "#FFFFFF",
  surface: "#FFFFFF",
  surfaceVariant: "#F7F7F7",
  accent: "#FFC107",
  accentLighter: "#FFECB3",
  accent50: "rgba(255, 193, 7, 0.5)",
  accent80: "rgba(255, 193, 7, 0.8)",
  backdrop: "#F5F5F5",
  tertiary: "#F5F5F5",
  outline: "#D5D5D5",
  shadow: "rgba(0, 0, 0, 0.15)",
  secondaryButtonBackgroundColor: "#F7F7F7",
  errorContainer: "#D32F2F",
  onError: "#FFFFFF",
  onErrorContainer: "#FF5722",

}

export const defaultLightGrayScaleColors: GrayScaleColors = {
  blackAlpha01: "rgba(0, 0, 0, 0.01)",
  blackAlpha05: "rgba(0, 0, 0, 0.05)",
  blackAlpha10: "rgba(0, 0, 0, 0.1)",
  blackAlpha15: "rgba(0, 0, 0, 0.15)",
  blackAlpha20: "rgba(0, 0, 0, 0.2)",
  blackAlpha30: "rgba(0, 0, 0, 0.3)",
  blackAlpha40: "rgba(0, 0, 0, 0.4)",
  blackAlpha50: "rgba(0, 0, 0, 0.5)",
  blackAlpha60: "rgba(0, 0, 0, 0.6)",
  blackAlpha70: "rgba(0, 0, 0, 0.6)",
  blackAlpha80: "rgba(0, 0, 0, 0.8)",
  blackAlpha95: "rgba(0, 0, 0, 0.95)",
  blackAlpha100: "rgba(0, 0, 0, 1)",
  whiteAlpha01: "rgba(255, 255, 255, 0.01)",
  whiteAlpha05: "rgba(255, 255, 255, 0.05)",
  whiteAlpha10: "rgba(255, 255, 255, 0.10)",
  whiteAlpha15: "rgba(255, 255, 255, 0.15)",
  whiteAlpha20: "rgba(255, 255, 255, 0.2)",
  whiteAlpha30: "rgba(255, 255, 255, 0.3)",
  whiteAlpha40: "rgba(255, 255, 255, 0.4)",
  whiteAlpha50: "rgba(255, 255, 255, 0.5)",
  whiteAlpha60: "rgba(255, 255, 255, 0.6)",
  whiteAlpha70: "rgba(255, 255, 255, 0.7)",
  whiteAlpha80: "rgba(255, 255, 255, 0.8)",
  whiteAlpha90: "rgba(255, 255, 255, 0.9)",
  whiteAlpha95: "rgba(255, 255, 255, 0.95)",
  whiteAlpha97: "rgba(255, 255, 255, 0.97)",
  whiteAlpha100: "rgba(255, 255, 255, 1)",
  blackAlpha90: "rgba(0, 0, 0, 0.9)",
  blackAlpha97: "rgba(0, 0, 0, 0.97)",
  whiteAlpha00: "#fff",
  blackAlpha00: "#000",
  transparent: "transparent",
  primaryTextColor: "#212121", // Dark text color for light theme
  text: "#333333", // Normal body text color
  secondaryTextColor: "#757575", // A bit lighter than the primary text, perhaps for secondary info or captions
  mediumTextColor: "#616161", // Midway between primary and secondary, could be used for subheadings
  inverseOnSurface: "#FFFFFF", // Text color for on top of dark surfaces in light theme
  inverseSurface: "#212121", // Surface color when you need the inverse in light theme
  inversePrimary: "#007BFF", // Inverted primary color, could be a blue-ish tone
  black80: "#262626",
  white80: "#D9D9D9",

  white: adjustColor("#FFFFFF", 100, "light"),
  white10: adjustColor("#FFFFFF", 10, "light"),
  white20: adjustColor("#FFFFFF", 20, "light"),
  white30: adjustColor("#FFFFFF", 30, "light"),
  white40: adjustColor("#FFFFFF", 40, "light"),
  white50: adjustColor("#FFFFFF", 50, "light"),
  white60: adjustColor("#FFFFFF", 60, "light"),
  white70: adjustColor("#FFFFFF", 70, "light"),
  white90: adjustColor("#FFFFFF", 90, "light"),
  white100: adjustColor("#FFFFFF", 100, "light"),
  black: adjustColor("#000000", 100, "dark"),
  black10: adjustColor("#000000", 10, "dark"),
  black20: adjustColor("#000000", 20, "dark"),
  black30: adjustColor("#000000", 30, "dark"),
  black40: adjustColor("#000000", 40, "dark"),
  black50: adjustColor("#000000", 50, "dark"),
  black60: adjustColor("#000000", 60, "dark"),
  black70: adjustColor("#000000", 70, "dark"),
  black90: adjustColor("#000000", 90, "dark"),
  black100: adjustColor("#000000", 100, "dark")
};

console.log(defaultLightGrayScaleColors, "defaultLightGrayScaleColors");

export const defaultLightBrandColors: BrandColors = {
  primaryIconColor: "#007BFF",
  secondaryIconColor: "#6C757D",
  baseColor: defaultLegacyLightColors['colorOne'],
  complementColor: defaultLegacyLightColors['colorTwo'],
  supportColor: defaultLegacyLightColors['colorThree'],
  highlightColor: defaultLegacyLightColors['colorFour'],
  contrastColor: defaultLegacyLightColors['colorFive'],
  primaryColor: defaultLegacyLightColors['primary'],
  primaryLighterColor: defaultLegacyLightColors['primaryLighter'],
  secondaryColor: defaultLegacyLightColors['secondary'],
  accentColor: defaultLegacyLightColors['accent'],
  accentLighterColor: defaultLegacyLightColors['accentLighter'],
  accentMutedColor: defaultLegacyLightColors['accent50'],
  accentStrongColor: defaultLegacyLightColors['accent80']
};

export const defaultLightBackgroundColors: BackgroundColors = {
  cardBackgroundColor: "#FFFFFF",
  commentBackgroundColor: "#EDEDED",
  tabBarColor: "#F2F2F2",
  webWashColor: "#F5F5F5",
  backdropColor: defaultLegacyLightColors['backdrop'],
  backgroundColor: defaultLegacyLightColors['background'],
  headerBackgroundColor: defaultLegacyLightColors['headerBackground'],
  surfaceColor: defaultLegacyLightColors['surface'],
  surfaceVariantColor: defaultLegacyLightColors['surfaceVariant']
};

export const defaultLightElementColors: ElementColors = {
  dividerColor: "#E0E0E0",
  primaryContainer: "#007BFF",
  secondaryContainer: "#E0E0E0",
  tertiaryContainer: "#FFFFFF",
  secondaryIconTextColor: "#757575",
  primaryIconTextColor: "#FFFFFF",
  outlineColor: defaultLegacyLightColors['outline'],
  shadowColor: defaultLegacyLightColors['shadow'],
  secondaryButtonBgColor: defaultLegacyLightColors['secondaryButtonBackgroundColor']
};

export const defaultLightFeedbackColors: FeedbackColors = {
  successColor: "#43A047",
  errorColor: defaultLegacyLightColors['error'],
  warningLightColor: defaultLegacyLightColors['warningAlpha22'],
  warningStrongColor: defaultLegacyLightColors['warningAlpha62'],
  errorContainerColor: defaultLegacyLightColors['errorContainer'],
  onErrorColor: defaultLegacyLightColors['onError'],
  onErrorContainerColor: defaultLegacyLightColors['onErrorContainer']
};

export const defaultLightInteractionColors: InteractionColors = {
  placeholderColor: defaultLegacyLightColors['placeholder'],
  selectedBaseColorLight: defaultLegacyLightColors['selectedColorOne10'],
  selectedBaseColorMuted: defaultLegacyLightColors['selectedColorOne40'],
  selectedBaseColor: defaultLegacyLightColors['selectedColorOne100'],
  darkestAccentColor: defaultLegacyLightColors['accentDarkest'],
  darkestPrimaryColor: defaultLegacyLightColors['primaryDarkest'],
  onPrimaryColor: defaultLegacyLightColors['onPrimary'],
  onPrimaryContainerColor: defaultLegacyLightColors['onPrimaryContainer'],
  onSecondaryColor: defaultLegacyLightColors['onSecondary'],
  hyperLinkColor: defaultLegacyLightColors['hyperLinkColor'],
  onSecondaryContainerColor: defaultLegacyLightColors['onSecondaryContainer'],
  onSurfaceColor: defaultLegacyLightColors['onSurface'],
  onSurfaceVariantColor: defaultLegacyLightColors['onSurfaceVariant'],
  onSurfaceDisabledColor: defaultLegacyLightColors['onSurfaceDisabled'],
  onBackgroundColor: defaultLegacyLightColors['onBackground']
};

export const lightColors: ColorsInterface = {
  ...defaultLightBrandColors,
  ...defaultLightBackgroundColors,
  ...defaultLightElementColors,
  ...defaultLightFeedbackColors,
  ...defaultLightInteractionColors,
  ...defaultLightGrayScaleColors,
  ...defaultLegacyLightColors
};
