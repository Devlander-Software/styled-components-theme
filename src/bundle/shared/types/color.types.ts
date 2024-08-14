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
  tertiaryContainer: string;
  outlineColor: string;                    // Used to be: outline
  shadowColor: string;                     // Used to be: shadow
  secondaryButtonBgColor: string;          // Used to be: secondaryButtonBackgroundColor
  secondaryIconTextColor: string;
  primaryIconTextColor: string;
}

export interface BrandColors {
  baseColor: string;                       // Used to be: colorOne
  complementColor: string;                 // Used to be: colorTwo
  supportColor: string;                    // Used to be: colorThree
  highlightColor: string;                  // Used to be: colorFour
  contrastColor: string;                   // Used to be: colorFive
  primaryColor: string;                    // Used to be: primary
  primaryLighterColor: string;             // Used to be: primaryLighter
  secondaryColor: string;                  // Used to be: secondary
  accentColor: string;                     // Used to be: accent
  accentLighterColor: string;              // Used to be: accentLighter
  accentMutedColor: string;                // Used to be: accent50
  accentStrongColor: string;               // Used to be: accent80
  primaryIconColor: string;
  secondaryIconColor: string;
}

export interface BackgroundColors {
  backdropColor: string;                   // Used to be: backdrop
  backgroundColor: string;                 // Used to be: background
  headerBackgroundColor: string;
  cardBackgroundColor: string;
  commentBackgroundColor: string;
  tabBarColor: string;
  surfaceColor: string;                    // Used to be: surface
  surfaceVariantColor: string;             // Used to be: surfaceVariant
  webWashColor: string;
}

export interface FeedbackColors {
  errorColor: string;                      // Used to be: error
  successColor: string;
  warningLightColor: string;               // Used to be: warningAlpha22
  warningStrongColor: string;              // Used to be: warningAlpha62
  errorContainerColor: string;             // Used to be: errorContainer
  onErrorColor: string;                    // Used to be: onError
  onErrorContainerColor: string;           // Used to be: onErrorContainer
}

export interface InteractionColors {
  placeholderColor: string;                // Used to be: placeholder
  selectedBaseColorLight: string;          // Used to be: selectedColorOne10
  selectedBaseColorMuted: string;          // Used to be: selectedColorOne40
  selectedBaseColor: string;               // Used to be: selectedColorOne100
  darkestAccentColor: string;              // Used to be: accentDarkest
  darkestPrimaryColor: string;             // Used to be: primaryDarkest
  onPrimaryColor: string;                  // Used to be: onPrimary
  onPrimaryContainerColor: string;         // Used to be: onPrimaryContainer
  onSecondaryColor: string;                // Used to be: onSecondary
  hyperLinkColor: string;
  onSecondaryContainerColor: string;       // Used to be: onSecondaryContainer
  onSurfaceColor: string;                  // Used to be: onSurface
  onSurfaceVariantColor: string;           // Used to be: onSurfaceVariant
  onSurfaceDisabledColor: string;          // Used to be: onSurfaceDisabled
  onBackgroundColor: string;               // Used to be: onBackground
}
// Interface for Legacy Colors, only including keys not present in other interfaces
// Interface for Legacy Colors, only including keys not present in other interfaces
export interface LegacyColors {
  // Legacy Colors that do not exist in other interfaces
  colorOne: BrandColors['baseColor'];
  colorTwo: BrandColors['complementColor'];
  colorThree: BrandColors['supportColor'];
  colorFour: BrandColors['highlightColor'];
  colorFive: BrandColors['contrastColor'];
  primary: BrandColors['primaryColor'];
  primaryLighter: BrandColors['primaryLighterColor'];
  secondary: BrandColors['secondaryColor'];
  accent: BrandColors['accentColor'];
  accentLighter: BrandColors['accentLighterColor'];
  accent50: BrandColors['accentMutedColor'];
  accent80: BrandColors['accentStrongColor'];

  tertiary: ElementColors['tertiaryContainer'];
  outline: ElementColors['outlineColor'];
  shadow: ElementColors['shadowColor'];
  secondaryButtonBackgroundColor: ElementColors['secondaryButtonBgColor'];

