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
    dividerColor: string;
    primaryContainer: string;
    secondaryContainer: string;
    tertiaryContainer: string;
    outlineColor: string;
    shadowColor: string;
    secondaryButtonBgColor: string;
    secondaryIconTextColor: string;
    primaryIconTextColor: string;
}
export interface BrandColors {
    baseColor: string;
    complementColor: string;
    supportColor: string;
    highlightColor: string;
    contrastColor: string;
    primaryColor: string;
    primaryLighterColor: string;
    secondaryColor: string;
    accentColor: string;
    accentLighterColor: string;
    accentMutedColor: string;
    accentStrongColor: string;
    primaryIconColor: string;
    secondaryIconColor: string;
}
export interface BackgroundColors {
    backdropColor: string;
    backgroundColor: string;
    headerBackgroundColor: string;
    cardBackgroundColor: string;
    commentBackgroundColor: string;
    tabBarColor: string;
    surfaceColor: string;
    surfaceVariantColor: string;
    webWashColor: string;
}
export interface FeedbackColors {
    errorColor: string;
    successColor: string;
    warningLightColor: string;
    warningStrongColor: string;
    errorContainerColor: string;
    onErrorColor: string;
    onErrorContainerColor: string;
}
export interface InteractionColors {
    placeholderColor: string;
    selectedBaseColorLight: string;
    selectedBaseColorMuted: string;
    selectedBaseColor: string;
    darkestAccentColor: string;
    darkestPrimaryColor: string;
    onPrimaryColor: string;
    onPrimaryContainerColor: string;
    onSecondaryColor: string;
    hyperLinkColor: string;
    onSecondaryContainerColor: string;
    onSurfaceColor: string;
    onSurfaceVariantColor: string;
    onSurfaceDisabledColor: string;
    onBackgroundColor: string;
}
export interface LegacyColors {
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
export interface ColorsInterface extends GrayScaleColors, BrandColors, BackgroundColors, ElementColors, FeedbackColors, InteractionColors, LegacyColors {
}
export type ColorFromTheme = keyof ColorsInterface;
export type ValueOfColor = ColorsInterface[ColorFromTheme];
export type ColorNameOrValueFromTheme = ColorFromTheme | ValueOfColor;
export interface ColorInfoItem {
    name: ColorFromTheme;
    value: ValueOfColor;
    description?: string;
}
export declare const colorKeysArray: ColorFromTheme[];
