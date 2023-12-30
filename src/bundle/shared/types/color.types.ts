export interface GrayScaleColors {
  whiteAlpha00: string;
  whiteAlpha01: string;
  whiteAlpha05: string;
  whiteAlpha10: string;
  whiteAlpha15: string;
  whiteAlpha20: string;
  whiteAlpha30: string;
  whiteAlpha40: string;
  whiteAlpha50: string;
  whiteAlpha60: string;
  whiteAlpha70: string;
  whiteAlpha80: string;
  whiteAlpha90: string;
  whiteAlpha95: string;
  whiteAlpha97: string;
  whiteAlpha100: string;
  blackAlpha00: string;
  blackAlpha01: string;
  blackAlpha05: string;
  blackAlpha10: string;
  blackAlpha15: string;
  blackAlpha20: string;
  blackAlpha30: string;
  blackAlpha40: string;
  blackAlpha50: string;
  blackAlpha60: string;
  blackAlpha70: string;
  blackAlpha80: string;
  blackAlpha90: string;
  blackAlpha95: string;
  blackAlpha97: string;
  blackAlpha100: string;
  white: string;

  white10: string;
  white20: string;
  white30: string;
  white40: string;
  white50: string;
  white60: string;
  white70: string;

  white80: string;
  white90: string;
  white100: string;

  black: string;

  black10: string;
  black20: string;
  black30: string;
  black40: string;
  black50: string;
  black60: string;
  black70: string;

  black80: string;
  black90: string;
  black100: string;

  transparent: string;
  primaryTextColor: string;
  text: string;
  secondaryTextColor: string;
  mediumTextColor: string;
  inverseOnSurface: string;
  inverseSurface: string;
  inversePrimary: string;
}

export interface ElementColors {
  // Elements
  dividerColor: string;
  primaryContainer: string;
  secondaryContainer: string;
  tertiary: string;
  outline: string;
  shadow: string;
  secondaryButtonBackgroundColor: string;
  secondaryIconTextColor: string;
  primaryIconTextColor: string;
  tertiaryContainer: string;
}

export interface BrandColors {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  colorFive: string;
  primary: string;
  primaryLighter: string;
  secondary: string;
  accent: string;
  accentLighter: string;
  accent50: string;
  accent80: string;
  primaryIconColor: string;
  secondaryIconColor: string;
}

export interface BackgroundColors {
  backdrop: string;
  background: string;
  headerBackground: string;
  cardBackgroundColor: string;
  commentBackgroundColor: string;
  tabBarColor: string;
  surface: string;
  surfaceVariant: string;
  webWashColor: string;
}

export interface FeedbackColors {
  error: string;
  successColor: string;
  warningAlpha22: string;
  warningAlpha62: string;
  errorContainer: string;
  onError: string;
  onErrorContainer: string;
}

export interface InteractionColors {
  placeholder: string;
  selectedColorOne10: string;
  selectedColorOne40: string;
  selectedColorOne100: string;
  accentDarkest: string;
  primaryDarkest: string;
  onPrimary: string;
  onPrimaryContainer: string;
  onSecondary: string;
  hyperLinkColor: string;
  onSecondaryContainer: string;
  onSurface: string;
  onSurfaceVariant: string;
  onSurfaceDisabled: string;
  onBackground: string;
}

export interface ColorsInterface
  extends GrayScaleColors,
    BrandColors,
    BackgroundColors,
    ElementColors,
    FeedbackColors,
    InteractionColors {}

export type ColorFromTheme = keyof ColorsInterface;

export type ValueOfColor = ColorsInterface[ColorFromTheme];

export type ColorNameOrValueFromTheme = ColorFromTheme | ValueOfColor;

export interface ColorInfoItem {
  name: ColorFromTheme;
  value: ValueOfColor;
  description?: string;
}

export const colorKeysArray: ColorFromTheme[] = [
  // GrayScaleColors
  'whiteAlpha00',
  'whiteAlpha01',
  'whiteAlpha05',
  'whiteAlpha10',
  'whiteAlpha15',
  'whiteAlpha20',
  'whiteAlpha30',
  'whiteAlpha40',
  'whiteAlpha50',
  'whiteAlpha60',
  'whiteAlpha70',
  'whiteAlpha80',
  'whiteAlpha90',
  'whiteAlpha95',
  'whiteAlpha97',
  'whiteAlpha100',
  'blackAlpha00',
  'blackAlpha01',
  'blackAlpha05',
  'blackAlpha10',
  'blackAlpha15',
  'blackAlpha20',
  'blackAlpha30',
  'blackAlpha40',
  'blackAlpha50',
  'blackAlpha60',
  'blackAlpha70',
  'blackAlpha80',
  'blackAlpha90',
  'blackAlpha95',
  'blackAlpha97',
  'blackAlpha100',
  'white',
  'white10',
  'white20',
  'white30',
  'white40',
  'white50',
  'white60',
  'white70',
  'white80',
  'white90',
  'white100',
  'black',
  'black10',
  'black20',
  'black30',
  'black40',
  'black50',
  'black60',
  'black70',
  'black80',
  'black90',
  'black100',
  'transparent',
  'primaryTextColor',
  'text',
  'secondaryTextColor',
  'mediumTextColor',
  'inverseOnSurface',
  'inverseSurface',
  'inversePrimary',
  // ElementColors
  'dividerColor',
  'primaryContainer',
  'secondaryContainer',
  'tertiary',
  'outline',
  'shadow',
  'secondaryButtonBackgroundColor',
  'secondaryIconTextColor',
  'primaryIconTextColor',
  'tertiaryContainer',
  // BrandColors
  'colorOne',
  'colorTwo',
  'colorThree',
  'colorFour',
  'colorFive',
  'primary',
  'primaryLighter',
  'secondary',
  'accent',
  'accentLighter',
  'accent50',
  'accent80',
  'primaryIconColor',
  'secondaryIconColor',
  // BackgroundColors
  'backdrop',
  'background',
  'headerBackground',
  'cardBackgroundColor',
  'commentBackgroundColor',
  'tabBarColor',
  'surface',
  'surfaceVariant',
  'webWashColor',
  // FeedbackColors
  'error',
  'successColor',
  'warningAlpha22',
  'warningAlpha62',
  'errorContainer',
  'onError',
  'onErrorContainer',
  // InteractionColors
  'placeholder',
  'selectedColorOne10',
  'selectedColorOne40',
  'selectedColorOne100',
  'accentDarkest',
  'primaryDarkest',
  'onPrimary',
  'onPrimaryContainer',
  'onSecondary',
  'hyperLinkColor',
  'onSecondaryContainer',
  'onSurface',
  'onSurfaceVariant',
  'onSurfaceDisabled',
  'onBackground',
];

// Now you have all the color keys defined in colorKeysArray