  backdrop: BackgroundColors['backdropColor'];
  background: BackgroundColors['backgroundColor'];
  headerBackground: BackgroundColors['headerBackgroundColor'];
  surface: BackgroundColors['surfaceColor'];
  surfaceVariant: BackgroundColors['surfaceVariantColor'];

  error: FeedbackColors['errorColor'];
  warningAlpha22: FeedbackColors['warningLightColor'];
  warningAlpha62: FeedbackColors['warningStrongColor'];
  errorContainer: FeedbackColors['errorContainerColor'];
  onError: FeedbackColors['onErrorColor'];
  onErrorContainer: FeedbackColors['onErrorContainerColor'];

  placeholder: InteractionColors['placeholderColor'];
  selectedColorOne10: InteractionColors['selectedBaseColorLight'];
  selectedColorOne40: InteractionColors['selectedBaseColorMuted'];
  selectedColorOne100: InteractionColors['selectedBaseColor'];
  accentDarkest: InteractionColors['darkestAccentColor'];
  primaryDarkest: InteractionColors['darkestPrimaryColor'];
  onPrimary: InteractionColors['onPrimaryColor'];
  onPrimaryContainer: InteractionColors['onPrimaryContainerColor'];
  onSecondary: InteractionColors['onSecondaryColor'];
  hyperLinkColor: InteractionColors['hyperLinkColor'];
  onSecondaryContainer: InteractionColors['onSecondaryContainerColor'];
  onSurface: InteractionColors['onSurfaceColor'];
  onSurfaceVariant: InteractionColors['onSurfaceVariantColor'];
  onSurfaceDisabled: InteractionColors['onSurfaceDisabledColor'];
  onBackground: InteractionColors['onBackgroundColor'];
}






export interface ColorsInterface
  extends GrayScaleColors,
    BrandColors,
    BackgroundColors,
    ElementColors,
    FeedbackColors,
    InteractionColors,
    LegacyColors {}

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
  'tertiaryContainer',
  'outlineColor',
  'shadowColor',
  'secondaryButtonBgColor',
  'secondaryIconTextColor',
  'primaryIconTextColor',
  // BrandColors
  'baseColor',
  'complementColor',
  'supportColor',
  'highlightColor',
  'contrastColor',
  'primaryColor',
  'primaryLighterColor',
  'secondaryColor',
  'accentColor',
  'accentLighterColor',
  'accentMutedColor',
  'accentStrongColor',
  'primaryIconColor',
  'secondaryIconColor',
  // BackgroundColors
  'backdropColor',
  'backgroundColor',
  'headerBackgroundColor',
  'cardBackgroundColor',
  'commentBackgroundColor',
  'tabBarColor',
  'surfaceColor',
  'surfaceVariantColor',
  'webWashColor',
  // FeedbackColors
  'errorColor',
  'successColor',
  'warningLightColor',
  'warningStrongColor',
  'errorContainerColor',
  'onErrorColor',
  'onErrorContainerColor',
  // InteractionColors
  'placeholderColor',
  'selectedBaseColorLight',
  'selectedBaseColorMuted',
  'selectedBaseColor',
  'darkestAccentColor',
  'darkestPrimaryColor',
  'onPrimaryColor',
  'onPrimaryContainerColor',
  'onSecondaryColor',
  'hyperLinkColor',
  'onSecondaryContainerColor',
  'onSurfaceColor',
  'onSurfaceVariantColor',
  'onSurfaceDisabledColor',
  'onBackgroundColor',
  // LegacyColors (only unique keys)
  'accent50',
  'accent80',
  'tertiary',
  'outline',
  'shadow',
  'secondaryButtonBackgroundColor',
  'headerBackground',
  'error',
  'warningAlpha22',
  'warningAlpha62',
  'errorContainer',
  'onError',
  'onErrorContainer',
  'placeholder',
  'selectedColorOne10',
  'selectedColorOne40',
  'selectedColorOne100',
  'accentDarkest',
  'primaryDarkest',
  'onPrimary',
  'onPrimaryContainer',
  'onSecondary',
];

