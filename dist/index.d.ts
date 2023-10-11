/// <reference types="react" />
import { TextProps, PlatformOSType, ViewStyle, TextInputProps, TextStyle, ViewProps } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

interface GrayScaleColors {
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
interface BrandColors {
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
interface BackgroundColors {
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
interface ElementColors {
    dividerColor: string;
    primaryContainer: string;
    secondaryContainer: string;
    tertiary: string;
    tertiaryContainer: string;
}
interface ElementColors {
    dividerColor: string;
    primaryContainer: string;
    secondaryContainer: string;
    tertiary: string;
    tertiaryContainer: string;
    outline: string;
    shadow: string;
    secondaryButtonBackgroundColor: string;
    secondaryIconTextColor: string;
    primaryIconTextColor: string;
}
interface FeedbackColors {
    error: string;
    successColor: string;
    warningAlpha22: string;
    warningAlpha62: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
}
interface InteractionColors {
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
interface ColorsInterface extends GrayScaleColors, BrandColors, BackgroundColors, ElementColors, FeedbackColors, InteractionColors {
}
type ColorFromTheme = keyof ColorsInterface;
type ValueOfColor = ColorsInterface[ColorFromTheme];
type ColorNameOrValueFromTheme = ColorFromTheme | ValueOfColor;
interface ColorInfoItem {
    name: ColorFromTheme;
    value: ValueOfColor;
    description?: string;
}

declare const defaultDarkGrayScaleColors: GrayScaleColors;
declare const defaultDarkBrandColors: BrandColors;
declare const defaultDarkBackgroundColors: BackgroundColors;
declare const defaultDarkElementColors: ElementColors;
declare const defaultDarkFeedbackColors: FeedbackColors;
declare const defaultDarkInteractionColors: InteractionColors;
declare const darkColors: ColorsInterface;

declare enum FontTypeWeightEnum {
    name = "name",
    light = "light",
    regular = "regular",
    bold = "bold"
}
type FontTypeWeight = {
    name: string;
    light: string;
    regular: string;
    bold: string;
};
type FontWeightType = "name" | "light" | "regular" | "bold";

interface FontsInterface {
    Font2: FontTypeWeight;
    CondensedFont: FontTypeWeight;
    Font1: FontTypeWeight;
    Font3: FontTypeWeight;
}
type FontType = keyof FontsInterface;

declare const defaultFonts: FontsInterface;

declare const defaultLightGrayScaleColors: GrayScaleColors;
declare const defaultLightBrandColors: BrandColors;
declare const defaultLightBackgroundColors: BackgroundColors;
declare const defaultLightElementColors: ElementColors;
declare const defaultLightFeedbackColors: FeedbackColors;
declare const defaultLightInteractionColors: InteractionColors;
declare const lightColors: ColorsInterface;

declare enum FontTypeEnum {
    Font1 = "Font1",
    Font2 = "Font2",
    Font3 = "Font3",
    CondensedFont = "CondensedFont"
}

/**
 * Adjusts a color's alpha and brightness.
 * @param colorValue - A string representing a color (e.g. hex, rgb, rgba).
 * @param alphaValue - A number between 0 to 100 representing the alpha value.
 * @param mode - A string, either 'light' or 'dark', to adjust the brightness.
 * @param isSolid - A boolean value. If true, returns the solid version of the color with no transparency.
 * @returns The adjusted color as a string.
 */
interface AdjustColorParams {
    (colorValue: string, alphaValue: number, mode: "light" | "dark", isSolid?: boolean): string;
}

interface capFontSizeInterface {
    (fontSize: string | number, maxFontSize: number): string | number;
}
declare const capFontSize: capFontSizeInterface;

interface GetStyleForContainerPropsParameters {
    (props: ContainerStyleInterfaceWithTheme): string;
}
declare const getStyleForContainerProps: GetStyleForContainerPropsParameters;

type GetStyleForGhostPropsParametersNative = GetStyleForGhostPropsParameters<ThemeInterface>;
declare const getStyleForGhostProps: GetStyleForGhostPropsParametersNative;

declare enum TextFontWeightTypesEnum {
    normal = "normal",
    bold = "bold",
    oneHundred = "100",
    twoHundred = "200",
    threeHundred = "300",
    fourHundred = "400",
    fiveHundred = "500",
    sixHundred = "600",
    sevenHundred = "700",
    eightHundred = "800",
    nineHundred = "900",
    light = "light"
}
declare const TextFontWeightTypes: (TextFontWeightTypesEnum | undefined)[];

declare enum TextTransformTypes {
    none = "none",
    uppercase = "uppercase",
    lowercase = "lowercase"
}
declare enum textDecorationLineTypes {
    none = "none",
    underline = "underline",
    lineThrough = "line-through",
    underlineLineThrough = "underline line-through"
}
interface TextInterface extends TextProps, CustomTextStylesFromTheme {
    fontSize?: number;
    color?: string;
    maxLineHeight?: number;
    marginTop?: number;
    boxShadowX?: number | string;
    boxShadowY?: number | string;
    boxShadowBlurRadius?: number | string;
    paddingLeft?: number;
    paddingRight?: number;
    maxFontSizeMultiplier?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    opacity?: number;
    lineHeight?: number;
    letterSpacing?: number;
    flex?: number;
    width?: number;
    fontWeight?: TextFontWeightTypesEnum;
    paddingTop?: number;
    paddingBottom?: number;
    textDecoration?: textDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    maxFontSize?: number;
    maxWidth?: number;
    theme?: ThemeInterface;
}
interface GhostTextInterface extends Partial<TextInterface> {
    fontType: FontTypeEnum;
    fontTypeWeight: FontTypeWeightEnum;
    ghost: boolean;
    disabled: boolean;
    textColorFromTheme: keyof ColorsInterface;
    backgroundColorFromTheme: keyof ColorsInterface;
    theme: ThemeInterface;
}

interface TextStyleProps extends Partial<TextInterface> {
    fontType?: FontTypeEnum;
    fontTypeWeight?: keyof FontTypeWeight;
    maxFontSizeMultiplier?: number;
    onDark?: boolean;
    fontStyle?: "normal" | "italic";
    numberOfLines?: number;
    paddingLeft?: number;
    highlight?: boolean;
    paddingTop?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    width?: number;
    lineHeight?: number;
    fontSize?: number;
    opacity?: number;
    destructive?: boolean;
    flex?: number;
    shadowOpacity?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    fontWeight?: TextFontWeightTypesEnum;
    shadowOffsetY?: number;
    shadowRadius?: number;
    maxFontSize?: number;
    paddingRight?: number;
    textAlign?: "left" | "center" | "right";
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined;
    textDecorationLine?: textDecorationLineTypes;
}
interface TextStylePropsWithTheme extends TextStyleProps {
    theme: ThemeInterface;
}

type GetStyleForTextPropsParametersNative = GetStyleForTextPropsParameters<TextStylePropsWithTheme>;
declare const getStyleForTextProps: GetStyleForTextPropsParametersNative;

interface TouchableOpacityStylePropsInterface {
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    height?: number | string;
    justifyContent?: "center" | "flex-start" | "flex-end";
    alignItems?: "center" | "flex-start" | "flex-end";
    borderRadius?: number;
    flex?: number;
    width?: number | string;
    maxWidth?: number | string;
    alignSelf?: "center" | "flex-start" | "flex-end";
    flexShrink?: number;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    padding?: number | string;
    borderBottomWidth?: number | string;
    paddingBottom?: number | string;
    backgroundColorFromTheme?: ColorFromTheme;
}
interface TouchableOpacityStylePropsInterfaceWithTheme extends TouchableOpacityStylePropsInterface {
    theme: ThemeInterface;
}

interface GetStyleForTouchableOpacityInterface {
    (props: TouchableOpacityStylePropsInterfaceWithTheme): string;
}
declare const getStyleForTouchableOpacityProps: GetStyleForTouchableOpacityInterface;

interface BoxShadowFuncInterface {
    (fontSize: string): string;
}
declare const boxShadowOne: BoxShadowFuncInterface;

/**
 * Type definition for handling color from theme.
 */
type HandleColorFromThemeInterfaceNative = HandleColorFromThemeParameters<ThemeInterface>;
/**
 * Retrieve a color from the theme based on the given color name, value, and opacity.
 * If the color is not found, it defaults to the primary text color from the theme.
 *
 * @param color - The name or value of the color from the theme.
 * @param opacity - The desired opacity. Defaults to 1 if not provided.
 * @param theme - The theme object containing the color definitions.
 * @returns The RGBA color string.
 */
declare const handleColorFromTheme: HandleColorFromThemeInterfaceNative;

type HandleFontFromThemeParametersForNative = HandleFontFromThemeParameters<ThemeInterface>;
declare const handleFontFromTheme: HandleFontFromThemeParametersForNative;

declare enum ResponsiveByPercentOrValue {
    Percent = "percent",
    Value = "value"
}
interface HandleFontSizePropsInterface {
    (fontSize?: string | number, maxFontSize?: string | number, standardScreenHeight?: string | number, responsiveBy?: ResponsiveByPercentOrValue): string;
}
declare const getResponsiveFontSize: (fontSize: number, maxFontSize: number, screenHeight: number | undefined, responsiveBy: ResponsiveByPercentOrValue) => number;
declare const handleFontSizeProps: HandleFontSizePropsInterface;

interface HandleSnackbarColorInterface {
    (colorType?: undefined | "none" | "success" | "error", theme?: ThemeInterface): string;
}
declare const handleSnackbarColor: HandleSnackbarColorInterface;

declare enum UnitOfMeasurementNative {
    PX = "px"
}
declare enum UnitOfMeasurementWeb {
    PX = "px",
    EM = "em",
    REM = "rem",
    VH = "vh",
    VW = "vw",
    VMIN = "vmin",
    VMAX = "vmax",
    PERCENT = "%"
}
type UnitOfMeasurement = UnitOfMeasurementNative | UnitOfMeasurementWeb;
interface HandleUnitPropsInterface {
    (units?: any, unitOfMeasurement?: UnitOfMeasurement): any;
}
declare const handleUnitProps: HandleUnitPropsInterface;

type GetStyleForGhostPropsParametersWeb = GetStyleForGhostPropsParameters<ThemeInterfaceForHTML>;
declare const getStyleForGhostPropsForWeb: GetStyleForGhostPropsParametersWeb;

interface HtmlImageInterface extends Partial<React.HTMLProps<HTMLImageElement>> {
    theme?: ThemeInterfaceForHTML;
}

interface HtmlImgStyleProps extends Partial<HtmlImageInterface> {
    width?: string | number;
    borderColorFromTheme?: keyof ThemeInterface["colors"];
    backgroundColorFromTheme?: keyof ThemeInterface["colors"];
    height?: string | number;
    borderRadius?: string | number;
    borderWidth?: string | number;
    maxHeight?: string | number;
    borderTopLeftRadius?: number | string;
    borderTopRightRadius?: number | string;
    borderBottomLeftRadius?: number | string;
    borderBottomRightRadius?: number | string;
    maxWidth?: string | number;
}
interface HtmlImgStylePropsWithTheme extends HtmlImgStyleProps {
    theme: ThemeInterfaceForHTML;
}

interface GetStyleForImgPropsInterface {
    (props: HtmlImgStylePropsWithTheme): string;
}
declare const getStyleForImgPropsForWeb: GetStyleForImgPropsInterface;

interface HtmlParagraphInterface extends Partial<React.HTMLProps<HTMLParagraphElement>> {
    fontSize?: number;
    color?: string;
    maxLineHeight?: number;
    marginTop?: number;
    boxShadowX?: number | string;
    boxShadowY?: number | string;
    boxShadowBlurRadius?: number | string;
    paddingLeft?: number;
    paddingRight?: number;
    maxFontSizeMultiplier?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    opacity?: number;
    lineHeight?: number;
    letterSpacing?: number;
    flex?: number;
    width?: number;
    fontWeight?: TextFontWeightTypesEnum;
    paddingTop?: number;
    paddingBottom?: number;
    textDecoration?: textDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    maxFontSize?: number;
    maxWidth?: number;
    theme?: ThemeInterfaceForHTML;
}

interface HtmlParagraphStyleProps extends Partial<HtmlParagraphInterface>, CustomTextStylesFromTheme {
    fontType?: FontTypeEnum;
    fontTypeWeight?: FontWeightType;
    maxFontSizeMultiplier?: number;
    onDark?: boolean;
    fontStyle?: "normal" | "italic";
    numberOfLines?: number;
    paddingLeft?: number;
    highlight?: boolean;
    paddingTop?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    width?: number;
    lineHeight?: number;
    fontSize?: number;
    opacity?: number;
    destructive?: boolean;
    flex?: number;
    shadowOpacity?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    fontWeight?: TextFontWeightTypesEnum;
    shadowOffsetY?: number;
    shadowRadius?: number;
    maxFontSize?: number;
    paddingRight?: number;
    textAlign?: "left" | "center" | "right";
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined;
    textDecorationLine?: textDecorationLineTypes;
}
interface HtmlParagraphStylePropsWithTheme extends HtmlParagraphStyleProps {
    theme: ThemeInterfaceForHTML;
}

type GetStyleForParagraphPropsWeb = GetStyleForTextPropsParameters<HtmlParagraphStylePropsWithTheme>;
declare const getStyleForParagraphProps: GetStyleForParagraphPropsWeb;

type HandleColorFromThemeInterfaceWeb = HandleColorFromThemeParameters<ThemeInterfaceForHTML>;
declare const handleColorFromThemeWeb: HandleColorFromThemeInterfaceWeb;

type HandleFontFromThemeParametersForWeb = HandleFontFromThemeParameters<ThemeInterfaceForHTML>;
declare const handleFontFromThemeWeb: HandleFontFromThemeParametersForWeb;

type DeviceOnTheme = {
    screenWidth: number;
    statusBarHeight: number;
    screenHeight: number;
    isTablet: boolean;
    hasNotch: boolean;
    hasDynamicIsland: boolean;
    platform: PlatformOSType;
};

type ElevationObjType = {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
};

interface GetStyleForTextPropsParameters<Props> {
    (props: Props): string;
}
interface HandleFontFromThemeParameters<T> {
    (fontType: FontType, fontTypeWeight: FontWeightType, theme: T): string;
}
interface HandleColorFromThemeParameters<T> {
    (color: ColorFromTheme, opacity: number, theme: T): string;
}
interface GetStyleForGhostPropsParameters<T> {
    (ghost: boolean, disabled: boolean, theme: T, colorOne: keyof ColorsInterface, colorTwo: keyof ColorsInterface): string;
}
type PaddingOnThemeType = {
    paddingForScrollView: number;
    paddingForScrollViewTwo: number;
};
interface ThemeInterface {
    padding: PaddingOnThemeType;
    handleSnackbarColor: HandleSnackbarColorInterface;
    handleFontSizeProps: HandleFontSizePropsInterface;
    handleUnitProps: HandleUnitPropsInterface;
    getStyleForTouchableOpacityProps: GetStyleForTouchableOpacityInterface;
    getStyleForContainerProps: (props: ContainerStyleInterfaceWithTheme) => string;
    handleGhost: GetStyleForGhostPropsParametersNative;
    getStyleForTextProps: GetStyleForTextPropsParametersNative;
    boxShadowOne: BoxShadowFuncInterface;
    boxShadowTwo?: BoxShadowFuncInterface;
    elevation?: ElevationObjType;
    boxShadowThree?: BoxShadowFuncInterface;
    handleColorFromTheme: HandleColorFromThemeInterfaceNative;
    handleFontFromTheme: HandleFontFromThemeParametersForNative;
    colors: ColorsInterface;
    fonts: FontsInterface;
    darkThemeEnabled?: boolean;
    deviceOnTheme: DeviceOnTheme;
    capFontSize: capFontSizeInterface;
    adjustColor: AdjustColorParams;
}
interface ThemeInterfaceForHTML {
    padding: PaddingOnThemeType;
    handleSnackbarColor: HandleSnackbarColorInterface;
    handleFontSizeProps: HandleFontSizePropsInterface;
    handleUnitProps: HandleUnitPropsInterface;
    getStyleForContainerProps: GetStyleForContainerPropsParameters;
    getStyleForImageProps: GetStyleForImgPropsInterface;
    handleGhost: GetStyleForGhostPropsParametersWeb;
    getStyleForTextProps: GetStyleForParagraphPropsWeb;
    boxShadowOne: BoxShadowFuncInterface;
    boxShadowTwo?: BoxShadowFuncInterface;
    boxShadowThree?: BoxShadowFuncInterface;
    elevation?: ElevationObjType;
    handleColorFromTheme: HandleColorFromThemeInterfaceWeb;
    handleFontFromTheme: HandleFontFromThemeParametersForWeb;
    colors: ColorsInterface;
    fonts: FontsInterface;
    darkThemeEnabled?: boolean;
    deviceOnTheme: DeviceOnTheme;
    capFontSize: capFontSizeInterface;
    adjustColor: AdjustColorParams;
}

interface CustomTextStylesFromTheme {
    textDecorationColorFromTheme?: keyof ColorsInterface;
    colorFromTheme?: keyof ColorsInterface;
    textColorFromTheme?: keyof ColorsInterface;
    fontTypeWeight?: FontWeightType;
    highlight?: boolean;
    onDark?: boolean;
    fontType?: FontTypeEnum;
    hasRead?: boolean;
    focused?: boolean;
    ghost?: boolean;
    destructive?: boolean;
    boxShadowColorFromTheme?: keyof ColorsInterface;
}
interface CustomViewStylePropsInterface {
    borderColorFromTheme?: keyof ColorsInterface;
    backgroundColorFromTheme?: keyof ColorsInterface;
    boxShadowColorFromTheme?: keyof ColorsInterface;
    ghost?: boolean;
    destructive?: boolean;
}
interface CustomButtonTypes {
    submitting?: boolean;
    backgroundColorFromTheme?: keyof ColorsInterface;
}
interface CustomStylePropsInterface extends CustomTextStylesFromTheme, CustomViewStylePropsInterface, CustomButtonTypes {
}
interface StylePropsInterface extends CustomTextStylesFromTheme, CustomViewStylePropsInterface, CustomButtonTypes {
}
interface StylePropsInterfaceWithTheme extends StylePropsInterface {
    theme: ThemeInterfaceForHTML;
    maxWidth?: number | string;
    maxHeight?: number | string;
    height?: number | string;
    marginTop?: number | string;
    width?: number | string;
    flex?: number;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    margin?: number | string;
    borderWidth?: number | string;
    minHeight?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    opacity?: number;
    backgroundColorFromTheme?: keyof ColorsInterface;
}

interface ContainerStyleProps extends ViewStyle, CustomViewStylePropsInterface {
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    opacity?: number;
    flex?: number;
    width?: number;
    paddingTop?: number;
    marginLeft?: number;
    marginRight?: number;
    paddingBottom?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    margin?: number;
    borderWidth?: number;
}
declare enum JustifyContentEnum {
    center = "center",
    flexStart = "flex-start",
    flexEnd = "flex-end",
    spaceBetween = "space-between",
    spaceAround = "space-around",
    spaceEvenly = "space-evenly"
}
declare enum AlignItemsEnum {
    center = "center",
    flexStart = "flex-start",
    flexEnd = "flex-end",
    stretch = "stretch",
    baseline = "baseline"
}
interface ContainerStyleInterfaceWithTheme extends ContainerStyleProps, CustomStylePropsInterface {
    theme: ThemeInterface;
}

declare enum IoniconNames {
    "eye-off-outline" = 0,
    "eye-outline" = 1,
    "pause-circle-outline" = 2,
    "pause-circle-sharp" = 3,
    "pause-outline" = 4,
    "pause-sharp" = 5,
    "lock-closed" = 6,
    "play-forward" = 7,
    "play-forward-circle" = 8,
    "play-forward-circle-outline" = 9,
    "play-forward-circle-sharp" = 10,
    "play-forward-outline" = 11,
    "play-forward-sharp" = 12,
    "play-outline" = 13,
    "play-sharp" = 14,
    "play-skip-back" = 15,
    "play-skip-back-circle" = 16,
    "play-skip-back-circle-outline" = 17,
    "play-skip-back-circle-sharp" = 18,
    "play-skip-back-outline" = 19,
    "play-skip-back-sharp" = 20,
    "play-skip-forward" = 21,
    "play-skip-forward-circle" = 22,
    "play-skip-forward-circle-outline" = 23,
    "play-skip-forward-circle-sharp" = 24,
    "play-skip-forward-outline" = 25,
    "play-skip-forward-sharp" = 26,
    "podium" = 27,
    "podium-outline" = 28,
    "podium-sharp" = 29,
    "play-back" = 30,
    "play-back-circle" = 31,
    "play-back-circle-outline" = 32,
    "play-back-circle-sharp" = 33,
    "play-back-outline" = 34,
    "play-back-sharp" = 35,
    "play-circle-outline" = 36,
    "play-circle-sharp" = 37,
    "link" = 38,
    "search" = 39,
    "image" = 40,
    "text" = 41,
    "alert" = 42,
    "checkbox" = 43,
    "menu" = 44,
    "radio" = 45,
    "timer" = 46,
    "body" = 47,
    "code" = 48,
    "map" = 49,
    "time" = 50,
    "ellipse" = 51,
    "filter" = 52,
    "stop" = 53,
    "close" = 54,
    "book" = 55,
    "pause" = 56,
    "mail" = 57,
    "home" = 58,
    "laptop" = 59,
    "star" = 60,
    "save" = 61,
    "cloud" = 62,
    "add" = 63,
    "eye" = 64,
    "camera" = 65,
    "enter" = 66,
    "heart" = 67,
    "calculator" = 68,
    "download" = 69,
    "play" = 70,
    "calendar" = 71,
    "barcode" = 72,
    "hourglass" = 73,
    "key" = 74,
    "flag" = 75,
    "car" = 76,
    "man" = 77,
    "gift" = 78,
    "wallet" = 79,
    "woman" = 80,
    "earth" = 81,
    "wifi" = 82,
    "sync" = 83,
    "warning" = 84,
    "archive" = 85,
    "arrow-down" = 86,
    "arrow-up" = 87,
    "bookmark" = 88,
    "bookmarks" = 89,
    "briefcase" = 90,
    "brush" = 91,
    "bug" = 92,
    "chevron-down" = 93,
    "chevron-up" = 94,
    "chevron-forward" = 95,
    "clipboard" = 96,
    "cog" = 97,
    "compass" = 98,
    "copy" = 99,
    "crop" = 100,
    "document" = 101,
    "documents" = 102,
    "flash" = 103,
    "flashlight" = 104,
    "flower" = 105,
    "folder" = 106,
    "funnel" = 107,
    "game-controller" = 108,
    "globe" = 109,
    "grid" = 110,
    "help" = 111,
    "images" = 112,
    "language" = 113,
    "layers" = 114,
    "leaf" = 115,
    "list" = 116,
    "location" = 117,
    "lock-open" = 118,
    "log-out" = 119,
    "magnet" = 120,
    "medal" = 121,
    "megaphone" = 122,
    "mic" = 123,
    "moon" = 124,
    "notifications-off" = 125,
    "paper-plane" = 126,
    "pencil" = 127,
    "pie-chart" = 128,
    "pin" = 129,
    "print" = 130,
    "rocket" = 131,
    "share" = 132,
    "shield" = 133,
    "shuffle" = 134,
    "stopwatch" = 135,
    "thermometer" = 136,
    "thumbs-down" = 137,
    "thumbs-up" = 138,
    "trash" = 139,
    "trophy" = 140,
    "tv" = 141,
    "water" = 142,
    "cart" = 143,
    "refresh" = 144,
    "alert-circle" = 145,
    "aperture" = 146,
    "arrow-down-circle" = 147,
    "arrow-up-circle" = 148,
    "caret-back-circle-outline" = 149,
    "caret-back-circle-sharp" = 150,
    "caret-back-outline" = 151,
    "caret-down-circle" = 152,
    "caret-down-circle-outline" = 153,
    "caret-down-circle-sharp" = 154,
    "caret-down-outline" = 155,
    "caret-down-sharp" = 156,
    "caret-forward" = 157,
    "caret-forward-circle" = 158,
    "caret-forward-circle-outline" = 159,
    "caret-forward-circle-sharp" = 160,
    "caret-forward-outline" = 161,
    "caret-forward-sharp" = 162,
    "caret-up-circle" = 163,
    "caret-up-circle-outline" = 164,
    "caret-up-circle-sharp" = 165,
    "caret-up-outline" = 166,
    "caret-up-sharp" = 167,
    "cart-outline" = 168,
    "cart-sharp" = 169,
    "cash" = 170,
    "cash-outline" = 171,
    "cash-sharp" = 172,
    "cellular" = 173,
    "cellular-outline" = 174,
    "cellular-sharp" = 175,
    "chatbox" = 176,
    "chatbox-ellipses" = 177,
    "chatbox-ellipses-outline" = 178,
    "chatbox-ellipses-sharp" = 179,
    "chatbox-outline" = 180,
    "chatbox-sharp" = 181,
    "chatbubble" = 182,
    "chatbubble-ellipses" = 183,
    "chatbubble-ellipses-outline" = 184,
    "chatbubble-ellipses-sharp" = 185,
    "chatbubble-outline" = 186,
    "chatbubble-sharp" = 187,
    "chatbubbles" = 188,
    "chatbubbles-outline" = 189,
    "chatbubbles-sharp" = 190,
    "checkbox-outline" = 191,
    "checkbox-sharp" = 192,
    "checkmark" = 193,
    "checkmark-circle" = 194,
    "checkmark-circle-outline" = 195,
    "checkmark-circle-sharp" = 196,
    "checkmark-done" = 197,
    "checkmark-done-circle" = 198,
    "checkmark-done-circle-outline" = 199,
    "checkmark-done-circle-sharp" = 200,
    "checkmark-done-outline" = 201,
    "checkmark-done-sharp" = 202,
    "checkmark-outline" = 203,
    "checkmark-sharp" = 204,
    "chevron-back" = 205,
    "chevron-back-circle" = 206,
    "chevron-back-circle-outline" = 207,
    "chevron-back-circle-sharp" = 208,
    "chevron-back-outline" = 209,
    "chevron-back-sharp" = 210,
    "chevron-down-circle" = 211,
    "chevron-down-circle-outline" = 212
}
declare enum FontAwesomeIconNames {
    "link" = 0,
    "search" = 1,
    "image" = 2,
    "header" = 3,
    "code" = 4,
    "map" = 5,
    "table" = 6,
    "th" = 7,
    "circle" = 8,
    "filter" = 9,
    "stop" = 10,
    "forward" = 11,
    "retweet" = 12,
    "minus" = 13,
    "plus" = 14,
    "info" = 15,
    "exclamation" = 16,
    "check" = 17,
    "close" = 18,
    "book" = 19,
    "bars" = 20,
    "question" = 21,
    "pause" = 22,
    "home" = 23,
    "laptop" = 24,
    "star" = 25,
    "save" = 26,
    "user" = 27,
    "phone" = 28,
    "paperclip" = 29,
    "inbox" = 30,
    "lock" = 31,
    "qrcode" = 32,
    "tags" = 33,
    "cloud" = 34,
    "eye" = 35,
    "camera" = 36,
    "windows" = 37,
    "heart" = 38,
    "calculator" = 39,
    "chrome" = 40,
    "github" = 41,
    "upload" = 42,
    "download" = 43,
    "unlock" = 44,
    "play" = 45,
    "tag" = 46,
    "calendar" = 47,
    "database" = 48,
    "barcode" = 49,
    "hourglass" = 50,
    "key" = 51,
    "flag" = 52,
    "car" = 53,
    "gift" = 54,
    "bank" = 55,
    "android" = 56,
    "trademark" = 57,
    "copyright" = 58,
    "wifi" = 59,
    "edit" = 60,
    "warning" = 61,
    "dashboard" = 62,
    "google" = 63,
    "amazon" = 64,
    "codepen" = 65,
    "facebook-square" = 66,
    "dropbox" = 67,
    "linkedin-square" = 68,
    "gitlab" = 69,
    "skype" = 70,
    "youtube" = 71,
    "wechat" = 72,
    "twitter" = 73,
    "weibo" = 74,
    "behance" = 75,
    "dribbble" = 76,
    "behance-square" = 77,
    "instagram" = 78,
    "slack" = 79,
    "500px" = 80,
    "adjust" = 81,
    "align-left" = 82,
    "align-right" = 83,
    "archive" = 84,
    "arrow-down" = 85,
    "arrow-left" = 86,
    "arrow-right" = 87,
    "arrow-up" = 88,
    "battery" = 89,
    "bell" = 90,
    "bookmark" = 91,
    "briefcase" = 92,
    "bug" = 93,
    "chevron-down" = 94,
    "chevron-left" = 95,
    "chevron-right" = 96,
    "chevron-up" = 97,
    "clipboard" = 98,
    "cog" = 99,
    "compass" = 100,
    "copy" = 101,
    "creative-commons" = 102,
    "credit-card" = 103,
    "crop" = 104,
    "eraser" = 105,
    "facebook" = 106,
    "flash" = 107,
    "flickr" = 108,
    "folder" = 109,
    "foursquare" = 110,
    "globe" = 111,
    "graduation-cap" = 112,
    "houzz" = 113,
    "language" = 114,
    "lastfm" = 115,
    "leaf" = 116,
    "level-down" = 117,
    "level-up" = 118,
    "linkedin" = 119,
    "list" = 120,
    "magnet" = 121,
    "medium" = 122,
    "mobile" = 123,
    "mouse-pointer" = 124,
    "music" = 125,
    "paper-plane" = 126,
    "paypal" = 127,
    "pencil" = 128,
    "pie-chart" = 129,
    "pinterest" = 130,
    "print" = 131,
    "qq" = 132,
    "renren" = 133,
    "reply" = 134,
    "reply-all" = 135,
    "rocket" = 136,
    "rss" = 137,
    "scissors" = 138,
    "scribd" = 139,
    "share" = 140,
    "shield" = 141,
    "shopping-bag" = 142,
    "shopping-basket" = 143,
    "shopping-cart" = 144,
    "signal" = 145,
    "slideshare" = 146,
    "soundcloud" = 147,
    "spotify" = 148,
    "stumbleupon" = 149,
    "suitcase" = 150,
    "tablet" = 151,
    "thermometer" = 152,
    "thumbs-down" = 153,
    "thumbs-up" = 154,
    "ticket" = 155,
    "trash" = 156,
    "tree" = 157,
    "tripadvisor" = 158,
    "trophy" = 159,
    "tumblr" = 160,
    "tv" = 161,
    "users" = 162,
    "video-camera" = 163,
    "vimeo" = 164,
    "vine" = 165,
    "vk" = 166,
    "xing" = 167,
    "yelp" = 168,
    "comment" = 169,
    "envelope" = 170,
    "external-link" = 171,
    "gear" = 172,
    "navicon" = 173,
    "refresh" = 174,
    "spinner" = 175,
    "undo" = 176,
    "align-center" = 177,
    "align-justify" = 178,
    "anchor" = 179,
    "bar-chart" = 180,
    "bluetooth" = 181,
    "bold" = 182,
    "check-circle" = 183,
    "check-square" = 184,
    "coffee" = 185,
    "columns" = 186,
    "fast-forward" = 187,
    "file" = 188,
    "file-text" = 189,
    "film" = 190,
    "headphones" = 191,
    "italic" = 192,
    "life-buoy" = 193,
    "map-pin" = 194,
    "minus-circle" = 195,
    "minus-square" = 196,
    "pause-circle" = 197,
    "percent" = 198,
    "play-circle" = 199,
    "plus-circle" = 200,
    "plus-square" = 201,
    "repeat" = 202,
    "send" = 203,
    "server" = 204,
    "sliders" = 205,
    "square" = 206,
    "stop-circle" = 207,
    "terminal" = 208,
    "toggle-left" = 209,
    "toggle-right" = 210,
    "trello" = 211,
    "truck" = 212,
    "twitch" = 213,
    "umbrella" = 214,
    "underline" = 215,
    "user-plus" = 216,
    "glass" = 217,
    "envelope-o" = 218,
    "star-o" = 219,
    "th-large" = 220,
    "th-list" = 221,
    "remove" = 222,
    "times" = 223,
    "search-plus" = 224,
    "search-minus" = 225,
    "power-off" = 226,
    "trash-o" = 227,
    "file-o" = 228,
    "clock-o" = 229,
    "road" = 230,
    "arrow-circle-o-down" = 231,
    "arrow-circle-o-up" = 232,
    "play-circle-o" = 233,
    "rotate-right" = 234,
    "list-alt" = 235,
    "volume-off" = 236,
    "volume-down" = 237,
    "volume-up" = 238,
    "font" = 239,
    "text-height" = 240,
    "text-width" = 241,
    "dedent" = 242,
    "outdent" = 243,
    "indent" = 244,
    "photo" = 245,
    "picture-o" = 246,
    "map-marker" = 247,
    "tint" = 248,
    "pencil-square-o" = 249,
    "share-square-o" = 250,
    "check-square-o" = 251,
    "arrows" = 252,
    "step-backward" = 253,
    "fast-backward" = 254,
    "backward" = 255,
    "step-forward" = 256,
    "eject" = 257,
    "times-circle" = 258,
    "question-circle" = 259,
    "info-circle" = 260,
    "crosshairs" = 261,
    "times-circle-o" = 262,
    "check-circle-o" = 263,
    "ban" = 264,
    "mail-forward" = 265,
    "expand" = 266,
    "compress" = 267,
    "asterisk" = 268,
    "exclamation-circle" = 269,
    "fire" = 270,
    "eye-slash" = 271,
    "exclamation-triangle" = 272,
    "plane" = 273,
    "random" = 274,
    "folder-open" = 275,
    "arrows-v" = 276,
    "arrows-h" = 277,
    "bar-chart-o" = 278,
    "twitter-square" = 279,
    "camera-retro" = 280,
    "gears" = 281,
    "cogs" = 282,
    "comments" = 283,
    "thumbs-o-up" = 284,
    "thumbs-o-down" = 285,
    "star-half" = 286,
    "heart-o" = 287,
    "sign-out" = 288,
    "thumb-tack" = 289,
    "sign-in" = 290,
    "github-square" = 291,
    "lemon-o" = 292,
    "square-o" = 293,
    "bookmark-o" = 294,
    "phone-square" = 295,
    "facebook-f" = 296,
    "feed" = 297,
    "hdd-o" = 298,
    "bullhorn" = 299,
    "certificate" = 300,
    "hand-o-right" = 301,
    "hand-o-left" = 302,
    "hand-o-up" = 303,
    "hand-o-down" = 304,
    "arrow-circle-left" = 305,
    "arrow-circle-right" = 306,
    "arrow-circle-up" = 307,
    "arrow-circle-down" = 308,
    "wrench" = 309,
    "tasks" = 310,
    "arrows-alt" = 311,
    "group" = 312,
    "chain" = 313,
    "flask" = 314,
    "cut" = 315,
    "files-o" = 316,
    "floppy-o" = 317,
    "reorder" = 318,
    "list-ul" = 319,
    "list-ol" = 320,
    "strikethrough" = 321,
    "magic" = 322,
    "pinterest-square" = 323,
    "google-plus-square" = 324,
    "google-plus" = 325,
    "money" = 326,
    "caret-down" = 327,
    "caret-up" = 328,
    "caret-left" = 329,
    "caret-right" = 330,
    "unsorted" = 331,
    "sort" = 332,
    "sort-down" = 333,
    "sort-desc" = 334,
    "sort-up" = 335,
    "sort-asc" = 336,
    "rotate-left" = 337,
    "legal" = 338,
    "gavel" = 339,
    "tachometer" = 340,
    "comment-o" = 341,
    "comments-o" = 342,
    "bolt" = 343,
    "sitemap" = 344,
    "paste" = 345,
    "lightbulb-o" = 346,
    "exchange" = 347,
    "cloud-download" = 348,
    "cloud-upload" = 349,
    "user-md" = 350,
    "stethoscope" = 351,
    "bell-o" = 352,
    "cutlery" = 353,
    "file-text-o" = 354,
    "building-o" = 355,
    "hospital-o" = 356,
    "ambulance" = 357,
    "medkit" = 358,
    "fighter-jet" = 359,
    "beer" = 360,
    "h-square" = 361,
    "angle-double-left" = 362,
    "angle-double-right" = 363,
    "angle-double-up" = 364,
    "angle-double-down" = 365,
    "angle-left" = 366,
    "angle-right" = 367,
    "angle-up" = 368,
    "angle-down" = 369,
    "desktop" = 370,
    "mobile-phone" = 371,
    "circle-o" = 372,
    "quote-left" = 373,
    "quote-right" = 374,
    "mail-reply" = 375,
    "github-alt" = 376,
    "folder-o" = 377,
    "folder-open-o" = 378,
    "smile-o" = 379,
    "frown-o" = 380,
    "meh-o" = 381,
    "gamepad" = 382,
    "keyboard-o" = 383,
    "flag-o" = 384,
    "flag-checkered" = 385,
    "mail-reply-all" = 386,
    "star-half-empty" = 387,
    "star-half-full" = 388,
    "star-half-o" = 389,
    "location-arrow" = 390,
    "code-fork" = 391,
    "unlink" = 392,
    "chain-broken" = 393,
    "superscript" = 394,
    "subscript" = 395,
    "puzzle-piece" = 396,
    "microphone" = 397,
    "microphone-slash" = 398,
    "calendar-o" = 399,
    "fire-extinguisher" = 400,
    "maxcdn" = 401,
    "chevron-circle-left" = 402,
    "chevron-circle-right" = 403,
    "chevron-circle-up" = 404,
    "chevron-circle-down" = 405,
    "html5" = 406,
    "css3" = 407,
    "unlock-alt" = 408,
    "bullseye" = 409,
    "ellipsis-h" = 410,
    "ellipsis-v" = 411,
    "rss-square" = 412,
    "minus-square-o" = 413,
    "pencil-square" = 414,
    "external-link-square" = 415,
    "share-square" = 416,
    "toggle-down" = 417,
    "caret-square-o-down" = 418,
    "toggle-up" = 419,
    "caret-square-o-up" = 420,
    "caret-square-o-right" = 421,
    "euro" = 422,
    "eur" = 423,
    "gbp" = 424,
    "dollar" = 425,
    "usd" = 426,
    "rupee" = 427,
    "inr" = 428,
    "cny" = 429,
    "rmb" = 430,
    "yen" = 431,
    "jpy" = 432,
    "ruble" = 433,
    "rouble" = 434,
    "rub" = 435,
    "won" = 436,
    "krw" = 437,
    "bitcoin" = 438,
    "btc" = 439,
    "sort-alpha-asc" = 440,
    "sort-alpha-desc" = 441,
    "sort-amount-asc" = 442,
    "sort-amount-desc" = 443,
    "sort-numeric-asc" = 444,
    "sort-numeric-desc" = 445,
    "youtube-square" = 446,
    "xing-square" = 447,
    "youtube-play" = 448,
    "stack-overflow" = 449,
    "adn" = 450,
    "bitbucket" = 451,
    "bitbucket-square" = 452,
    "tumblr-square" = 453,
    "long-arrow-down" = 454,
    "long-arrow-up" = 455,
    "long-arrow-left" = 456,
    "long-arrow-right" = 457,
    "apple" = 458,
    "linux" = 459,
    "female" = 460,
    "male" = 461,
    "gittip" = 462,
    "gratipay" = 463,
    "sun-o" = 464,
    "moon-o" = 465,
    "pagelines" = 466,
    "stack-exchange" = 467,
    "arrow-circle-o-right" = 468,
    "arrow-circle-o-left" = 469,
    "caret-square-o-left" = 470,
    "dot-circle-o" = 471,
    "wheelchair" = 472,
    "vimeo-square" = 473,
    "turkish-lira" = 474,
    "try" = 475,
    "plus-square-o" = 476,
    "space-shuttle" = 477,
    "envelope-square" = 478,
    "wordpress" = 479,
    "openid" = 480,
    "institution" = 481,
    "university" = 482,
    "mortar-board" = 483,
    "yahoo" = 484,
    "reddit" = 485,
    "reddit-square" = 486,
    "stumbleupon-circle" = 487,
    "delicious" = 488,
    "digg" = 489,
    "pied-piper-pp" = 490,
    "pied-piper-alt" = 491,
    "drupal" = 492,
    "joomla" = 493,
    "fax" = 494,
    "building" = 495,
    "child" = 496,
    "paw" = 497,
    "spoon" = 498,
    "cube" = 499,
    "cubes" = 500,
    "steam" = 501,
    "steam-square" = 502,
    "recycle" = 503,
    "automobile" = 504,
    "cab" = 505,
    "taxi" = 506,
    "deviantart" = 507,
    "file-pdf-o" = 508,
    "file-word-o" = 509,
    "file-excel-o" = 510,
    "file-powerpoint-o" = 511,
    "file-photo-o" = 512,
    "file-picture-o" = 513,
    "file-image-o" = 514,
    "file-zip-o" = 515,
    "file-archive-o" = 516,
    "file-sound-o" = 517,
    "file-audio-o" = 518,
    "file-movie-o" = 519,
    "file-video-o" = 520,
    "file-code-o" = 521,
    "jsfiddle" = 522,
    "life-bouy" = 523,
    "life-saver" = 524,
    "support" = 525,
    "life-ring" = 526,
    "circle-o-notch" = 527,
    "ra" = 528,
    "resistance" = 529,
    "rebel" = 530,
    "ge" = 531,
    "empire" = 532,
    "git-square" = 533,
    "git" = 534,
    "y-combinator-square" = 535,
    "yc-square" = 536,
    "hacker-news" = 537,
    "tencent-weibo" = 538,
    "weixin" = 539,
    "send-o" = 540,
    "paper-plane-o" = 541,
    "history" = 542,
    "circle-thin" = 543,
    "paragraph" = 544,
    "share-alt" = 545,
    "share-alt-square" = 546,
    "bomb" = 547,
    "soccer-ball-o" = 548,
    "futbol-o" = 549,
    "tty" = 550,
    "binoculars" = 551,
    "plug" = 552,
    "newspaper-o" = 553,
    "google-wallet" = 554,
    "cc-visa" = 555,
    "cc-mastercard" = 556,
    "cc-discover" = 557,
    "cc-amex" = 558,
    "cc-paypal" = 559,
    "cc-stripe" = 560,
    "bell-slash" = 561,
    "bell-slash-o" = 562,
    "at" = 563,
    "eyedropper" = 564,
    "paint-brush" = 565,
    "birthday-cake" = 566,
    "area-chart" = 567,
    "line-chart" = 568,
    "lastfm-square" = 569,
    "toggle-off" = 570,
    "toggle-on" = 571,
    "bicycle" = 572,
    "bus" = 573,
    "ioxhost" = 574,
    "angellist" = 575,
    "cc" = 576,
    "shekel" = 577,
    "sheqel" = 578,
    "ils" = 579,
    "meanpath" = 580,
    "buysellads" = 581,
    "connectdevelop" = 582,
    "dashcube" = 583,
    "forumbee" = 584,
    "leanpub" = 585,
    "sellsy" = 586,
    "shirtsinbulk" = 587,
    "simplybuilt" = 588,
    "skyatlas" = 589,
    "cart-plus" = 590,
    "cart-arrow-down" = 591,
    "diamond" = 592,
    "ship" = 593,
    "user-secret" = 594,
    "motorcycle" = 595,
    "street-view" = 596,
    "heartbeat" = 597,
    "venus" = 598,
    "mars" = 599,
    "mercury" = 600,
    "intersex" = 601,
    "transgender" = 602,
    "transgender-alt" = 603,
    "venus-double" = 604,
    "mars-double" = 605,
    "venus-mars" = 606,
    "mars-stroke" = 607,
    "mars-stroke-v" = 608,
    "mars-stroke-h" = 609,
    "neuter" = 610,
    "genderless" = 611,
    "facebook-official" = 612,
    "pinterest-p" = 613,
    "whatsapp" = 614,
    "user-times" = 615,
    "hotel" = 616,
    "bed" = 617,
    "viacoin" = 618,
    "train" = 619,
    "subway" = 620,
    "yc" = 621,
    "y-combinator" = 622,
    "optin-monster" = 623,
    "opencart" = 624,
    "expeditedssl" = 625,
    "battery-4" = 626,
    "battery-full" = 627,
    "battery-3" = 628,
    "battery-three-quarters" = 629,
    "battery-2" = 630,
    "battery-half" = 631,
    "battery-1" = 632,
    "battery-quarter" = 633,
    "battery-0" = 634,
    "battery-empty" = 635,
    "i-cursor" = 636,
    "object-group" = 637,
    "object-ungroup" = 638,
    "sticky-note" = 639,
    "sticky-note-o" = 640,
    "cc-jcb" = 641,
    "cc-diners-club" = 642,
    "clone" = 643,
    "balance-scale" = 644,
    "hourglass-o" = 645,
    "hourglass-1" = 646,
    "hourglass-start" = 647,
    "hourglass-2" = 648,
    "hourglass-half" = 649,
    "hourglass-3" = 650,
    "hourglass-end" = 651,
    "hand-grab-o" = 652,
    "hand-rock-o" = 653,
    "hand-stop-o" = 654,
    "hand-paper-o" = 655,
    "hand-scissors-o" = 656,
    "hand-lizard-o" = 657,
    "hand-spock-o" = 658,
    "hand-pointer-o" = 659,
    "hand-peace-o" = 660,
    "registered" = 661,
    "gg" = 662,
    "gg-circle" = 663,
    "odnoklassniki" = 664,
    "odnoklassniki-square" = 665,
    "get-pocket" = 666,
    "wikipedia-w" = 667,
    "safari" = 668,
    "firefox" = 669,
    "opera" = 670,
    "internet-explorer" = 671,
    "television" = 672,
    "contao" = 673,
    "calendar-plus-o" = 674,
    "calendar-minus-o" = 675,
    "calendar-times-o" = 676,
    "calendar-check-o" = 677,
    "industry" = 678,
    "map-signs" = 679,
    "map-o" = 680,
    "commenting" = 681,
    "commenting-o" = 682,
    "black-tie" = 683,
    "fonticons" = 684,
    "reddit-alien" = 685,
    "edge" = 686,
    "credit-card-alt" = 687,
    "codiepie" = 688,
    "modx" = 689,
    "fort-awesome" = 690,
    "usb" = 691,
    "product-hunt" = 692,
    "mixcloud" = 693,
    "pause-circle-o" = 694,
    "stop-circle-o" = 695,
    "hashtag" = 696,
    "bluetooth-b" = 697,
    "wpbeginner" = 698,
    "wpforms" = 699,
    "envira" = 700,
    "universal-access" = 701,
    "wheelchair-alt" = 702,
    "question-circle-o" = 703,
    "blind" = 704,
    "audio-description" = 705,
    "volume-control-phone" = 706,
    "braille" = 707,
    "assistive-listening-systems" = 708,
    "asl-interpreting" = 709,
    "american-sign-language-interpreting" = 710,
    "deafness" = 711,
    "hard-of-hearing" = 712,
    "deaf" = 713,
    "glide" = 714,
    "glide-g" = 715,
    "signing" = 716,
    "sign-language" = 717,
    "low-vision" = 718,
    "viadeo" = 719,
    "viadeo-square" = 720,
    "snapchat" = 721,
    "snapchat-ghost" = 722,
    "snapchat-square" = 723,
    "pied-piper" = 724,
    "first-order" = 725,
    "yoast" = 726,
    "themeisle" = 727,
    "google-plus-circle" = 728,
    "google-plus-official" = 729,
    "fa" = 730,
    "font-awesome" = 731,
    "handshake-o" = 732,
    "envelope-open" = 733,
    "envelope-open-o" = 734,
    "linode" = 735,
    "address-book" = 736,
    "address-book-o" = 737,
    "vcard" = 738,
    "address-card" = 739,
    "vcard-o" = 740,
    "address-card-o" = 741,
    "user-circle" = 742,
    "user-circle-o" = 743,
    "user-o" = 744,
    "id-badge" = 745,
    "drivers-license" = 746,
    "id-card" = 747,
    "drivers-license-o" = 748,
    "id-card-o" = 749,
    "quora" = 750,
    "free-code-camp" = 751,
    "telegram" = 752,
    "thermometer-4" = 753,
    "thermometer-full" = 754,
    "thermometer-3" = 755,
    "thermometer-three-quarters" = 756,
    "thermometer-2" = 757,
    "thermometer-half" = 758,
    "thermometer-1" = 759,
    "thermometer-quarter" = 760,
    "thermometer-0" = 761,
    "thermometer-empty" = 762,
    "shower" = 763,
    "bathtub" = 764,
    "s15" = 765,
    "bath" = 766,
    "podcast" = 767,
    "window-maximize" = 768,
    "window-minimize" = 769,
    "window-restore" = 770,
    "times-rectangle" = 771,
    "window-close" = 772,
    "times-rectangle-o" = 773,
    "window-close-o" = 774,
    "bandcamp" = 775,
    "grav" = 776,
    "etsy" = 777,
    "imdb" = 778,
    "ravelry" = 779,
    "eercast" = 780,
    "microchip" = 781,
    "snowflake-o" = 782,
    "superpowers" = 783,
    "wpexplorer" = 784,
    "meetup" = 785
}
type IconNames = (typeof MaterialIcons)["name"] | (typeof Ionicons)["name"] | (typeof FontAwesome5)["name"] | (typeof FontAwesome)["name"];

declare enum AutoCapitalizeEnum {
    none = "none",
    words = "words",
    sentences = "sentences",
    characters = "characters"
}
declare enum KeyBoardTypeEnum {
    default = "default",
    numberPad = "number-pad",
    decimalPad = "decimal-pad",
    numeric = "numeric",
    emailAddress = "email-address",
    phonePad = "phone-pad"
}
declare enum DataDetectorEnum {
    none = "none",
    all = "all",
    phoneNumber = "phoneNumber",
    link = "link",
    calendarEvent = "calendarEvent"
}
declare enum TextContentTypeEnum {
    none = "none",
    URL = "URL",
    addressCity = "addressCity",
    addressCityAndState = "addressCityAndState",
    addressState = "addressState",
    countryName = "countryName",
    creditCardNumber = "creditCardNumber",
    emailAddress = "emailAddress",
    familyName = "familyName",
    fullStreetAddress = "fullStreetAddress",
    givenName = "givenName",
    jobTitle = "jobTitle",
    location = "location",
    middleName = "middleName",
    name = "name",
    namePrefix = "namePrefix",
    nameSuffix = "nameSuffix",
    nickname = "nickname",
    organizationName = "organizationName",
    postalCode = "postalCode",
    streetAddressLine1 = "streetAddressLine1",
    streetAddressLine2 = "streetAddressLine2",
    sublocality = "sublocality",
    telephoneNumber = "telephoneNumber",
    username = "username",
    newPassword = "newPassword",
    oneTimeCode = "oneTimeCode"
}
declare enum AutoCompleteTypeEnum {
    "birthdate-day" = 0,
    "birthdate-full" = 1,
    "birthdate-month" = 2,
    "birthdate-year" = 3,
    "cc-csc" = 4,
    "cc-exp" = 5,
    "cc-exp-day" = 6,
    "cc-exp-month" = 7,
    "cc-exp-year" = 8,
    "cc-number" = 9,
    "email" = 10,
    "gender" = 11,
    "name" = 12,
    "name-family" = 13,
    "name-given" = 14,
    "name-middle" = 15,
    "name-middle-initial" = 16,
    "name-prefix" = 17,
    "name-suffix" = 18,
    "password" = 19,
    "password-new" = 20,
    "postal-address" = 21,
    "postal-address-country" = 22,
    "postal-address-extended" = 23,
    "postal-address-extended-postal-code" = 24,
    "postal-address-locality" = 25,
    "postal-address-region" = 26,
    "postal-code" = 27,
    "street-address" = 28,
    "sms-otp" = 29,
    "tel" = 30,
    "tel-country-code" = 31,
    "tel-national" = 32,
    "tel-device" = 33,
    "username" = 34,
    "username-new" = 35,
    "off" = 36
}

interface FormInputGroupProps extends TextInputProps {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element;
    containerStyleProps?: ViewStyle;
    containerStyleFromTheme?: ContainerStyleProps;
    renderBottom?: () => JSX.Element | null;
    dataDetectorTypes?: DataDetectorEnum;
    textContentType?: TextContentTypeEnum;
    keyboardType?: KeyBoardTypeEnum;
    secureTextEntry?: boolean;
    disabled?: boolean;
    errorText?: string | null | boolean | undefined;
    error?: boolean;
    label?: string;
    defaultValue?: string;
    value?: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    underlineColor?: string;
    editable?: boolean;
    autoCapitalize?: AutoCapitalizeEnum | undefined;
    backgroundColor?: string;
    submitting?: boolean;
    onSubmitEditing?: () => void;
}
interface SecureInputProps extends FormInputGroupProps {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
}

declare const FormInputGroupDefaultProps: FormInputGroupProps;
declare const SecureInputDefaultProps: SecureInputProps;

interface ThemeConfig {
    colorPreferences?: Partial<ColorsInterface>;
    fontPreferences?: Partial<FontsInterface>;
    deviceOnTheme?: Partial<DeviceOnTheme>;
}
declare const createThemeForNative: (config: ThemeConfig) => ThemeInterface;
declare const createThemeForWeb: (config: ThemeConfig) => ThemeInterfaceForHTML;

/**
 * Generates a new color palette based on the provided colors and a direction ('light' or 'dark').
 * @param colors - An object implementing the ColorsInterface.
 * @param to - A string, either 'light' or 'dark', to determine the direction to adjust the colors.
 * @returns The adjusted color palette.
 */
declare const generateColorsFrom: (colors: ColorsInterface, to: "light" | "dark") => ColorsInterface;

interface BaseButtonPropsInterface extends ViewStyle, CustomStylePropsInterface {
    onPress?: () => void;
    text?: string;
    renderLeft?: () => React.ReactElement;
    renderRight?: () => React.ReactElement;
    isSelected?: boolean;
}
interface GhostBaseButton extends BaseButtonPropsInterface {
    textColorFromTheme: ColorFromTheme;
    backgroundColorFromTheme: ColorFromTheme;
}

interface BaseHeaderPropsInterface {
    backgroundColorFromTheme?: ColorFromTheme;
    subTitle?: string;
    nestedScreen?: boolean;
    subHeader?: () => JSX.Element;
    onGoBack: () => void;
    title: string;
    applyGoBackToTitle?: boolean;
    titleOnPress?: () => void;
    titleFlex?: number;
    onOpenDrawer?: () => void;
    presentationModal?: boolean;
    titleStyle?: TextStyle;
    containerStyle?: ViewProps;
    contentStyle?: ViewProps;
    headerRightButton?: () => JSX.Element;
    headerLeftButton?: () => JSX.Element;
}

interface BaseImageBackgroundInterface {
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    borderWidth?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    theme?: ThemeInterface;
}

interface BaseThemeInterface {
    theme?: ThemeInterface;
}

interface BaseViewInterface extends ViewProps, BaseThemeInterface, CustomViewStylePropsInterface {
    theme: ThemeInterface;
    padding?: number;
    paddingTop?: number;
    width?: number;
    position?: "absolute" | "relative";
    maxWidth?: number;
    paddingLeft?: number;
    marginBottom?: number;
    opacity?: number;
    paddingRight?: number;
    maxHeight?: number;
    marginLeft?: number;
    marginRight?: number;
    paddingBottom?: number;
    height?: number;
    borderWidth?: number;
    borderColor?: string;
    backgroundOpacity?: number;
}

interface BaseScrollViewInterface extends BaseViewInterface {
}

declare enum ButtonVariantEnum {
    text = "text",
    outlined = "outlined",
    contained = "contained"
}

type ArrayLengthMutationKeys = "splice" | "push" | "pop" | "shift" | "unshift" | number;
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never;
type FixedLengthArray<T extends any[]> = Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>> & {
    [Symbol.iterator]: () => IterableIterator<ArrayItems<T>>;
};

interface BaseDivInterface extends Partial<React.HTMLProps<HTMLDivElement>>, BaseThemeInterface, CustomViewStylePropsInterface {
    padding?: number | string;
    paddingTop?: number | string;
    width?: number | string;
    position?: "absolute" | "relative";
    maxWidth?: number | string;
    paddingLeft?: number | string;
    marginBottom?: number | string;
    opacity?: number | string;
    paddingRight?: number;
    maxHeight?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingBottom?: number | string;
    height?: number | string;
    borderWidth?: number | string;
    borderColor?: string | string;
    backgroundOpacity?: number;
    borderBottomLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    borderTopLeftRadius?: string | number;
    borderTopRightRadius?: string | number;
}

interface HtmlButtonPropsInterface {
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    height?: number | string;
    justifyContent?: "center" | "flex-start" | "flex-end";
    alignItems?: "center" | "flex-start" | "flex-end";
    borderRadius?: number;
    flex?: number;
    width?: number | string;
    maxWidth?: number | string;
    alignSelf?: "center" | "flex-start" | "flex-end";
    flexShrink?: number;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    padding?: number | string;
    borderBottomWidth?: number | string;
    paddingBottom?: number | string;
    backgroundColorFromTheme?: ColorFromTheme;
}
interface HtmlButtonPropsInterfaceWithTheme extends HtmlButtonPropsInterface {
    theme: ThemeInterfaceForHTML;
}

interface HtmlFormInputGroupProps extends Partial<HTMLInputElement> {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element;
    containerStyleProps?: ViewStyle;
    containerStyleFromTheme?: ContainerStyleProps;
    renderBottom?: () => JSX.Element | null;
    dataDetectorTypes?: DataDetectorEnum;
    textContentType?: TextContentTypeEnum;
    keyboardType?: KeyBoardTypeEnum;
    secureTextEntry?: boolean;
    errorText?: string | null | boolean | undefined;
    error?: boolean;
    label?: string;
    onChangeText: (text: string) => void;
    underlineColor?: string;
    editable?: boolean;
    autoCapitalize?: AutoCapitalizeEnum | undefined;
    backgroundColor?: string;
    submitting?: boolean;
    onSubmitEditing?: () => void;
}
interface HtmlSecureInputProps extends HtmlFormInputGroupProps {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
}

interface HtmlSpanInterface extends Partial<React.HTMLProps<HTMLSpanElement>> {
    fontSize?: number;
    color?: string;
    maxLineHeight?: number;
    marginTop?: number;
    boxShadowX?: number | string;
    boxShadowY?: number | string;
    boxShadowBlurRadius?: number | string;
    paddingLeft?: number;
    paddingRight?: number;
    maxFontSizeMultiplier?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    opacity?: number;
    lineHeight?: number;
    letterSpacing?: number;
    flex?: number;
    width?: number;
    fontWeight?: TextFontWeightTypesEnum;
    paddingTop?: number;
    paddingBottom?: number;
    textDecoration?: textDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    maxFontSize?: number;
    maxWidth?: number;
    children?: React.ReactNode;
    theme?: ThemeInterfaceForHTML;
}

interface HtmlSpanStyleProps extends Partial<HtmlSpanInterface>, CustomTextStylesFromTheme {
    fontType?: FontTypeEnum;
    fontTypeWeight?: FontWeightType;
    maxFontSizeMultiplier?: number;
    onDark?: boolean;
    fontStyle?: "normal" | "italic";
    numberOfLines?: number;
    paddingLeft?: number;
    highlight?: boolean;
    paddingTop?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    width?: number;
    lineHeight?: number;
    fontSize?: number;
    opacity?: number;
    destructive?: boolean;
    flex?: number;
    shadowOpacity?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    fontWeight?: TextFontWeightTypesEnum;
    shadowOffsetY?: number;
    shadowRadius?: number;
    maxFontSize?: number;
    paddingRight?: number;
    textAlign?: "left" | "center" | "right";
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined;
    textDecorationLine?: textDecorationLineTypes;
}
interface HtmlSpanStylePropsWithTheme extends HtmlSpanStyleProps {
    theme: ThemeInterfaceForHTML;
}

interface OnVisibilityChangeProps {
    onVisibilityChange: (visible: boolean) => void;
    parentVisible?: boolean;
    children?: React.ReactNode;
    loading?: boolean;
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
    error?: boolean;
}

interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: ColorFromTheme;
}
declare const defaultSVGProps: {
    width: string;
    height: string;
    viewBox: string;
};

declare function calculatePercentageByPartAndWhole(partial: number, whole: number): number;

declare function dashToCamelCase(dashName: string): string;

interface ErrorMessages {
    [key: string]: any;
    message?: string[];
}
declare const getErrorMessageByField: (fieldsToCheck: string | string[], errors: ErrorMessages) => string | undefined;

declare const getErrorMessageFromErrorMessages: (field: any, errors: {
    [key: string]: any;
}) => string | null;

declare function getFirstWordCapitalized(str: string): string;

declare const STATUSBAR_HEIGHT: number;
declare const windowHeight: number;
declare const windowWidth: number;
declare const screenHeight: number;
declare const screenWidth: number;
declare const paddingForScrollView = 15;
declare const paddingForScrollViewTwo = 5;
declare const paddingObj: PaddingOnThemeType;

declare function extractKeysAndValuesFromColorsInterface(colors: ColorsInterface): [string[], string[]];

declare const getLineHeight: (fontSize?: number, amountToIncrease?: number) => number;

declare enum NameOrValue {
    Name = "name",
    Value = "value"
}
declare const isColorNameOrValue: (nameOrValue: ColorNameOrValueFromTheme, theme: ThemeInterface) => NameOrValue | false;

declare function isValidHex(color: string): boolean;

declare function RGBAToHexA(rgba: string, forceRemoveAlpha?: boolean): string;

declare const getStyleFromProps: (props: StylePropsInterfaceWithTheme) => string;

declare function isJson(str: string): boolean;

declare function removeKeysWithSubstrings(obj: {
    [key: string]: any;
}, substrings: string[]): {
    [key: string]: any;
};

declare function sliceIntoChunks(arr: any[], chunkSize: number): any[];

declare function videoTimeStampToSeconds(str: string): number;

export { type AdjustColorParams, AlignItemsEnum, AutoCapitalizeEnum, AutoCompleteTypeEnum, type BackgroundColors, type BaseButtonPropsInterface, type BaseDivInterface, type BaseHeaderPropsInterface, type BaseImageBackgroundInterface, type BaseScrollViewInterface, type BaseThemeInterface, type BaseViewInterface, type BoxShadowFuncInterface, type BrandColors, ButtonVariantEnum, type ColorFromTheme, type ColorInfoItem, type ColorNameOrValueFromTheme, type ColorsInterface, type ContainerStyleInterfaceWithTheme, type ContainerStyleProps, type CustomButtonTypes, type CustomStylePropsInterface, type CustomTextStylesFromTheme, type CustomViewStylePropsInterface, DataDetectorEnum, type DeviceOnTheme, type ElementColors, type ElevationObjType, type ErrorMessages, type FeedbackColors, type FixedLengthArray, FontAwesomeIconNames, type FontType, FontTypeEnum, type FontTypeWeight, FontTypeWeightEnum, type FontWeightType, type FontsInterface, FormInputGroupDefaultProps, type FormInputGroupProps, type GetStyleForContainerPropsParameters, type GetStyleForGhostPropsParameters, type GetStyleForGhostPropsParametersNative, type GetStyleForGhostPropsParametersWeb, type GetStyleForImgPropsInterface, type GetStyleForParagraphPropsWeb, type GetStyleForTextPropsParameters, type GetStyleForTextPropsParametersNative, type GetStyleForTouchableOpacityInterface, type GhostBaseButton, type GhostTextInterface, type GrayScaleColors, type HandleColorFromThemeInterfaceNative, type HandleColorFromThemeInterfaceWeb, type HandleColorFromThemeParameters, type HandleFontFromThemeParameters, type HandleFontFromThemeParametersForNative, type HandleFontFromThemeParametersForWeb, type HandleFontSizePropsInterface, type HandleSnackbarColorInterface, type HandleUnitPropsInterface, type HtmlButtonPropsInterface, type HtmlButtonPropsInterfaceWithTheme, type HtmlFormInputGroupProps, type HtmlImageInterface, type HtmlImgStyleProps, type HtmlImgStylePropsWithTheme, type HtmlParagraphInterface, type HtmlParagraphStyleProps, type HtmlParagraphStylePropsWithTheme, type HtmlSecureInputProps, type HtmlSpanInterface, type HtmlSpanStyleProps, type HtmlSpanStylePropsWithTheme, type IconNames, type InteractionColors, IoniconNames, JustifyContentEnum, KeyBoardTypeEnum, NameOrValue, type OnVisibilityChangeProps, type PaddingOnThemeType, RGBAToHexA, ResponsiveByPercentOrValue, STATUSBAR_HEIGHT, type SVGPropsInterface, SecureInputDefaultProps, type SecureInputProps, type StylePropsInterface, type StylePropsInterfaceWithTheme, TextContentTypeEnum, TextFontWeightTypes, TextFontWeightTypesEnum, type TextInterface, type TextStyleProps, type TextStylePropsWithTheme, TextTransformTypes, type ThemeConfig, type ThemeInterface, type ThemeInterfaceForHTML, type TouchableOpacityStylePropsInterface, type TouchableOpacityStylePropsInterfaceWithTheme, UnitOfMeasurementNative, UnitOfMeasurementWeb, type ValueOfColor, boxShadowOne, calculatePercentageByPartAndWhole, capFontSize, type capFontSizeInterface, createThemeForNative, createThemeForWeb, darkColors, dashToCamelCase, defaultDarkBackgroundColors, defaultDarkBrandColors, defaultDarkElementColors, defaultDarkFeedbackColors, defaultDarkGrayScaleColors, defaultDarkInteractionColors, defaultFonts, defaultLightBackgroundColors, defaultLightBrandColors, defaultLightElementColors, defaultLightFeedbackColors, defaultLightGrayScaleColors, defaultLightInteractionColors, defaultSVGProps, extractKeysAndValuesFromColorsInterface, generateColorsFrom, getErrorMessageByField, getErrorMessageFromErrorMessages, getFirstWordCapitalized, getLineHeight, getResponsiveFontSize, getStyleForContainerProps, getStyleForGhostProps, getStyleForGhostPropsForWeb, getStyleForImgPropsForWeb, getStyleForParagraphProps, getStyleForTextProps, getStyleForTouchableOpacityProps, getStyleFromProps, handleColorFromTheme, handleColorFromThemeWeb, handleFontFromTheme, handleFontFromThemeWeb, handleFontSizeProps, handleSnackbarColor, handleUnitProps, isColorNameOrValue, isJson, isValidHex, lightColors, paddingForScrollView, paddingForScrollViewTwo, paddingObj, removeKeysWithSubstrings, screenHeight, screenWidth, sliceIntoChunks, textDecorationLineTypes, videoTimeStampToSeconds, windowHeight, windowWidth };
