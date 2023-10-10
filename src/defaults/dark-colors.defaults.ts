import { BackgroundColors, BrandColors, ColorsInterface, ElementColors, FeedbackColors, GrayScaleColors, InteractionColors } from "../types/color.types";
import adjustColor from "../utils/adjust-color";
import { defaultLightBackgroundColors } from "./light-colors.defaults";







export const defaultDarkGrayScaleColors: GrayScaleColors = {
  // Adjusting blackAlpha series for dark theme
  blackAlpha10: adjustColor('#000000', 10, 'light'),
  blackAlpha15: adjustColor('#000000', 15, 'light'),
  blackAlpha20: adjustColor('#000000', 20, 'light'),
  blackAlpha30: adjustColor('#000000', 30, 'light'),
  blackAlpha40: adjustColor('#000000', 40, 'light'),
  blackAlpha50: adjustColor('#000000', 50, 'light'),
  blackAlpha60: adjustColor('#000000', 60, 'light'),
  blackAlpha70: adjustColor('#000000', 70, 'light'),
  blackAlpha80: adjustColor('#000000', 80, 'light'),
  blackAlpha90: adjustColor('#000000', 90, 'light'),
  blackAlpha95: adjustColor('#000000', 95, 'light'),
  blackAlpha97: adjustColor('#000000', 97, 'light'),
  blackAlpha100: adjustColor('#000000', 100, 'light'),

  // Adjusting whiteAlpha series for dark theme
  whiteAlpha01: adjustColor('#FFFFFF', 1, 'dark'),
  whiteAlpha05: adjustColor('#FFFFFF', 5, 'dark'),
  whiteAlpha10: adjustColor('#FFFFFF', 10, 'dark'),
  whiteAlpha15: adjustColor('#FFFFFF', 15, 'dark'),
  whiteAlpha20: adjustColor('#FFFFFF', 20, 'dark'),
  whiteAlpha30: adjustColor('#FFFFFF', 30, 'dark'),
  whiteAlpha40: adjustColor('#FFFFFF', 40, 'dark'),
  whiteAlpha50: adjustColor('#FFFFFF', 50, 'dark'),
  whiteAlpha60: adjustColor('#FFFFFF', 60, 'dark'),
  whiteAlpha70: adjustColor('#FFFFFF', 70, 'dark'),
  whiteAlpha80: adjustColor('#FFFFFF', 80, 'dark'),
  whiteAlpha90: adjustColor('#FFFFFF', 90, 'dark'),
  whiteAlpha95: adjustColor('#FFFFFF', 95, 'dark'),
  whiteAlpha97: adjustColor('#FFFFFF', 97, 'dark'),
  whiteAlpha100: adjustColor('#FFFFFF', 100, 'dark'),
  whiteAlpha00: adjustColor('#FFFFFF', 0, 'dark'),
  blackAlpha00: adjustColor('#000000', 0, 'dark'),

  transparent: "transparent",
  primaryTextColor: "#EAEAEA", // Light text color for dark theme
  text: "#BDBDBD", // Normal body text color for dark theme
  secondaryTextColor: "#9E9E9E", // A bit darker than the primary text for secondary info
  mediumTextColor: "#BDBDBD", // Midway between primary and secondary
  inverseOnSurface: "#000000", // Text color for on top of light surfaces in dark theme
  inverseSurface: "#E0E0E0", // Surface color when you need the inverse in dark theme
  inversePrimary: "#007BFF",
  blackAlpha01: adjustColor('#000000', 1, 'light'),
  blackAlpha05: adjustColor('#000000', 5, 'light'),
}




export const defaultDarkBrandColors: BrandColors = {
  colorOne: '#EF9A9A',
  colorTwo: '#A5D6A7',
  colorThree: '#90CAF9',
  colorFour: '#FFE082',
  colorFive: '#CE93D8',
  primary: '#007BFF',
  primaryLighter: '#66AFFF',
  secondary: '#868E96',
  accent: '#FFEB3B',
  accentLighter: '#FFF59D',
  accent50: 'rgba(255, 235, 59, 0.5)',
  accent80: 'rgba(255, 235, 59, 0.8)',
  primaryIconColor: '#007BFF',
  secondaryIconColor: '#868E96',

};


export const defaultDarkBackgroundColors: BackgroundColors = {

  backdrop: adjustColor(defaultLightBackgroundColors.backdrop, 100, 'dark'),
  background: adjustColor(defaultLightBackgroundColors.background, 100, 'dark'),
  headerBackground: adjustColor(defaultLightBackgroundColors.headerBackground, 100, 'dark'),
  cardBackgroundColor: adjustColor(defaultLightBackgroundColors.cardBackgroundColor, 100, 'dark'),
  commentBackgroundColor: adjustColor(defaultLightBackgroundColors.commentBackgroundColor, 100, 'dark'),
  tabBarColor: adjustColor(defaultLightBackgroundColors.tabBarColor, 100, 'dark'),
  surface: adjustColor(defaultLightBackgroundColors.surface, 100, 'dark'),
  surfaceVariant: adjustColor(defaultLightBackgroundColors.surfaceVariant, 100, 'dark'),
  webWashColor: adjustColor(defaultLightBackgroundColors.webWashColor, 100, 'dark'),
};

export const defaultDarkElementColors: ElementColors = {
  dividerColor: '#616161',
  primaryContainer: '#007BFF',
  secondaryContainer: '#616161',
  tertiary: '#525252',
  tertiaryContainer: '#4B4B4B',
  outline: '#5C5C5C',
  shadow: 'rgba(0, 0, 0, 0.7)',
  secondaryButtonBackgroundColor: '#4B4B4B',
  secondaryIconTextColor: '#9E9E9E',
  primaryIconTextColor: '#EAEAEA',
};

export const defaultDarkFeedbackColors: FeedbackColors = {
  error: '#F44336',
  successColor: '#66BB6A',
  warningAlpha22: 'rgba(255, 202, 40, 0.22)',
  warningAlpha62: 'rgba(255, 202, 40, 0.62)',
  errorContainer: '#FF5252',
  onError: '#E0E0E0',
  onErrorContainer: '#FF6E40',
};

export const defaultDarkInteractionColors: InteractionColors = {
  placeholder: '#888888',
  selectedColorOne10: 'rgba(239, 154, 154, 0.1)',
  selectedColorOne40: 'rgba(239, 154, 154, 0.4)',
  selectedColorOne100: '#EF9A9A',
  accentDarkest: '#FFC107',
  primaryDarkest: '#0055AA',
  onPrimary: '#E0E0E0',
  onPrimaryContainer: '#007BFF',
  onSecondary: '#EAEAEA',
  onSecondaryContainer: '#616161',
  onSurface: '#EAEAEA',
  onSurfaceVariant: '#BDBDBD',
  onSurfaceDisabled: '#8D8D8D',
  onBackground: '#E0E0E0',
  hyperLinkColor: "#1b88bf"
};

export const darkColors: ColorsInterface = {
  ...defaultDarkBrandColors,
  ...defaultDarkBackgroundColors,
  ...defaultDarkElementColors,
  ...defaultDarkFeedbackColors,
  ...defaultDarkInteractionColors,
  ...defaultDarkGrayScaleColors
};
