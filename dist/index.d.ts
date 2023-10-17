/// <reference types="react" />
import { TextProps, PlatformOSType, ViewStyle, TextInputProps, TextStyle, ViewProps } from 'react-native';
import React$1 from 'react';

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
interface ElementColors {
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

interface AdjustColorParams {
    (colorValue: string, alphaValue: number, mode: "light" | "dark", isSolid?: boolean): string;
}
declare const cssColorNames: string[];
declare const isConsoleAvailable: () => false | {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const log: (message: string) => void;
declare const adjustColor: AdjustColorParams;

type GetStyleForContainerPropsParametersNative = GetStyleForContainerParameters<ContainerStyleInterfaceWithTheme>;
declare const getStyleForContainerProps: GetStyleForContainerPropsParametersNative;

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
declare const textFontWeightTypes: (TextFontWeightTypesEnum | undefined)[];
type TextFontWeightType = typeof textFontWeightTypes;

declare enum TextTransformTypes {
    none = "none",
    uppercase = "uppercase",
    lowercase = "lowercase"
}
declare enum TextDecorationLineTypes {
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
    textDecoration?: TextDecorationLineTypes;
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
    textColorFromTheme: ColorNameOrValueFromTheme;
    backgroundColorFromTheme: ColorNameOrValueFromTheme;
    theme: ThemeInterface;
}

interface TextStyleProps extends Partial<TextInterface> {
    fontType?: FontTypeEnum;
    fontTypeWeight?: FontWeightType | FontTypeWeightEnum;
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
    textDecorationLine?: TextDecorationLineTypes;
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

type HandleFontFromThemeParametersForNative = HandleFontFromThemeParameters<ThemeInterface>;
declare const handleFontFromTheme: HandleFontFromThemeParametersForNative;

interface CapFontSizeInterface {
    (fontSize: string | number, maxFontSize: number): string | number;
}
declare const capFontSize: CapFontSizeInterface;

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

interface HtmlParagraphInterface extends Partial<React$1.HTMLProps<HTMLParagraphElement>> {
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
    textDecoration?: TextDecorationLineTypes;
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
    textDecorationLine?: TextDecorationLineTypes;
}
interface HtmlParagraphStylePropsWithTheme extends HtmlParagraphStyleProps {
    theme: ThemeInterfaceForHTML;
}

type GetStyleForParagraphPropsWeb = GetStyleForTextPropsParameters<HtmlParagraphStylePropsWithTheme>;
declare const getStyleForParagraphProps: GetStyleForParagraphPropsWeb;

type GetStyleForContainerPropsParametersWeb = GetStyleForContainerParameters<StylePropsInterfaceWithTheme>;
declare const getStyleFromProps: GetStyleForContainerPropsParametersWeb;

type HandleColorFromThemeInterfaceWeb = HandleColorFromThemeParameters<ThemeInterfaceForHTML>;
/**
 * Retrieve a color from the theme based on the given color name, value, and opacity.
 * If the color is not found, it defaults to the primary text color from the theme.
 *
 * @param color - The name or value of the color from the theme.
 * @param opacity - The desired opacity. Defaults to 1 if not provided.
 * @param theme - The theme object containing the color definitions.
 * @returns The RGBA color string.
 */
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
    (color: ColorNameOrValueFromTheme, opacity: number, theme: T): string;
}
interface GetStyleForContainerParameters<T> {
    (props: T): string;
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
    getStyleForContainerProps: GetStyleForContainerPropsParametersNative;
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
    capFontSize: CapFontSizeInterface;
    adjustColor: AdjustColorParams;
}
interface ThemeInterfaceForHTML {
    padding: PaddingOnThemeType;
    handleSnackbarColor: HandleSnackbarColorInterface;
    handleFontSizeProps: HandleFontSizePropsInterface;
    handleUnitProps: HandleUnitPropsInterface;
    getStyleForContainerProps: GetStyleForContainerPropsParametersWeb;
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
    capFontSize: CapFontSizeInterface;
    adjustColor: AdjustColorParams;
}

interface CustomTextStylesFromTheme {
    textDecorationColorFromTheme?: ColorNameOrValueFromTheme;
    colorFromTheme?: ColorNameOrValueFromTheme;
    textColorFromTheme?: ColorNameOrValueFromTheme;
    fontTypeWeight?: FontWeightType;
    highlight?: boolean;
    onDark?: boolean;
    fontType?: FontTypeEnum;
    hasRead?: boolean;
    focused?: boolean;
    ghost?: boolean;
    destructive?: boolean;
    boxShadowColorFromTheme?: ColorNameOrValueFromTheme;
}
interface CustomViewStylePropsInterface {
    borderColorFromTheme?: ColorNameOrValueFromTheme;
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
    boxShadowColorFromTheme?: ColorNameOrValueFromTheme;
    ghost?: boolean;
    destructive?: boolean;
}
interface CustomButtonTypes {
    submitting?: boolean;
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
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
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
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

type NameOfFontAwesomeIcon = "link" | "search" | "image" | "header" | "code" | "map" | "table" | "th" | "circle" | "filter" | "stop" | "forward" | "retweet" | "minus" | "plus" | "info" | "exclamation" | "check" | "close" | "book" | "bars" | "question" | "pause" | "home" | "laptop" | "star" | "save" | "user" | "phone" | "paperclip" | "inbox" | "lock" | "qrcode" | "tags" | "cloud" | "eye" | "camera" | "windows" | "heart" | "calculator" | "chrome" | "github" | "upload" | "download" | "unlock" | "play" | "tag" | "calendar" | "database" | "barcode" | "hourglass" | "key" | "flag" | "car" | "gift" | "bank" | "android" | "trademark" | "copyright" | "wifi" | "edit" | "warning" | "dashboard" | "google" | "amazon" | "codepen" | "facebook-square" | "dropbox" | "linkedin-square" | "gitlab" | "skype" | "youtube" | "wechat" | "twitter" | "weibo" | "behance" | "dribbble" | "behance-square" | "instagram" | "slack" | "500px" | "adjust" | "align-left" | "align-right" | "archive" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "battery" | "bell" | "bookmark" | "briefcase" | "bug" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clipboard" | "cog" | "compass" | "copy" | "creative-commons" | "credit-card" | "crop" | "eraser" | "facebook" | "flash" | "flickr" | "folder" | "foursquare" | "globe" | "graduation-cap" | "houzz" | "language" | "lastfm" | "leaf" | "level-down" | "level-up" | "linkedin" | "list" | "magnet" | "medium" | "mobile" | "mouse-pointer" | "music" | "paper-plane" | "paypal" | "pencil" | "pie-chart" | "pinterest" | "print" | "qq" | "renren" | "reply" | "reply-all" | "rocket" | "rss" | "scissors" | "scribd" | "share" | "shield" | "shopping-bag" | "shopping-basket" | "shopping-cart" | "signal" | "slideshare" | "soundcloud" | "spotify" | "stumbleupon" | "suitcase" | "tablet" | "thermometer" | "thumbs-down" | "thumbs-up" | "ticket" | "trash" | "tree" | "tripadvisor" | "trophy" | "tumblr" | "tv" | "users" | "video-camera" | "vimeo" | "vine" | "vk" | "xing" | "yelp" | "comment" | "envelope" | "external-link" | "gear" | "navicon" | "refresh" | "spinner" | "undo" | "align-center" | "align-justify" | "anchor" | "bar-chart" | "bluetooth" | "bold" | "check-circle" | "check-square" | "coffee" | "columns" | "fast-forward" | "file" | "file-text" | "film" | "headphones" | "italic" | "life-buoy" | "map-pin" | "minus-circle" | "minus-square" | "pause-circle" | "percent" | "play-circle" | "plus-circle" | "plus-square" | "repeat" | "send" | "server" | "sliders" | "square" | "stop-circle" | "terminal" | "toggle-left" | "toggle-right" | "trello" | "truck" | "twitch" | "umbrella" | "underline" | "user-plus" | "glass" | "envelope-o" | "star-o" | "th-large" | "th-list" | "remove" | "times" | "search-plus" | "search-minus" | "power-off" | "trash-o" | "file-o" | "clock-o" | "road" | "arrow-circle-o-down" | "arrow-circle-o-up" | "play-circle-o" | "rotate-right" | "list-alt" | "volume-off" | "volume-down" | "volume-up" | "font" | "text-height" | "text-width" | "dedent" | "outdent" | "indent" | "photo" | "picture-o" | "map-marker" | "tint" | "pencil-square-o" | "share-square-o" | "check-square-o" | "arrows" | "step-backward" | "fast-backward" | "backward" | "step-forward" | "eject" | "times-circle" | "question-circle" | "info-circle" | "crosshairs" | "times-circle-o" | "check-circle-o" | "ban" | "mail-forward" | "expand" | "compress" | "asterisk" | "exclamation-circle" | "fire" | "eye-slash" | "exclamation-triangle" | "plane" | "random" | "folder-open" | "arrows-v" | "arrows-h" | "bar-chart-o" | "twitter-square" | "camera-retro" | "gears" | "cogs" | "comments" | "thumbs-o-up" | "thumbs-o-down" | "star-half" | "heart-o" | "sign-out" | "thumb-tack" | "sign-in" | "github-square" | "lemon-o" | "square-o" | "bookmark-o" | "phone-square" | "facebook-f" | "feed" | "hdd-o" | "bullhorn" | "certificate" | "hand-o-right" | "hand-o-left" | "hand-o-up" | "hand-o-down" | "arrow-circle-left" | "arrow-circle-right" | "arrow-circle-up" | "arrow-circle-down" | "wrench" | "tasks" | "arrows-alt" | "group" | "chain" | "flask" | "cut" | "files-o" | "floppy-o" | "reorder" | "list-ul" | "list-ol" | "strikethrough" | "magic" | "pinterest-square" | "google-plus-square" | "google-plus" | "money" | "caret-down" | "caret-up" | "caret-left" | "caret-right" | "unsorted" | "sort" | "sort-down" | "sort-desc" | "sort-up" | "sort-asc" | "rotate-left" | "legal" | "gavel" | "tachometer" | "comment-o" | "comments-o" | "bolt" | "sitemap" | "paste" | "lightbulb-o" | "exchange" | "cloud-download" | "cloud-upload" | "user-md" | "stethoscope" | "bell-o" | "cutlery" | "file-text-o" | "building-o" | "hospital-o" | "ambulance" | "medkit" | "fighter-jet" | "beer" | "h-square" | "angle-double-left" | "angle-double-right" | "angle-double-up" | "angle-double-down" | "angle-left" | "angle-right" | "angle-up" | "angle-down" | "desktop" | "mobile-phone" | "circle-o" | "quote-left" | "quote-right" | "mail-reply" | "github-alt" | "folder-o" | "folder-open-o" | "smile-o" | "frown-o" | "meh-o" | "gamepad" | "keyboard-o" | "flag-o" | "flag-checkered" | "mail-reply-all" | "star-half-empty" | "star-half-full" | "star-half-o" | "location-arrow" | "code-fork" | "unlink" | "chain-broken" | "superscript" | "subscript" | "puzzle-piece" | "microphone" | "microphone-slash" | "calendar-o" | "fire-extinguisher" | "maxcdn" | "chevron-circle-left" | "chevron-circle-right" | "chevron-circle-up" | "chevron-circle-down" | "html5" | "css3" | "unlock-alt" | "bullseye" | "ellipsis-h" | "ellipsis-v" | "rss-square" | "minus-square-o" | "pencil-square" | "external-link-square" | "share-square" | "toggle-down" | "caret-square-o-down" | "toggle-up" | "caret-square-o-up" | "caret-square-o-right" | "euro" | "eur" | "gbp" | "dollar" | "usd" | "rupee" | "inr" | "cny" | "rmb" | "yen" | "jpy" | "ruble" | "rouble" | "rub" | "won" | "krw" | "bitcoin" | "btc" | "sort-alpha-asc" | "sort-alpha-desc" | "sort-amount-asc" | "sort-amount-desc" | "sort-numeric-asc" | "sort-numeric-desc" | "youtube-square" | "xing-square" | "youtube-play" | "stack-overflow" | "adn" | "bitbucket" | "bitbucket-square" | "tumblr-square" | "long-arrow-down" | "long-arrow-up" | "long-arrow-left" | "long-arrow-right" | "apple" | "linux" | "female" | "male" | "gittip" | "gratipay" | "sun-o" | "moon-o" | "pagelines" | "stack-exchange" | "arrow-circle-o-right" | "arrow-circle-o-left" | "caret-square-o-left" | "dot-circle-o" | "wheelchair" | "vimeo-square" | "turkish-lira" | "try" | "plus-square-o" | "space-shuttle" | "envelope-square" | "wordpress" | "openid" | "institution" | "university" | "mortar-board" | "yahoo" | "reddit" | "reddit-square" | "stumbleupon-circle" | "delicious" | "digg" | "pied-piper-pp" | "pied-piper-alt" | "drupal" | "joomla" | "fax" | "building" | "child" | "paw" | "spoon" | "cube" | "cubes" | "steam" | "steam-square" | "recycle" | "automobile" | "cab" | "taxi" | "deviantart" | "file-pdf-o" | "file-word-o" | "file-excel-o" | "file-powerpoint-o" | "file-photo-o" | "file-picture-o" | "file-image-o" | "file-zip-o" | "file-archive-o" | "file-sound-o" | "file-audio-o" | "file-movie-o" | "file-video-o" | "file-code-o" | "jsfiddle" | "life-bouy" | "life-saver" | "support" | "life-ring" | "circle-o-notch" | "ra" | "resistance" | "rebel" | "ge" | "empire" | "git-square" | "git" | "y-combinator-square" | "yc-square" | "hacker-news" | "tencent-weibo" | "weixin" | "send-o" | "paper-plane-o" | "history" | "circle-thin" | "paragraph" | "share-alt" | "share-alt-square" | "bomb" | "soccer-ball-o" | "futbol-o" | "tty" | "binoculars" | "plug" | "newspaper-o" | "google-wallet" | "cc-visa" | "cc-mastercard" | "cc-discover" | "cc-amex" | "cc-paypal" | "cc-stripe" | "bell-slash" | "bell-slash-o" | "at" | "eyedropper" | "paint-brush" | "birthday-cake" | "area-chart" | "line-chart" | "lastfm-square" | "toggle-off" | "toggle-on" | "bicycle" | "bus" | "ioxhost" | "angellist" | "cc" | "shekel" | "sheqel" | "ils" | "meanpath" | "buysellads" | "connectdevelop" | "dashcube" | "forumbee" | "leanpub" | "sellsy" | "shirtsinbulk" | "simplybuilt" | "skyatlas" | "cart-plus" | "cart-arrow-down" | "diamond" | "ship" | "user-secret" | "motorcycle" | "street-view" | "heartbeat" | "venus" | "mars" | "mercury" | "intersex" | "transgender" | "transgender-alt" | "venus-double" | "mars-double" | "venus-mars" | "mars-stroke" | "mars-stroke-v" | "mars-stroke-h" | "neuter" | "genderless" | "facebook-official" | "pinterest-p" | "whatsapp" | "user-times" | "hotel" | "bed" | "viacoin" | "train" | "subway" | "yc" | "y-combinator" | "optin-monster" | "opencart" | "expeditedssl" | "battery-4" | "battery-full" | "battery-3" | "battery-three-quarters" | "battery-2" | "battery-half" | "battery-1" | "battery-quarter" | "battery-0" | "battery-empty" | "i-cursor" | "object-group" | "object-ungroup" | "sticky-note" | "sticky-note-o" | "cc-jcb" | "cc-diners-club" | "clone" | "balance-scale" | "hourglass-o" | "hourglass-1" | "hourglass-start" | "hourglass-2" | "hourglass-half" | "hourglass-3" | "hourglass-end" | "hand-grab-o" | "hand-rock-o" | "hand-stop-o" | "hand-paper-o" | "hand-scissors-o" | "hand-lizard-o" | "hand-spock-o" | "hand-pointer-o" | "hand-peace-o" | "registered" | "gg" | "gg-circle" | "odnoklassniki" | "odnoklassniki-square" | "get-pocket" | "wikipedia-w" | "safari" | "firefox" | "opera" | "internet-explorer" | "television" | "contao" | "calendar-plus-o" | "calendar-minus-o" | "calendar-times-o" | "calendar-check-o" | "industry" | "map-signs" | "map-o" | "commenting" | "commenting-o" | "black-tie" | "fonticons" | "reddit-alien" | "edge" | "credit-card-alt" | "codiepie" | "modx" | "fort-awesome" | "usb" | "product-hunt" | "mixcloud" | "pause-circle-o" | "stop-circle-o" | "hashtag" | "bluetooth-b" | "wpbeginner" | "wpforms" | "envira" | "universal-access" | "wheelchair-alt" | "question-circle-o" | "blind" | "audio-description" | "volume-control-phone" | "braille" | "assistive-listening-systems" | "asl-interpreting" | "american-sign-language-interpreting" | "deafness" | "hard-of-hearing" | "deaf" | "glide" | "glide-g" | "signing" | "sign-language" | "low-vision" | "viadeo" | "viadeo-square" | "snapchat" | "snapchat-ghost" | "snapchat-square" | "pied-piper" | "first-order" | "yoast" | "themeisle" | "google-plus-circle" | "google-plus-official" | "fa" | "font-awesome" | "handshake-o" | "envelope-open" | "envelope-open-o" | "linode" | "address-book" | "address-book-o" | "vcard" | "address-card" | "vcard-o" | "address-card-o" | "user-circle" | "user-circle-o" | "user-o" | "id-badge" | "drivers-license" | "id-card" | "drivers-license-o" | "id-card-o" | "quora" | "free-code-camp" | "telegram" | "thermometer-4" | "thermometer-full" | "thermometer-3" | "thermometer-three-quarters" | "thermometer-2" | "thermometer-half" | "thermometer-1" | "thermometer-quarter" | "thermometer-0" | "thermometer-empty" | "shower" | "bathtub" | "s15" | "bath" | "podcast" | "window-maximize" | "window-minimize" | "window-restore" | "times-rectangle" | "window-close" | "times-rectangle-o" | "window-close-o" | "bandcamp" | "grav" | "etsy" | "imdb" | "ravelry" | "eercast" | "microchip" | "snowflake-o" | "superpowers" | "wpexplorer" | "meetup";

type NameOfIoniconIcon = "link" | "search" | "image" | "text" | "alert" | "checkbox" | "menu" | "radio" | "timer" | "body" | "code" | "map" | "time" | "ellipse" | "filter" | "stop" | "close" | "book" | "pause" | "mail" | "home" | "laptop" | "star" | "save" | "cloud" | "eye" | "camera" | "enter" | "heart" | "calculator" | "download" | "play" | "calendar" | "barcode" | "hourglass" | "key" | "flag" | "car" | "man" | "gift" | "wallet" | "woman" | "earth" | "wifi" | "sync" | "warning" | "archive" | "arrow-down" | "arrow-up" | "bookmark" | "bookmarks" | "briefcase" | "brush" | "bug" | "chevron-down" | "chevron-up" | "clipboard" | "cog" | "compass" | "copy" | "crop" | "document" | "documents" | "flash" | "flashlight" | "flower" | "folder" | "funnel" | "game-controller" | "globe" | "grid" | "help" | "images" | "language" | "layers" | "leaf" | "list" | "location" | "lock-open" | "log-out" | "magnet" | "medal" | "megaphone" | "mic" | "moon" | "notifications-off" | "paper-plane" | "pencil" | "pie-chart" | "pin" | "print" | "rocket" | "share" | "shield" | "shuffle" | "stopwatch" | "thermometer" | "thumbs-down" | "thumbs-up" | "trash" | "trophy" | "tv" | "water" | "cart" | "refresh" | "alert-circle" | "aperture" | "arrow-down-circle" | "arrow-up-circle" | "bar-chart" | "battery-charging" | "bluetooth" | "disc" | "eye-off" | "film" | "git-branch" | "git-commit" | "git-merge" | "git-pull-request" | "help-circle" | "log-in" | "mic-off" | "move" | "pause-circle" | "play-circle" | "power" | "repeat" | "send" | "server" | "settings" | "square" | "stop-circle" | "terminal" | "trending-down" | "trending-up" | "triangle" | "umbrella" | "watch" | "remove" | "volume-off" | "expand" | "folder-open" | "star-half" | "flask" | "cut" | "caret-down" | "caret-up" | "cloud-download" | "cloud-upload" | "medkit" | "beer" | "desktop" | "female" | "male" | "paw" | "cube" | "at" | "bicycle" | "bus" | "transgender" | "bed" | "train" | "subway" | "battery-full" | "battery-half" | "newspaper" | "backspace" | "egg" | "glasses" | "hammer" | "headset" | "ice-cream" | "receipt" | "ribbon" | "school" | "shapes" | "skull" | "volume-mute" | "navigate" | "person" | "cloudy" | "snow" | "bandage" | "pulse" | "contrast" | "male-female" | "tablet-landscape" | "tablet-portrait" | "add" | "add-circle" | "add-circle-outline" | "add-circle-sharp" | "add-outline" | "add-sharp" | "airplane" | "airplane-outline" | "airplane-sharp" | "alarm" | "alarm-outline" | "alarm-sharp" | "albums" | "albums-outline" | "albums-sharp" | "alert-circle-outline" | "alert-circle-sharp" | "alert-outline" | "alert-sharp" | "american-football" | "american-football-outline" | "american-football-sharp" | "analytics" | "analytics-outline" | "analytics-sharp" | "aperture-outline" | "aperture-sharp" | "apps" | "apps-outline" | "apps-sharp" | "archive-outline" | "archive-sharp" | "arrow-back" | "arrow-back-circle" | "arrow-back-circle-outline" | "arrow-back-circle-sharp" | "arrow-back-outline" | "arrow-back-sharp" | "arrow-down-circle-outline" | "arrow-down-circle-sharp" | "arrow-down-outline" | "arrow-down-sharp" | "arrow-forward" | "arrow-forward-circle" | "arrow-forward-circle-outline" | "arrow-forward-circle-sharp" | "arrow-forward-outline" | "arrow-forward-sharp" | "arrow-redo" | "arrow-redo-circle" | "arrow-redo-circle-outline" | "arrow-redo-circle-sharp" | "arrow-redo-outline" | "arrow-redo-sharp" | "arrow-undo" | "arrow-undo-circle" | "arrow-undo-circle-outline" | "arrow-undo-circle-sharp" | "arrow-undo-outline" | "arrow-undo-sharp" | "arrow-up-circle-outline" | "arrow-up-circle-sharp" | "arrow-up-outline" | "arrow-up-sharp" | "at-circle" | "at-circle-outline" | "at-circle-sharp" | "at-outline" | "at-sharp" | "attach" | "attach-outline" | "attach-sharp" | "backspace-outline" | "backspace-sharp" | "bandage-outline" | "bandage-sharp" | "bar-chart-outline" | "bar-chart-sharp" | "barbell" | "barbell-outline" | "barbell-sharp" | "barcode-outline" | "barcode-sharp" | "baseball" | "baseball-outline" | "baseball-sharp" | "basket" | "basket-outline" | "basket-sharp" | "basketball" | "basketball-outline" | "basketball-sharp" | "battery-charging-outline" | "battery-charging-sharp" | "battery-dead" | "battery-dead-outline" | "battery-dead-sharp" | "battery-full-outline" | "battery-full-sharp" | "battery-half-outline" | "battery-half-sharp" | "beaker" | "beaker-outline" | "beaker-sharp" | "bed-outline" | "bed-sharp" | "beer-outline" | "beer-sharp" | "bicycle-outline" | "bicycle-sharp" | "bluetooth-outline" | "bluetooth-sharp" | "boat" | "boat-outline" | "boat-sharp" | "body-outline" | "body-sharp" | "bonfire" | "bonfire-outline" | "bonfire-sharp" | "book-outline" | "book-sharp" | "bookmark-outline" | "bookmark-sharp" | "bookmarks-outline" | "bookmarks-sharp" | "briefcase-outline" | "briefcase-sharp" | "browsers" | "browsers-outline" | "browsers-sharp" | "brush-outline" | "brush-sharp" | "bug-outline" | "bug-sharp" | "build" | "build-outline" | "build-sharp" | "bulb" | "bulb-outline" | "bulb-sharp" | "bus-outline" | "bus-sharp" | "business" | "business-outline" | "business-sharp" | "cafe" | "cafe-outline" | "cafe-sharp" | "calculator-outline" | "calculator-sharp" | "calendar-outline" | "calendar-sharp" | "call" | "call-outline" | "call-sharp" | "camera-outline" | "camera-reverse" | "camera-reverse-outline" | "camera-reverse-sharp" | "camera-sharp" | "car-outline" | "car-sharp" | "car-sport" | "car-sport-outline" | "car-sport-sharp" | "card" | "card-outline" | "card-sharp" | "caret-back" | "caret-back-circle" | "caret-back-circle-outline" | "caret-back-circle-sharp" | "caret-back-outline" | "caret-back-sharp" | "caret-down-circle" | "caret-down-circle-outline" | "caret-down-circle-sharp" | "caret-down-outline" | "caret-down-sharp" | "caret-forward" | "caret-forward-circle" | "caret-forward-circle-outline" | "caret-forward-circle-sharp" | "caret-forward-outline" | "caret-forward-sharp" | "caret-up-circle" | "caret-up-circle-outline" | "caret-up-circle-sharp" | "caret-up-outline" | "caret-up-sharp" | "cart-outline" | "cart-sharp" | "cash" | "cash-outline" | "cash-sharp" | "cellular" | "cellular-outline" | "cellular-sharp" | "chatbox" | "chatbox-ellipses" | "chatbox-ellipses-outline" | "chatbox-ellipses-sharp" | "chatbox-outline" | "chatbox-sharp" | "chatbubble" | "chatbubble-ellipses" | "chatbubble-ellipses-outline" | "chatbubble-ellipses-sharp" | "chatbubble-outline" | "chatbubble-sharp" | "chatbubbles" | "chatbubbles-outline" | "chatbubbles-sharp" | "checkbox-outline" | "checkbox-sharp" | "checkmark" | "checkmark-circle" | "checkmark-circle-outline" | "checkmark-circle-sharp" | "checkmark-done" | "checkmark-done-circle" | "checkmark-done-circle-outline" | "checkmark-done-circle-sharp" | "checkmark-done-outline" | "checkmark-done-sharp" | "checkmark-outline" | "checkmark-sharp" | "chevron-back" | "chevron-back-circle" | "chevron-back-circle-outline" | "chevron-back-circle-sharp" | "chevron-back-outline" | "chevron-back-sharp" | "chevron-down-circle" | "chevron-down-circle-outline" | "chevron-down-circle-sharp" | "chevron-down-outline" | "chevron-down-sharp" | "chevron-forward" | "chevron-forward-circle" | "chevron-forward-circle-outline" | "chevron-forward-circle-sharp" | "chevron-forward-outline" | "chevron-forward-sharp" | "chevron-up-circle" | "chevron-up-circle-outline" | "chevron-up-circle-sharp" | "chevron-up-outline" | "chevron-up-sharp" | "clipboard-outline" | "clipboard-sharp" | "close-circle" | "close-circle-outline" | "close-circle-sharp" | "close-outline" | "close-sharp" | "cloud-circle" | "cloud-circle-outline" | "cloud-circle-sharp" | "cloud-done" | "cloud-done-outline" | "cloud-done-sharp" | "cloud-download-outline" | "cloud-download-sharp" | "cloud-offline" | "cloud-offline-outline" | "cloud-offline-sharp" | "cloud-outline" | "cloud-sharp" | "cloud-upload-outline" | "cloud-upload-sharp" | "cloudy-night" | "cloudy-night-outline" | "cloudy-night-sharp" | "cloudy-outline" | "cloudy-sharp" | "code-download" | "code-download-outline" | "code-download-sharp" | "code-outline" | "code-sharp" | "code-slash" | "code-slash-outline" | "code-slash-sharp" | "code-working" | "code-working-outline" | "code-working-sharp" | "cog-outline" | "cog-sharp" | "color-fill" | "color-fill-outline" | "color-fill-sharp" | "color-filter" | "color-filter-outline" | "color-filter-sharp" | "color-palette" | "color-palette-outline" | "color-palette-sharp" | "color-wand" | "color-wand-outline" | "color-wand-sharp" | "compass-outline" | "compass-sharp" | "construct" | "construct-outline" | "construct-sharp" | "contract" | "contract-outline" | "contract-sharp" | "contrast-outline" | "contrast-sharp" | "copy-outline" | "copy-sharp" | "create" | "create-outline" | "create-sharp" | "crop-outline" | "crop-sharp" | "cube-outline" | "cube-sharp" | "cut-outline" | "cut-sharp" | "desktop-outline" | "desktop-sharp" | "disc-outline" | "disc-sharp" | "document-attach" | "document-attach-outline" | "document-attach-sharp" | "document-outline" | "document-sharp" | "document-text" | "document-text-outline" | "document-text-sharp" | "documents-outline" | "documents-sharp" | "download-outline" | "download-sharp" | "duplicate" | "duplicate-outline" | "duplicate-sharp" | "ear" | "ear-outline" | "ear-sharp" | "earth-outline" | "earth-sharp" | "easel" | "easel-outline" | "easel-sharp" | "egg-outline" | "egg-sharp" | "ellipse-outline" | "ellipse-sharp" | "ellipsis-horizontal" | "ellipsis-horizontal-circle" | "ellipsis-horizontal-circle-outline" | "ellipsis-horizontal-circle-sharp" | "ellipsis-horizontal-outline" | "ellipsis-horizontal-sharp" | "ellipsis-vertical" | "ellipsis-vertical-circle" | "ellipsis-vertical-circle-outline" | "ellipsis-vertical-circle-sharp" | "ellipsis-vertical-outline" | "ellipsis-vertical-sharp" | "enter-outline" | "enter-sharp" | "exit" | "exit-outline" | "exit-sharp" | "expand-outline" | "expand-sharp" | "eye-off-outline" | "eye-off-sharp" | "eye-outline" | "eye-sharp" | "eyedrop" | "eyedrop-outline" | "eyedrop-sharp" | "fast-food" | "fast-food-outline" | "fast-food-sharp" | "female-outline" | "female-sharp" | "file-tray" | "file-tray-full" | "file-tray-full-outline" | "file-tray-full-sharp" | "file-tray-outline" | "file-tray-sharp" | "file-tray-stacked" | "file-tray-stacked-outline" | "file-tray-stacked-sharp" | "film-outline" | "film-sharp" | "filter-outline" | "filter-sharp" | "finger-print" | "finger-print-outline" | "finger-print-sharp" | "fitness" | "fitness-outline" | "fitness-sharp" | "flag-outline" | "flag-sharp" | "flame" | "flame-outline" | "flame-sharp" | "flash-off" | "flash-off-outline" | "flash-off-sharp" | "flash-outline" | "flash-sharp" | "flashlight-outline" | "flashlight-sharp" | "flask-outline" | "flask-sharp" | "flower-outline" | "flower-sharp" | "folder-open-outline" | "folder-open-sharp" | "folder-outline" | "folder-sharp" | "football" | "football-outline" | "football-sharp" | "funnel-outline" | "funnel-sharp" | "game-controller-outline" | "game-controller-sharp" | "gift-outline" | "gift-sharp" | "git-branch-outline" | "git-branch-sharp" | "git-commit-outline" | "git-commit-sharp" | "git-compare" | "git-compare-outline" | "git-compare-sharp" | "git-merge-outline" | "git-merge-sharp" | "git-network" | "git-network-outline" | "git-network-sharp" | "git-pull-request-outline" | "git-pull-request-sharp" | "glasses-outline" | "glasses-sharp" | "globe-outline" | "globe-sharp" | "golf" | "golf-outline" | "golf-sharp" | "grid-outline" | "grid-sharp" | "hammer-outline" | "hammer-sharp" | "hand-left" | "hand-left-outline" | "hand-left-sharp" | "hand-right" | "hand-right-outline" | "hand-right-sharp" | "happy" | "happy-outline" | "happy-sharp" | "hardware-chip" | "hardware-chip-outline" | "hardware-chip-sharp" | "headset-outline" | "headset-sharp" | "heart-circle" | "heart-circle-outline" | "heart-circle-sharp" | "heart-dislike" | "heart-dislike-circle" | "heart-dislike-circle-outline" | "heart-dislike-circle-sharp" | "heart-dislike-outline" | "heart-dislike-sharp" | "heart-half" | "heart-half-outline" | "heart-half-sharp" | "heart-outline" | "heart-sharp" | "help-buoy" | "help-buoy-outline" | "help-buoy-sharp" | "help-circle-outline" | "help-circle-sharp" | "help-outline" | "help-sharp" | "home-outline" | "home-sharp" | "hourglass-outline" | "hourglass-sharp" | "ice-cream-outline" | "ice-cream-sharp" | "image-outline" | "image-sharp" | "images-outline" | "images-sharp" | "infinite" | "infinite-outline" | "infinite-sharp" | "information" | "information-circle" | "information-circle-outline" | "information-circle-sharp" | "information-outline" | "information-sharp" | "journal" | "journal-outline" | "journal-sharp" | "key-outline" | "key-sharp" | "keypad" | "keypad-outline" | "keypad-sharp" | "language-outline" | "language-sharp" | "laptop-outline" | "laptop-sharp" | "layers-outline" | "layers-sharp" | "leaf-outline" | "leaf-sharp" | "library" | "library-outline" | "library-sharp" | "link-outline" | "link-sharp" | "list-circle" | "list-circle-outline" | "list-circle-sharp" | "list-outline" | "list-sharp" | "locate" | "locate-outline" | "locate-sharp" | "location-outline" | "location-sharp" | "lock-closed" | "lock-closed-outline" | "lock-closed-sharp" | "lock-open-outline" | "lock-open-sharp" | "log-in-outline" | "log-in-sharp" | "log-out-outline" | "log-out-sharp" | "logo-amazon" | "logo-amplify" | "logo-android" | "logo-angular" | "logo-apple" | "logo-apple-appstore" | "logo-bitbucket" | "logo-bitcoin" | "logo-buffer" | "logo-capacitor" | "logo-chrome" | "logo-closed-captioning" | "logo-codepen" | "logo-css3" | "logo-designernews" | "logo-dribbble" | "logo-dropbox" | "logo-edge" | "logo-electron" | "logo-euro" | "logo-facebook" | "logo-firebase" | "logo-firefox" | "logo-flickr" | "logo-foursquare" | "logo-github" | "logo-google" | "logo-google-playstore" | "logo-hackernews" | "logo-html5" | "logo-instagram" | "logo-ionic" | "logo-ionitron" | "logo-javascript" | "logo-laravel" | "logo-linkedin" | "logo-markdown" | "logo-no-smoking" | "logo-nodejs" | "logo-npm" | "logo-octocat" | "logo-pinterest" | "logo-playstation" | "logo-pwa" | "logo-python" | "logo-react" | "logo-reddit" | "logo-rss" | "logo-sass" | "logo-skype" | "logo-slack" | "logo-snapchat" | "logo-stackoverflow" | "logo-steam" | "logo-stencil" | "logo-tumblr" | "logo-tux" | "logo-twitch" | "logo-twitter" | "logo-usd" | "logo-vimeo" | "logo-vk" | "logo-vue" | "logo-web-component" | "logo-whatsapp" | "logo-windows" | "logo-wordpress" | "logo-xbox" | "logo-xing" | "logo-yahoo" | "logo-yen" | "logo-youtube" | "magnet-outline" | "magnet-sharp" | "mail-open" | "mail-open-outline" | "mail-open-sharp" | "mail-outline" | "mail-sharp" | "mail-unread" | "mail-unread-outline" | "mail-unread-sharp" | "male-female-outline" | "male-female-sharp" | "male-outline" | "male-sharp" | "man-outline" | "man-sharp" | "map-outline" | "map-sharp" | "medal-outline" | "medal-sharp" | "medical" | "medical-outline" | "medical-sharp" | "medkit-outline" | "medkit-sharp" | "megaphone-outline" | "megaphone-sharp" | "menu-outline" | "menu-sharp" | "mic-circle" | "mic-circle-outline" | "mic-circle-sharp" | "mic-off-circle" | "mic-off-circle-outline" | "mic-off-circle-sharp" | "mic-off-outline" | "mic-off-sharp" | "mic-outline" | "mic-sharp" | "moon-outline" | "moon-sharp" | "move-outline" | "move-sharp" | "musical-note" | "musical-note-outline" | "musical-note-sharp" | "musical-notes" | "musical-notes-outline" | "musical-notes-sharp" | "navigate-circle" | "navigate-circle-outline" | "navigate-circle-sharp" | "navigate-outline" | "navigate-sharp" | "newspaper-outline" | "newspaper-sharp" | "notifications" | "notifications-circle" | "notifications-circle-outline" | "notifications-circle-sharp" | "notifications-off-circle" | "notifications-off-circle-outline" | "notifications-off-circle-sharp" | "notifications-off-outline" | "notifications-off-sharp" | "notifications-outline" | "notifications-sharp" | "nuclear" | "nuclear-outline" | "nuclear-sharp" | "nutrition" | "nutrition-outline" | "nutrition-sharp" | "open" | "open-outline" | "open-sharp" | "options" | "options-outline" | "options-sharp" | "paper-plane-outline" | "paper-plane-sharp" | "partly-sunny" | "partly-sunny-outline" | "partly-sunny-sharp" | "pause-circle-outline" | "pause-circle-sharp" | "pause-outline" | "pause-sharp" | "paw-outline" | "paw-sharp" | "pencil-outline" | "pencil-sharp" | "people" | "people-circle" | "people-circle-outline" | "people-circle-sharp" | "people-outline" | "people-sharp" | "person-add" | "person-add-outline" | "person-add-sharp" | "person-circle" | "person-circle-outline" | "person-circle-sharp" | "person-outline" | "person-remove" | "person-remove-outline" | "person-remove-sharp" | "person-sharp" | "phone-landscape" | "phone-landscape-outline" | "phone-landscape-sharp" | "phone-portrait" | "phone-portrait-outline" | "phone-portrait-sharp" | "pie-chart-outline" | "pie-chart-sharp" | "pin-outline" | "pin-sharp" | "pint" | "pint-outline" | "pint-sharp" | "pizza" | "pizza-outline" | "pizza-sharp" | "planet" | "planet-outline" | "planet-sharp" | "play-back" | "play-back-circle" | "play-back-circle-outline" | "play-back-circle-sharp" | "play-back-outline" | "play-back-sharp" | "play-circle-outline" | "play-circle-sharp" | "play-forward" | "play-forward-circle" | "play-forward-circle-outline" | "play-forward-circle-sharp" | "play-forward-outline" | "play-forward-sharp" | "play-outline" | "play-sharp" | "play-skip-back" | "play-skip-back-circle" | "play-skip-back-circle-outline" | "play-skip-back-circle-sharp" | "play-skip-back-outline" | "play-skip-back-sharp" | "play-skip-forward" | "play-skip-forward-circle" | "play-skip-forward-circle-outline" | "play-skip-forward-circle-sharp" | "play-skip-forward-outline" | "play-skip-forward-sharp" | "podium" | "podium-outline" | "podium-sharp" | "power-outline" | "power-sharp" | "pricetag" | "pricetag-outline" | "pricetag-sharp" | "pricetags" | "pricetags-outline" | "pricetags-sharp" | "print-outline" | "print-sharp" | "pulse-outline" | "pulse-sharp" | "push" | "push-outline" | "push-sharp" | "qr-code" | "qr-code-outline" | "qr-code-sharp" | "radio-button-off" | "radio-button-off-outline" | "radio-button-off-sharp" | "radio-button-on" | "radio-button-on-outline" | "radio-button-on-sharp" | "radio-outline" | "radio-sharp" | "rainy" | "rainy-outline" | "rainy-sharp" | "reader" | "reader-outline" | "reader-sharp" | "receipt-outline" | "receipt-sharp" | "recording" | "recording-outline" | "recording-sharp" | "refresh-circle" | "refresh-circle-outline" | "refresh-circle-sharp" | "refresh-outline" | "refresh-sharp" | "reload" | "reload-circle" | "reload-circle-outline" | "reload-circle-sharp" | "reload-outline" | "reload-sharp" | "remove-circle" | "remove-circle-outline" | "remove-circle-sharp" | "remove-outline" | "remove-sharp" | "reorder-four" | "reorder-four-outline" | "reorder-four-sharp" | "reorder-three" | "reorder-three-outline" | "reorder-three-sharp" | "reorder-two" | "reorder-two-outline" | "reorder-two-sharp" | "repeat-outline" | "repeat-sharp" | "resize" | "resize-outline" | "resize-sharp" | "restaurant" | "restaurant-outline" | "restaurant-sharp" | "return-down-back" | "return-down-back-outline" | "return-down-back-sharp" | "return-down-forward" | "return-down-forward-outline" | "return-down-forward-sharp" | "return-up-back" | "return-up-back-outline" | "return-up-back-sharp" | "return-up-forward" | "return-up-forward-outline" | "return-up-forward-sharp" | "ribbon-outline" | "ribbon-sharp" | "rocket-outline" | "rocket-sharp" | "rose" | "rose-outline" | "rose-sharp" | "sad" | "sad-outline" | "sad-sharp" | "save-outline" | "save-sharp" | "scan" | "scan-circle" | "scan-circle-outline" | "scan-circle-sharp" | "scan-outline" | "scan-sharp" | "school-outline" | "school-sharp" | "search-circle" | "search-circle-outline" | "search-circle-sharp" | "search-outline" | "search-sharp" | "send-outline" | "send-sharp" | "server-outline" | "server-sharp" | "settings-outline" | "settings-sharp" | "shapes-outline" | "shapes-sharp" | "share-outline" | "share-sharp" | "share-social" | "share-social-outline" | "share-social-sharp" | "shield-checkmark" | "shield-checkmark-outline" | "shield-checkmark-sharp" | "shield-outline" | "shield-sharp" | "shirt" | "shirt-outline" | "shirt-sharp" | "shuffle-outline" | "shuffle-sharp" | "skull-outline" | "skull-sharp" | "snow-outline" | "snow-sharp" | "speedometer" | "speedometer-outline" | "speedometer-sharp" | "square-outline" | "square-sharp" | "star-half-outline" | "star-half-sharp" | "star-outline" | "star-sharp" | "stats-chart" | "stats-chart-outline" | "stats-chart-sharp" | "stop-circle-outline" | "stop-circle-sharp" | "stop-outline" | "stop-sharp" | "stopwatch-outline" | "stopwatch-sharp" | "subway-outline" | "subway-sharp" | "sunny" | "sunny-outline" | "sunny-sharp" | "swap-horizontal" | "swap-horizontal-outline" | "swap-horizontal-sharp" | "swap-vertical" | "swap-vertical-outline" | "swap-vertical-sharp" | "sync-circle" | "sync-circle-outline" | "sync-circle-sharp" | "sync-outline" | "sync-sharp" | "tablet-landscape-outline" | "tablet-landscape-sharp" | "tablet-portrait-outline" | "tablet-portrait-sharp" | "tennisball" | "tennisball-outline" | "tennisball-sharp" | "terminal-outline" | "terminal-sharp" | "text-outline" | "text-sharp" | "thermometer-outline" | "thermometer-sharp" | "thumbs-down-outline" | "thumbs-down-sharp" | "thumbs-up-outline" | "thumbs-up-sharp" | "thunderstorm" | "thunderstorm-outline" | "thunderstorm-sharp" | "time-outline" | "time-sharp" | "timer-outline" | "timer-sharp" | "today" | "today-outline" | "today-sharp" | "toggle" | "toggle-outline" | "toggle-sharp" | "trail-sign" | "trail-sign-outline" | "trail-sign-sharp" | "train-outline" | "train-sharp" | "transgender-outline" | "transgender-sharp" | "trash-bin" | "trash-bin-outline" | "trash-bin-sharp" | "trash-outline" | "trash-sharp" | "trending-down-outline" | "trending-down-sharp" | "trending-up-outline" | "trending-up-sharp" | "triangle-outline" | "triangle-sharp" | "trophy-outline" | "trophy-sharp" | "tv-outline" | "tv-sharp" | "umbrella-outline" | "umbrella-sharp" | "videocam" | "videocam-outline" | "videocam-sharp" | "volume-high" | "volume-high-outline" | "volume-high-sharp" | "volume-low" | "volume-low-outline" | "volume-low-sharp" | "volume-medium" | "volume-medium-outline" | "volume-medium-sharp" | "volume-mute-outline" | "volume-mute-sharp" | "volume-off-outline" | "volume-off-sharp" | "walk" | "walk-outline" | "walk-sharp" | "wallet-outline" | "wallet-sharp" | "warning-outline" | "warning-sharp" | "watch-outline" | "watch-sharp" | "water-outline" | "water-sharp" | "wifi-outline" | "wifi-sharp" | "wine" | "wine-outline" | "wine-sharp" | "woman-outline" | "woman-sharp" | "ios-add" | "ios-add-circle" | "ios-add-circle-outline" | "ios-add-circle-sharp" | "ios-add-outline" | "ios-add-sharp" | "ios-airplane" | "ios-airplane-outline" | "ios-airplane-sharp" | "ios-alarm" | "ios-alarm-outline" | "ios-alarm-sharp" | "ios-albums" | "ios-albums-outline" | "ios-albums-sharp" | "ios-alert" | "ios-alert-circle" | "ios-alert-circle-outline" | "ios-alert-circle-sharp" | "ios-alert-outline" | "ios-alert-sharp" | "ios-american-football" | "ios-american-football-outline" | "ios-american-football-sharp" | "ios-analytics" | "ios-analytics-outline" | "ios-analytics-sharp" | "ios-aperture" | "ios-aperture-outline" | "ios-aperture-sharp" | "ios-apps" | "ios-apps-outline" | "ios-apps-sharp" | "ios-archive" | "ios-archive-outline" | "ios-archive-sharp" | "ios-arrow-back" | "ios-arrow-back-circle" | "ios-arrow-back-circle-outline" | "ios-arrow-back-circle-sharp" | "ios-arrow-back-outline" | "ios-arrow-back-sharp" | "ios-arrow-down" | "ios-arrow-down-circle" | "ios-arrow-down-circle-outline" | "ios-arrow-down-circle-sharp" | "ios-arrow-down-outline" | "ios-arrow-down-sharp" | "ios-arrow-forward" | "ios-arrow-forward-circle" | "ios-arrow-forward-circle-outline" | "ios-arrow-forward-circle-sharp" | "ios-arrow-forward-outline" | "ios-arrow-forward-sharp" | "ios-arrow-redo" | "ios-arrow-redo-circle" | "ios-arrow-redo-circle-outline" | "ios-arrow-redo-circle-sharp" | "ios-arrow-redo-outline" | "ios-arrow-redo-sharp" | "ios-arrow-undo" | "ios-arrow-undo-circle" | "ios-arrow-undo-circle-outline" | "ios-arrow-undo-circle-sharp" | "ios-arrow-undo-outline" | "ios-arrow-undo-sharp" | "ios-arrow-up" | "ios-arrow-up-circle" | "ios-arrow-up-circle-outline" | "ios-arrow-up-circle-sharp" | "ios-arrow-up-outline" | "ios-arrow-up-sharp" | "ios-at" | "ios-at-circle" | "ios-at-circle-outline" | "ios-at-circle-sharp" | "ios-at-outline" | "ios-at-sharp" | "ios-attach" | "ios-attach-outline" | "ios-attach-sharp" | "ios-backspace" | "ios-backspace-outline" | "ios-backspace-sharp" | "ios-bandage" | "ios-bandage-outline" | "ios-bandage-sharp" | "ios-bar-chart" | "ios-bar-chart-outline" | "ios-bar-chart-sharp" | "ios-barbell" | "ios-barbell-outline" | "ios-barbell-sharp" | "ios-barcode" | "ios-barcode-outline" | "ios-barcode-sharp" | "ios-baseball" | "ios-baseball-outline" | "ios-baseball-sharp" | "ios-basket" | "ios-basket-outline" | "ios-basket-sharp" | "ios-basketball" | "ios-basketball-outline" | "ios-basketball-sharp" | "ios-battery-charging" | "ios-battery-charging-outline" | "ios-battery-charging-sharp" | "ios-battery-dead" | "ios-battery-dead-outline" | "ios-battery-dead-sharp" | "ios-battery-full" | "ios-battery-full-outline" | "ios-battery-full-sharp" | "ios-battery-half" | "ios-battery-half-outline" | "ios-battery-half-sharp" | "ios-beaker" | "ios-beaker-outline" | "ios-beaker-sharp" | "ios-bed" | "ios-bed-outline" | "ios-bed-sharp" | "ios-beer" | "ios-beer-outline" | "ios-beer-sharp" | "ios-bicycle" | "ios-bicycle-outline" | "ios-bicycle-sharp" | "ios-bluetooth" | "ios-bluetooth-outline" | "ios-bluetooth-sharp" | "ios-boat" | "ios-boat-outline" | "ios-boat-sharp" | "ios-body" | "ios-body-outline" | "ios-body-sharp" | "ios-bonfire" | "ios-bonfire-outline" | "ios-bonfire-sharp" | "ios-book" | "ios-book-outline" | "ios-book-sharp" | "ios-bookmark" | "ios-bookmark-outline" | "ios-bookmark-sharp" | "ios-bookmarks" | "ios-bookmarks-outline" | "ios-bookmarks-sharp" | "ios-briefcase" | "ios-briefcase-outline" | "ios-briefcase-sharp" | "ios-browsers" | "ios-browsers-outline" | "ios-browsers-sharp" | "ios-brush" | "ios-brush-outline" | "ios-brush-sharp" | "ios-bug" | "ios-bug-outline" | "ios-bug-sharp" | "ios-build" | "ios-build-outline" | "ios-build-sharp" | "ios-bulb" | "ios-bulb-outline" | "ios-bulb-sharp" | "ios-bus" | "ios-bus-outline" | "ios-bus-sharp" | "ios-business" | "ios-business-outline" | "ios-business-sharp" | "ios-cafe" | "ios-cafe-outline" | "ios-cafe-sharp" | "ios-calculator" | "ios-calculator-outline" | "ios-calculator-sharp" | "ios-calendar" | "ios-calendar-outline" | "ios-calendar-sharp" | "ios-call" | "ios-call-outline" | "ios-call-sharp" | "ios-camera" | "ios-camera-outline" | "ios-camera-reverse" | "ios-camera-reverse-outline" | "ios-camera-reverse-sharp" | "ios-camera-sharp" | "ios-car" | "ios-car-outline" | "ios-car-sharp" | "ios-car-sport" | "ios-car-sport-outline" | "ios-car-sport-sharp" | "ios-card" | "ios-card-outline" | "ios-card-sharp" | "ios-caret-back" | "ios-caret-back-circle" | "ios-caret-back-circle-outline" | "ios-caret-back-circle-sharp" | "ios-caret-back-outline" | "ios-caret-back-sharp" | "ios-caret-down" | "ios-caret-down-circle" | "ios-caret-down-circle-outline" | "ios-caret-down-circle-sharp" | "ios-caret-down-outline" | "ios-caret-down-sharp" | "ios-caret-forward" | "ios-caret-forward-circle" | "ios-caret-forward-circle-outline" | "ios-caret-forward-circle-sharp" | "ios-caret-forward-outline" | "ios-caret-forward-sharp" | "ios-caret-up" | "ios-caret-up-circle" | "ios-caret-up-circle-outline" | "ios-caret-up-circle-sharp" | "ios-caret-up-outline" | "ios-caret-up-sharp" | "ios-cart" | "ios-cart-outline" | "ios-cart-sharp" | "ios-cash" | "ios-cash-outline" | "ios-cash-sharp" | "ios-cellular" | "ios-cellular-outline" | "ios-cellular-sharp" | "ios-chatbox" | "ios-chatbox-ellipses" | "ios-chatbox-ellipses-outline" | "ios-chatbox-ellipses-sharp" | "ios-chatbox-outline" | "ios-chatbox-sharp" | "ios-chatbubble" | "ios-chatbubble-ellipses" | "ios-chatbubble-ellipses-outline" | "ios-chatbubble-ellipses-sharp" | "ios-chatbubble-outline" | "ios-chatbubble-sharp" | "ios-chatbubbles" | "ios-chatbubbles-outline" | "ios-chatbubbles-sharp" | "ios-checkbox" | "ios-checkbox-outline" | "ios-checkbox-sharp" | "ios-checkmark" | "ios-checkmark-circle" | "ios-checkmark-circle-outline" | "ios-checkmark-circle-sharp" | "ios-checkmark-done" | "ios-checkmark-done-circle" | "ios-checkmark-done-circle-outline" | "ios-checkmark-done-circle-sharp" | "ios-checkmark-done-outline" | "ios-checkmark-done-sharp" | "ios-checkmark-outline" | "ios-checkmark-sharp" | "ios-chevron-back" | "ios-chevron-back-circle" | "ios-chevron-back-circle-outline" | "ios-chevron-back-circle-sharp" | "ios-chevron-back-outline" | "ios-chevron-back-sharp" | "ios-chevron-down" | "ios-chevron-down-circle" | "ios-chevron-down-circle-outline" | "ios-chevron-down-circle-sharp" | "ios-chevron-down-outline" | "ios-chevron-down-sharp" | "ios-chevron-forward" | "ios-chevron-forward-circle" | "ios-chevron-forward-circle-outline" | "ios-chevron-forward-circle-sharp" | "ios-chevron-forward-outline" | "ios-chevron-forward-sharp" | "ios-chevron-up" | "ios-chevron-up-circle" | "ios-chevron-up-circle-outline" | "ios-chevron-up-circle-sharp" | "ios-chevron-up-outline" | "ios-chevron-up-sharp" | "ios-clipboard" | "ios-clipboard-outline" | "ios-clipboard-sharp" | "ios-close" | "ios-close-circle" | "ios-close-circle-outline" | "ios-close-circle-sharp" | "ios-close-outline" | "ios-close-sharp" | "ios-cloud" | "ios-cloud-circle" | "ios-cloud-circle-outline" | "ios-cloud-circle-sharp" | "ios-cloud-done" | "ios-cloud-done-outline" | "ios-cloud-done-sharp" | "ios-cloud-download" | "ios-cloud-download-outline" | "ios-cloud-download-sharp" | "ios-cloud-offline" | "ios-cloud-offline-outline" | "ios-cloud-offline-sharp" | "ios-cloud-outline" | "ios-cloud-sharp" | "ios-cloud-upload" | "ios-cloud-upload-outline" | "ios-cloud-upload-sharp" | "ios-cloudy" | "ios-cloudy-night" | "ios-cloudy-night-outline" | "ios-cloudy-night-sharp" | "ios-cloudy-outline" | "ios-cloudy-sharp" | "ios-code" | "ios-code-download" | "ios-code-download-outline" | "ios-code-download-sharp" | "ios-code-outline" | "ios-code-sharp" | "ios-code-slash" | "ios-code-slash-outline" | "ios-code-slash-sharp" | "ios-code-working" | "ios-code-working-outline" | "ios-code-working-sharp" | "ios-cog" | "ios-cog-outline" | "ios-cog-sharp" | "ios-color-fill" | "ios-color-fill-outline" | "ios-color-fill-sharp" | "ios-color-filter" | "ios-color-filter-outline" | "ios-color-filter-sharp" | "ios-color-palette" | "ios-color-palette-outline" | "ios-color-palette-sharp" | "ios-color-wand" | "ios-color-wand-outline" | "ios-color-wand-sharp" | "ios-compass" | "ios-compass-outline" | "ios-compass-sharp" | "ios-construct" | "ios-construct-outline" | "ios-construct-sharp" | "ios-contract" | "ios-contract-outline" | "ios-contract-sharp" | "ios-contrast" | "ios-contrast-outline" | "ios-contrast-sharp" | "ios-copy" | "ios-copy-outline" | "ios-copy-sharp" | "ios-create" | "ios-create-outline" | "ios-create-sharp" | "ios-crop" | "ios-crop-outline" | "ios-crop-sharp" | "ios-cube" | "ios-cube-outline" | "ios-cube-sharp" | "ios-cut" | "ios-cut-outline" | "ios-cut-sharp" | "ios-desktop" | "ios-desktop-outline" | "ios-desktop-sharp" | "ios-disc" | "ios-disc-outline" | "ios-disc-sharp" | "ios-document" | "ios-document-attach" | "ios-document-attach-outline" | "ios-document-attach-sharp" | "ios-document-outline" | "ios-document-sharp" | "ios-document-text" | "ios-document-text-outline" | "ios-document-text-sharp" | "ios-documents" | "ios-documents-outline" | "ios-documents-sharp" | "ios-download" | "ios-download-outline" | "ios-download-sharp" | "ios-duplicate" | "ios-duplicate-outline" | "ios-duplicate-sharp" | "ios-ear" | "ios-ear-outline" | "ios-ear-sharp" | "ios-earth" | "ios-earth-outline" | "ios-earth-sharp" | "ios-easel" | "ios-easel-outline" | "ios-easel-sharp" | "ios-egg" | "ios-egg-outline" | "ios-egg-sharp" | "ios-ellipse" | "ios-ellipse-outline" | "ios-ellipse-sharp" | "ios-ellipsis-horizontal" | "ios-ellipsis-horizontal-circle" | "ios-ellipsis-horizontal-circle-outline" | "ios-ellipsis-horizontal-circle-sharp" | "ios-ellipsis-horizontal-outline" | "ios-ellipsis-horizontal-sharp" | "ios-ellipsis-vertical" | "ios-ellipsis-vertical-circle" | "ios-ellipsis-vertical-circle-outline" | "ios-ellipsis-vertical-circle-sharp" | "ios-ellipsis-vertical-outline" | "ios-ellipsis-vertical-sharp" | "ios-enter" | "ios-enter-outline" | "ios-enter-sharp" | "ios-exit" | "ios-exit-outline" | "ios-exit-sharp" | "ios-expand" | "ios-expand-outline" | "ios-expand-sharp" | "ios-eye" | "ios-eye-off" | "ios-eye-off-outline" | "ios-eye-off-sharp" | "ios-eye-outline" | "ios-eye-sharp" | "ios-eyedrop" | "ios-eyedrop-outline" | "ios-eyedrop-sharp" | "ios-fast-food" | "ios-fast-food-outline" | "ios-fast-food-sharp" | "ios-female" | "ios-female-outline" | "ios-female-sharp" | "ios-file-tray" | "ios-file-tray-full" | "ios-file-tray-full-outline" | "ios-file-tray-full-sharp" | "ios-file-tray-outline" | "ios-file-tray-sharp" | "ios-file-tray-stacked" | "ios-file-tray-stacked-outline" | "ios-file-tray-stacked-sharp" | "ios-film" | "ios-film-outline" | "ios-film-sharp" | "ios-filter" | "ios-filter-outline" | "ios-filter-sharp" | "ios-finger-print" | "ios-finger-print-outline" | "ios-finger-print-sharp" | "ios-fitness" | "ios-fitness-outline" | "ios-fitness-sharp" | "ios-flag" | "ios-flag-outline" | "ios-flag-sharp" | "ios-flame" | "ios-flame-outline" | "ios-flame-sharp" | "ios-flash" | "ios-flash-off" | "ios-flash-off-outline" | "ios-flash-off-sharp" | "ios-flash-outline" | "ios-flash-sharp" | "ios-flashlight" | "ios-flashlight-outline" | "ios-flashlight-sharp" | "ios-flask" | "ios-flask-outline" | "ios-flask-sharp" | "ios-flower" | "ios-flower-outline" | "ios-flower-sharp" | "ios-folder" | "ios-folder-open" | "ios-folder-open-outline" | "ios-folder-open-sharp" | "ios-folder-outline" | "ios-folder-sharp" | "ios-football" | "ios-football-outline" | "ios-football-sharp" | "ios-funnel" | "ios-funnel-outline" | "ios-funnel-sharp" | "ios-game-controller" | "ios-game-controller-outline" | "ios-game-controller-sharp" | "ios-gift" | "ios-gift-outline" | "ios-gift-sharp" | "ios-git-branch" | "ios-git-branch-outline" | "ios-git-branch-sharp" | "ios-git-commit" | "ios-git-commit-outline" | "ios-git-commit-sharp" | "ios-git-compare" | "ios-git-compare-outline" | "ios-git-compare-sharp" | "ios-git-merge" | "ios-git-merge-outline" | "ios-git-merge-sharp" | "ios-git-network" | "ios-git-network-outline" | "ios-git-network-sharp" | "ios-git-pull-request" | "ios-git-pull-request-outline" | "ios-git-pull-request-sharp" | "ios-glasses" | "ios-glasses-outline" | "ios-glasses-sharp" | "ios-globe" | "ios-globe-outline" | "ios-globe-sharp" | "ios-golf" | "ios-golf-outline" | "ios-golf-sharp" | "ios-grid" | "ios-grid-outline" | "ios-grid-sharp" | "ios-hammer" | "ios-hammer-outline" | "ios-hammer-sharp" | "ios-hand-left" | "ios-hand-left-outline" | "ios-hand-left-sharp" | "ios-hand-right" | "ios-hand-right-outline" | "ios-hand-right-sharp" | "ios-happy" | "ios-happy-outline" | "ios-happy-sharp" | "ios-hardware-chip" | "ios-hardware-chip-outline" | "ios-hardware-chip-sharp" | "ios-headset" | "ios-headset-outline" | "ios-headset-sharp" | "ios-heart" | "ios-heart-circle" | "ios-heart-circle-outline" | "ios-heart-circle-sharp" | "ios-heart-dislike" | "ios-heart-dislike-circle" | "ios-heart-dislike-circle-outline" | "ios-heart-dislike-circle-sharp" | "ios-heart-dislike-outline" | "ios-heart-dislike-sharp" | "ios-heart-half" | "ios-heart-half-outline" | "ios-heart-half-sharp" | "ios-heart-outline" | "ios-heart-sharp" | "ios-help" | "ios-help-buoy" | "ios-help-buoy-outline" | "ios-help-buoy-sharp" | "ios-help-circle" | "ios-help-circle-outline" | "ios-help-circle-sharp" | "ios-help-outline" | "ios-help-sharp" | "ios-home" | "ios-home-outline" | "ios-home-sharp" | "ios-hourglass" | "ios-hourglass-outline" | "ios-hourglass-sharp" | "ios-ice-cream" | "ios-ice-cream-outline" | "ios-ice-cream-sharp" | "ios-image" | "ios-image-outline" | "ios-image-sharp" | "ios-images" | "ios-images-outline" | "ios-images-sharp" | "ios-infinite" | "ios-infinite-outline" | "ios-infinite-sharp" | "ios-information" | "ios-information-circle" | "ios-information-circle-outline" | "ios-information-circle-sharp" | "ios-information-outline" | "ios-information-sharp" | "ios-journal" | "ios-journal-outline" | "ios-journal-sharp" | "ios-key" | "ios-key-outline" | "ios-key-sharp" | "ios-keypad" | "ios-keypad-outline" | "ios-keypad-sharp" | "ios-language" | "ios-language-outline" | "ios-language-sharp" | "ios-laptop" | "ios-laptop-outline" | "ios-laptop-sharp" | "ios-layers" | "ios-layers-outline" | "ios-layers-sharp" | "ios-leaf" | "ios-leaf-outline" | "ios-leaf-sharp" | "ios-library" | "ios-library-outline" | "ios-library-sharp" | "ios-link" | "ios-link-outline" | "ios-link-sharp" | "ios-list" | "ios-list-circle" | "ios-list-circle-outline" | "ios-list-circle-sharp" | "ios-list-outline" | "ios-list-sharp" | "ios-locate" | "ios-locate-outline" | "ios-locate-sharp" | "ios-location" | "ios-location-outline" | "ios-location-sharp" | "ios-lock-closed" | "ios-lock-closed-outline" | "ios-lock-closed-sharp" | "ios-lock-open" | "ios-lock-open-outline" | "ios-lock-open-sharp" | "ios-log-in" | "ios-log-in-outline" | "ios-log-in-sharp" | "ios-log-out" | "ios-log-out-outline" | "ios-log-out-sharp" | "ios-logo-amazon" | "ios-logo-amplify" | "ios-logo-android" | "ios-logo-angular" | "ios-logo-apple" | "ios-logo-apple-appstore" | "ios-logo-bitbucket" | "ios-logo-bitcoin" | "ios-logo-buffer" | "ios-logo-capacitor" | "ios-logo-chrome" | "ios-logo-closed-captioning" | "ios-logo-codepen" | "ios-logo-css3" | "ios-logo-designernews" | "ios-logo-dribbble" | "ios-logo-dropbox" | "ios-logo-edge" | "ios-logo-electron" | "ios-logo-euro" | "ios-logo-facebook" | "ios-logo-firebase" | "ios-logo-firefox" | "ios-logo-flickr" | "ios-logo-foursquare" | "ios-logo-github" | "ios-logo-google" | "ios-logo-google-playstore" | "ios-logo-hackernews" | "ios-logo-html5" | "ios-logo-instagram" | "ios-logo-ionic" | "ios-logo-ionitron" | "ios-logo-javascript" | "ios-logo-laravel" | "ios-logo-linkedin" | "ios-logo-markdown" | "ios-logo-no-smoking" | "ios-logo-nodejs" | "ios-logo-npm" | "ios-logo-octocat" | "ios-logo-pinterest" | "ios-logo-playstation" | "ios-logo-pwa" | "ios-logo-python" | "ios-logo-react" | "ios-logo-reddit" | "ios-logo-rss" | "ios-logo-sass" | "ios-logo-skype" | "ios-logo-slack" | "ios-logo-snapchat" | "ios-logo-stackoverflow" | "ios-logo-steam" | "ios-logo-stencil" | "ios-logo-tumblr" | "ios-logo-tux" | "ios-logo-twitch" | "ios-logo-twitter" | "ios-logo-usd" | "ios-logo-vimeo" | "ios-logo-vk" | "ios-logo-vue" | "ios-logo-web-component" | "ios-logo-whatsapp" | "ios-logo-windows" | "ios-logo-wordpress" | "ios-logo-xbox" | "ios-logo-xing" | "ios-logo-yahoo" | "ios-logo-yen" | "ios-logo-youtube" | "ios-magnet" | "ios-magnet-outline" | "ios-magnet-sharp" | "ios-mail" | "ios-mail-open" | "ios-mail-open-outline" | "ios-mail-open-sharp" | "ios-mail-outline" | "ios-mail-sharp" | "ios-mail-unread" | "ios-mail-unread-outline" | "ios-mail-unread-sharp" | "ios-male" | "ios-male-female" | "ios-male-female-outline" | "ios-male-female-sharp" | "ios-male-outline" | "ios-male-sharp" | "ios-man" | "ios-man-outline" | "ios-man-sharp" | "ios-map" | "ios-map-outline" | "ios-map-sharp" | "ios-medal" | "ios-medal-outline" | "ios-medal-sharp" | "ios-medical" | "ios-medical-outline" | "ios-medical-sharp" | "ios-medkit" | "ios-medkit-outline" | "ios-medkit-sharp" | "ios-megaphone" | "ios-megaphone-outline" | "ios-megaphone-sharp" | "ios-menu" | "ios-menu-outline" | "ios-menu-sharp" | "ios-mic" | "ios-mic-circle" | "ios-mic-circle-outline" | "ios-mic-circle-sharp" | "ios-mic-off" | "ios-mic-off-circle" | "ios-mic-off-circle-outline" | "ios-mic-off-circle-sharp" | "ios-mic-off-outline" | "ios-mic-off-sharp" | "ios-mic-outline" | "ios-mic-sharp" | "ios-moon" | "ios-moon-outline" | "ios-moon-sharp" | "ios-move" | "ios-move-outline" | "ios-move-sharp" | "ios-musical-note" | "ios-musical-note-outline" | "ios-musical-note-sharp" | "ios-musical-notes" | "ios-musical-notes-outline" | "ios-musical-notes-sharp" | "ios-navigate" | "ios-navigate-circle" | "ios-navigate-circle-outline" | "ios-navigate-circle-sharp" | "ios-navigate-outline" | "ios-navigate-sharp" | "ios-newspaper" | "ios-newspaper-outline" | "ios-newspaper-sharp" | "ios-notifications" | "ios-notifications-circle" | "ios-notifications-circle-outline" | "ios-notifications-circle-sharp" | "ios-notifications-off" | "ios-notifications-off-circle" | "ios-notifications-off-circle-outline" | "ios-notifications-off-circle-sharp" | "ios-notifications-off-outline" | "ios-notifications-off-sharp" | "ios-notifications-outline" | "ios-notifications-sharp" | "ios-nuclear" | "ios-nuclear-outline" | "ios-nuclear-sharp" | "ios-nutrition" | "ios-nutrition-outline" | "ios-nutrition-sharp" | "ios-open" | "ios-open-outline" | "ios-open-sharp" | "ios-options" | "ios-options-outline" | "ios-options-sharp" | "ios-paper-plane" | "ios-paper-plane-outline" | "ios-paper-plane-sharp" | "ios-partly-sunny" | "ios-partly-sunny-outline" | "ios-partly-sunny-sharp" | "ios-pause" | "ios-pause-circle" | "ios-pause-circle-outline" | "ios-pause-circle-sharp" | "ios-pause-outline" | "ios-pause-sharp" | "ios-paw" | "ios-paw-outline" | "ios-paw-sharp" | "ios-pencil" | "ios-pencil-outline" | "ios-pencil-sharp" | "ios-people" | "ios-people-circle" | "ios-people-circle-outline" | "ios-people-circle-sharp" | "ios-people-outline" | "ios-people-sharp" | "ios-person" | "ios-person-add" | "ios-person-add-outline" | "ios-person-add-sharp" | "ios-person-circle" | "ios-person-circle-outline" | "ios-person-circle-sharp" | "ios-person-outline" | "ios-person-remove" | "ios-person-remove-outline" | "ios-person-remove-sharp" | "ios-person-sharp" | "ios-phone-landscape" | "ios-phone-landscape-outline" | "ios-phone-landscape-sharp" | "ios-phone-portrait" | "ios-phone-portrait-outline" | "ios-phone-portrait-sharp" | "ios-pie-chart" | "ios-pie-chart-outline" | "ios-pie-chart-sharp" | "ios-pin" | "ios-pin-outline" | "ios-pin-sharp" | "ios-pint" | "ios-pint-outline" | "ios-pint-sharp" | "ios-pizza" | "ios-pizza-outline" | "ios-pizza-sharp" | "ios-planet" | "ios-planet-outline" | "ios-planet-sharp" | "ios-play" | "ios-play-back" | "ios-play-back-circle" | "ios-play-back-circle-outline" | "ios-play-back-circle-sharp" | "ios-play-back-outline" | "ios-play-back-sharp" | "ios-play-circle" | "ios-play-circle-outline" | "ios-play-circle-sharp" | "ios-play-forward" | "ios-play-forward-circle" | "ios-play-forward-circle-outline" | "ios-play-forward-circle-sharp" | "ios-play-forward-outline" | "ios-play-forward-sharp" | "ios-play-outline" | "ios-play-sharp" | "ios-play-skip-back" | "ios-play-skip-back-circle" | "ios-play-skip-back-circle-outline" | "ios-play-skip-back-circle-sharp" | "ios-play-skip-back-outline" | "ios-play-skip-back-sharp" | "ios-play-skip-forward" | "ios-play-skip-forward-circle" | "ios-play-skip-forward-circle-outline" | "ios-play-skip-forward-circle-sharp" | "ios-play-skip-forward-outline" | "ios-play-skip-forward-sharp" | "ios-podium" | "ios-podium-outline" | "ios-podium-sharp" | "ios-power" | "ios-power-outline" | "ios-power-sharp" | "ios-pricetag" | "ios-pricetag-outline" | "ios-pricetag-sharp" | "ios-pricetags" | "ios-pricetags-outline" | "ios-pricetags-sharp" | "ios-print" | "ios-print-outline" | "ios-print-sharp" | "ios-pulse" | "ios-pulse-outline" | "ios-pulse-sharp" | "ios-push" | "ios-push-outline" | "ios-push-sharp" | "ios-qr-code" | "ios-qr-code-outline" | "ios-qr-code-sharp" | "ios-radio" | "ios-radio-button-off" | "ios-radio-button-off-outline" | "ios-radio-button-off-sharp" | "ios-radio-button-on" | "ios-radio-button-on-outline" | "ios-radio-button-on-sharp" | "ios-radio-outline" | "ios-radio-sharp" | "ios-rainy" | "ios-rainy-outline" | "ios-rainy-sharp" | "ios-reader" | "ios-reader-outline" | "ios-reader-sharp" | "ios-receipt" | "ios-receipt-outline" | "ios-receipt-sharp" | "ios-recording" | "ios-recording-outline" | "ios-recording-sharp" | "ios-refresh" | "ios-refresh-circle" | "ios-refresh-circle-outline" | "ios-refresh-circle-sharp" | "ios-refresh-outline" | "ios-refresh-sharp" | "ios-reload" | "ios-reload-circle" | "ios-reload-circle-outline" | "ios-reload-circle-sharp" | "ios-reload-outline" | "ios-reload-sharp" | "ios-remove" | "ios-remove-circle" | "ios-remove-circle-outline" | "ios-remove-circle-sharp" | "ios-remove-outline" | "ios-remove-sharp" | "ios-reorder-four" | "ios-reorder-four-outline" | "ios-reorder-four-sharp" | "ios-reorder-three" | "ios-reorder-three-outline" | "ios-reorder-three-sharp" | "ios-reorder-two" | "ios-reorder-two-outline" | "ios-reorder-two-sharp" | "ios-repeat" | "ios-repeat-outline" | "ios-repeat-sharp" | "ios-resize" | "ios-resize-outline" | "ios-resize-sharp" | "ios-restaurant" | "ios-restaurant-outline" | "ios-restaurant-sharp" | "ios-return-down-back" | "ios-return-down-back-outline" | "ios-return-down-back-sharp" | "ios-return-down-forward" | "ios-return-down-forward-outline" | "ios-return-down-forward-sharp" | "ios-return-up-back" | "ios-return-up-back-outline" | "ios-return-up-back-sharp" | "ios-return-up-forward" | "ios-return-up-forward-outline" | "ios-return-up-forward-sharp" | "ios-ribbon" | "ios-ribbon-outline" | "ios-ribbon-sharp" | "ios-rocket" | "ios-rocket-outline" | "ios-rocket-sharp" | "ios-rose" | "ios-rose-outline" | "ios-rose-sharp" | "ios-sad" | "ios-sad-outline" | "ios-sad-sharp" | "ios-save" | "ios-save-outline" | "ios-save-sharp" | "ios-scan" | "ios-scan-circle" | "ios-scan-circle-outline" | "ios-scan-circle-sharp" | "ios-scan-outline" | "ios-scan-sharp" | "ios-school" | "ios-school-outline" | "ios-school-sharp" | "ios-search" | "ios-search-circle" | "ios-search-circle-outline" | "ios-search-circle-sharp" | "ios-search-outline" | "ios-search-sharp" | "ios-send" | "ios-send-outline" | "ios-send-sharp" | "ios-server" | "ios-server-outline" | "ios-server-sharp" | "ios-settings" | "ios-settings-outline" | "ios-settings-sharp" | "ios-shapes" | "ios-shapes-outline" | "ios-shapes-sharp" | "ios-share" | "ios-share-outline" | "ios-share-sharp" | "ios-share-social" | "ios-share-social-outline" | "ios-share-social-sharp" | "ios-shield" | "ios-shield-checkmark" | "ios-shield-checkmark-outline" | "ios-shield-checkmark-sharp" | "ios-shield-outline" | "ios-shield-sharp" | "ios-shirt" | "ios-shirt-outline" | "ios-shirt-sharp" | "ios-shuffle" | "ios-shuffle-outline" | "ios-shuffle-sharp" | "ios-skull" | "ios-skull-outline" | "ios-skull-sharp" | "ios-snow" | "ios-snow-outline" | "ios-snow-sharp" | "ios-speedometer" | "ios-speedometer-outline" | "ios-speedometer-sharp" | "ios-square" | "ios-square-outline" | "ios-square-sharp" | "ios-star" | "ios-star-half" | "ios-star-half-outline" | "ios-star-half-sharp" | "ios-star-outline" | "ios-star-sharp" | "ios-stats-chart" | "ios-stats-chart-outline" | "ios-stats-chart-sharp" | "ios-stop" | "ios-stop-circle" | "ios-stop-circle-outline" | "ios-stop-circle-sharp" | "ios-stop-outline" | "ios-stop-sharp" | "ios-stopwatch" | "ios-stopwatch-outline" | "ios-stopwatch-sharp" | "ios-subway" | "ios-subway-outline" | "ios-subway-sharp" | "ios-sunny" | "ios-sunny-outline" | "ios-sunny-sharp" | "ios-swap-horizontal" | "ios-swap-horizontal-outline" | "ios-swap-horizontal-sharp" | "ios-swap-vertical" | "ios-swap-vertical-outline" | "ios-swap-vertical-sharp" | "ios-sync" | "ios-sync-circle" | "ios-sync-circle-outline" | "ios-sync-circle-sharp" | "ios-sync-outline" | "ios-sync-sharp" | "ios-tablet-landscape" | "ios-tablet-landscape-outline" | "ios-tablet-landscape-sharp" | "ios-tablet-portrait" | "ios-tablet-portrait-outline" | "ios-tablet-portrait-sharp" | "ios-tennisball" | "ios-tennisball-outline" | "ios-tennisball-sharp" | "ios-terminal" | "ios-terminal-outline" | "ios-terminal-sharp" | "ios-text" | "ios-text-outline" | "ios-text-sharp" | "ios-thermometer" | "ios-thermometer-outline" | "ios-thermometer-sharp" | "ios-thumbs-down" | "ios-thumbs-down-outline" | "ios-thumbs-down-sharp" | "ios-thumbs-up" | "ios-thumbs-up-outline" | "ios-thumbs-up-sharp" | "ios-thunderstorm" | "ios-thunderstorm-outline" | "ios-thunderstorm-sharp" | "ios-time" | "ios-time-outline" | "ios-time-sharp" | "ios-timer" | "ios-timer-outline" | "ios-timer-sharp" | "ios-today" | "ios-today-outline" | "ios-today-sharp" | "ios-toggle" | "ios-toggle-outline" | "ios-toggle-sharp" | "ios-trail-sign" | "ios-trail-sign-outline" | "ios-trail-sign-sharp" | "ios-train" | "ios-train-outline" | "ios-train-sharp" | "ios-transgender" | "ios-transgender-outline" | "ios-transgender-sharp" | "ios-trash" | "ios-trash-bin" | "ios-trash-bin-outline" | "ios-trash-bin-sharp" | "ios-trash-outline" | "ios-trash-sharp" | "ios-trending-down" | "ios-trending-down-outline" | "ios-trending-down-sharp" | "ios-trending-up" | "ios-trending-up-outline" | "ios-trending-up-sharp" | "ios-triangle" | "ios-triangle-outline" | "ios-triangle-sharp" | "ios-trophy" | "ios-trophy-outline" | "ios-trophy-sharp" | "ios-tv" | "ios-tv-outline" | "ios-tv-sharp" | "ios-umbrella" | "ios-umbrella-outline" | "ios-umbrella-sharp" | "ios-videocam" | "ios-videocam-outline" | "ios-videocam-sharp" | "ios-volume-high" | "ios-volume-high-outline" | "ios-volume-high-sharp" | "ios-volume-low" | "ios-volume-low-outline" | "ios-volume-low-sharp" | "ios-volume-medium" | "ios-volume-medium-outline" | "ios-volume-medium-sharp" | "ios-volume-mute" | "ios-volume-mute-outline" | "ios-volume-mute-sharp" | "ios-volume-off" | "ios-volume-off-outline" | "ios-volume-off-sharp" | "ios-walk" | "ios-walk-outline" | "ios-walk-sharp" | "ios-wallet" | "ios-wallet-outline" | "ios-wallet-sharp" | "ios-warning" | "ios-warning-outline" | "ios-warning-sharp" | "ios-watch" | "ios-watch-outline" | "ios-watch-sharp" | "ios-water" | "ios-water-outline" | "ios-water-sharp" | "ios-wifi" | "ios-wifi-outline" | "ios-wifi-sharp" | "ios-wine" | "ios-wine-outline" | "ios-wine-sharp" | "ios-woman" | "ios-woman-outline" | "ios-woman-sharp" | "md-add" | "md-add-circle" | "md-add-circle-outline" | "md-add-circle-sharp" | "md-add-outline" | "md-add-sharp" | "md-airplane" | "md-airplane-outline" | "md-airplane-sharp" | "md-alarm" | "md-alarm-outline" | "md-alarm-sharp" | "md-albums" | "md-albums-outline" | "md-albums-sharp" | "md-alert" | "md-alert-circle" | "md-alert-circle-outline" | "md-alert-circle-sharp" | "md-alert-outline" | "md-alert-sharp" | "md-american-football" | "md-american-football-outline" | "md-american-football-sharp" | "md-analytics" | "md-analytics-outline" | "md-analytics-sharp" | "md-aperture" | "md-aperture-outline" | "md-aperture-sharp" | "md-apps" | "md-apps-outline" | "md-apps-sharp" | "md-archive" | "md-archive-outline" | "md-archive-sharp" | "md-arrow-back" | "md-arrow-back-circle" | "md-arrow-back-circle-outline" | "md-arrow-back-circle-sharp" | "md-arrow-back-outline" | "md-arrow-back-sharp" | "md-arrow-down" | "md-arrow-down-circle" | "md-arrow-down-circle-outline" | "md-arrow-down-circle-sharp" | "md-arrow-down-outline" | "md-arrow-down-sharp" | "md-arrow-forward" | "md-arrow-forward-circle" | "md-arrow-forward-circle-outline" | "md-arrow-forward-circle-sharp" | "md-arrow-forward-outline" | "md-arrow-forward-sharp" | "md-arrow-redo" | "md-arrow-redo-circle" | "md-arrow-redo-circle-outline" | "md-arrow-redo-circle-sharp" | "md-arrow-redo-outline" | "md-arrow-redo-sharp" | "md-arrow-undo" | "md-arrow-undo-circle" | "md-arrow-undo-circle-outline" | "md-arrow-undo-circle-sharp" | "md-arrow-undo-outline" | "md-arrow-undo-sharp" | "md-arrow-up" | "md-arrow-up-circle" | "md-arrow-up-circle-outline" | "md-arrow-up-circle-sharp" | "md-arrow-up-outline" | "md-arrow-up-sharp" | "md-at" | "md-at-circle" | "md-at-circle-outline" | "md-at-circle-sharp" | "md-at-outline" | "md-at-sharp" | "md-attach" | "md-attach-outline" | "md-attach-sharp" | "md-backspace" | "md-backspace-outline" | "md-backspace-sharp" | "md-bandage" | "md-bandage-outline" | "md-bandage-sharp" | "md-bar-chart" | "md-bar-chart-outline" | "md-bar-chart-sharp" | "md-barbell" | "md-barbell-outline" | "md-barbell-sharp" | "md-barcode" | "md-barcode-outline" | "md-barcode-sharp" | "md-baseball" | "md-baseball-outline" | "md-baseball-sharp" | "md-basket" | "md-basket-outline" | "md-basket-sharp" | "md-basketball" | "md-basketball-outline" | "md-basketball-sharp" | "md-battery-charging" | "md-battery-charging-outline" | "md-battery-charging-sharp" | "md-battery-dead" | "md-battery-dead-outline" | "md-battery-dead-sharp" | "md-battery-full" | "md-battery-full-outline" | "md-battery-full-sharp" | "md-battery-half" | "md-battery-half-outline" | "md-battery-half-sharp" | "md-beaker" | "md-beaker-outline" | "md-beaker-sharp" | "md-bed" | "md-bed-outline" | "md-bed-sharp" | "md-beer" | "md-beer-outline" | "md-beer-sharp" | "md-bicycle" | "md-bicycle-outline" | "md-bicycle-sharp" | "md-bluetooth" | "md-bluetooth-outline" | "md-bluetooth-sharp" | "md-boat" | "md-boat-outline" | "md-boat-sharp" | "md-body" | "md-body-outline" | "md-body-sharp" | "md-bonfire" | "md-bonfire-outline" | "md-bonfire-sharp" | "md-book" | "md-book-outline" | "md-book-sharp" | "md-bookmark" | "md-bookmark-outline" | "md-bookmark-sharp" | "md-bookmarks" | "md-bookmarks-outline" | "md-bookmarks-sharp" | "md-briefcase" | "md-briefcase-outline" | "md-briefcase-sharp" | "md-browsers" | "md-browsers-outline" | "md-browsers-sharp" | "md-brush" | "md-brush-outline" | "md-brush-sharp" | "md-bug" | "md-bug-outline" | "md-bug-sharp" | "md-build" | "md-build-outline" | "md-build-sharp" | "md-bulb" | "md-bulb-outline" | "md-bulb-sharp" | "md-bus" | "md-bus-outline" | "md-bus-sharp" | "md-business" | "md-business-outline" | "md-business-sharp" | "md-cafe" | "md-cafe-outline" | "md-cafe-sharp" | "md-calculator" | "md-calculator-outline" | "md-calculator-sharp" | "md-calendar" | "md-calendar-outline" | "md-calendar-sharp" | "md-call" | "md-call-outline" | "md-call-sharp" | "md-camera" | "md-camera-outline" | "md-camera-reverse" | "md-camera-reverse-outline" | "md-camera-reverse-sharp" | "md-camera-sharp" | "md-car" | "md-car-outline" | "md-car-sharp" | "md-car-sport" | "md-car-sport-outline" | "md-car-sport-sharp" | "md-card" | "md-card-outline" | "md-card-sharp" | "md-caret-back" | "md-caret-back-circle" | "md-caret-back-circle-outline" | "md-caret-back-circle-sharp" | "md-caret-back-outline" | "md-caret-back-sharp" | "md-caret-down" | "md-caret-down-circle" | "md-caret-down-circle-outline" | "md-caret-down-circle-sharp" | "md-caret-down-outline" | "md-caret-down-sharp" | "md-caret-forward" | "md-caret-forward-circle" | "md-caret-forward-circle-outline" | "md-caret-forward-circle-sharp" | "md-caret-forward-outline" | "md-caret-forward-sharp" | "md-caret-up" | "md-caret-up-circle" | "md-caret-up-circle-outline" | "md-caret-up-circle-sharp" | "md-caret-up-outline" | "md-caret-up-sharp" | "md-cart" | "md-cart-outline" | "md-cart-sharp" | "md-cash" | "md-cash-outline" | "md-cash-sharp" | "md-cellular" | "md-cellular-outline" | "md-cellular-sharp" | "md-chatbox" | "md-chatbox-ellipses" | "md-chatbox-ellipses-outline" | "md-chatbox-ellipses-sharp" | "md-chatbox-outline" | "md-chatbox-sharp" | "md-chatbubble" | "md-chatbubble-ellipses" | "md-chatbubble-ellipses-outline" | "md-chatbubble-ellipses-sharp" | "md-chatbubble-outline" | "md-chatbubble-sharp" | "md-chatbubbles" | "md-chatbubbles-outline" | "md-chatbubbles-sharp" | "md-checkbox" | "md-checkbox-outline" | "md-checkbox-sharp" | "md-checkmark" | "md-checkmark-circle" | "md-checkmark-circle-outline" | "md-checkmark-circle-sharp" | "md-checkmark-done" | "md-checkmark-done-circle" | "md-checkmark-done-circle-outline" | "md-checkmark-done-circle-sharp" | "md-checkmark-done-outline" | "md-checkmark-done-sharp" | "md-checkmark-outline" | "md-checkmark-sharp" | "md-chevron-back" | "md-chevron-back-circle" | "md-chevron-back-circle-outline" | "md-chevron-back-circle-sharp" | "md-chevron-back-outline" | "md-chevron-back-sharp" | "md-chevron-down" | "md-chevron-down-circle" | "md-chevron-down-circle-outline" | "md-chevron-down-circle-sharp" | "md-chevron-down-outline" | "md-chevron-down-sharp" | "md-chevron-forward" | "md-chevron-forward-circle" | "md-chevron-forward-circle-outline" | "md-chevron-forward-circle-sharp" | "md-chevron-forward-outline" | "md-chevron-forward-sharp" | "md-chevron-up" | "md-chevron-up-circle" | "md-chevron-up-circle-outline" | "md-chevron-up-circle-sharp" | "md-chevron-up-outline" | "md-chevron-up-sharp" | "md-clipboard" | "md-clipboard-outline" | "md-clipboard-sharp" | "md-close" | "md-close-circle" | "md-close-circle-outline" | "md-close-circle-sharp" | "md-close-outline" | "md-close-sharp" | "md-cloud" | "md-cloud-circle" | "md-cloud-circle-outline" | "md-cloud-circle-sharp" | "md-cloud-done" | "md-cloud-done-outline" | "md-cloud-done-sharp" | "md-cloud-download" | "md-cloud-download-outline" | "md-cloud-download-sharp" | "md-cloud-offline" | "md-cloud-offline-outline" | "md-cloud-offline-sharp" | "md-cloud-outline" | "md-cloud-sharp" | "md-cloud-upload" | "md-cloud-upload-outline" | "md-cloud-upload-sharp" | "md-cloudy" | "md-cloudy-night" | "md-cloudy-night-outline" | "md-cloudy-night-sharp" | "md-cloudy-outline" | "md-cloudy-sharp" | "md-code" | "md-code-download" | "md-code-download-outline" | "md-code-download-sharp" | "md-code-outline" | "md-code-sharp" | "md-code-slash" | "md-code-slash-outline" | "md-code-slash-sharp" | "md-code-working" | "md-code-working-outline" | "md-code-working-sharp" | "md-cog" | "md-cog-outline" | "md-cog-sharp" | "md-color-fill" | "md-color-fill-outline" | "md-color-fill-sharp" | "md-color-filter" | "md-color-filter-outline" | "md-color-filter-sharp" | "md-color-palette" | "md-color-palette-outline" | "md-color-palette-sharp" | "md-color-wand" | "md-color-wand-outline" | "md-color-wand-sharp" | "md-compass" | "md-compass-outline" | "md-compass-sharp" | "md-construct" | "md-construct-outline" | "md-construct-sharp" | "md-contract" | "md-contract-outline" | "md-contract-sharp" | "md-contrast" | "md-contrast-outline" | "md-contrast-sharp" | "md-copy" | "md-copy-outline" | "md-copy-sharp" | "md-create" | "md-create-outline" | "md-create-sharp" | "md-crop" | "md-crop-outline" | "md-crop-sharp" | "md-cube" | "md-cube-outline" | "md-cube-sharp" | "md-cut" | "md-cut-outline" | "md-cut-sharp" | "md-desktop" | "md-desktop-outline" | "md-desktop-sharp" | "md-disc" | "md-disc-outline" | "md-disc-sharp" | "md-document" | "md-document-attach" | "md-document-attach-outline" | "md-document-attach-sharp" | "md-document-outline" | "md-document-sharp" | "md-document-text" | "md-document-text-outline" | "md-document-text-sharp" | "md-documents" | "md-documents-outline" | "md-documents-sharp" | "md-download" | "md-download-outline" | "md-download-sharp" | "md-duplicate" | "md-duplicate-outline" | "md-duplicate-sharp" | "md-ear" | "md-ear-outline" | "md-ear-sharp" | "md-earth" | "md-earth-outline" | "md-earth-sharp" | "md-easel" | "md-easel-outline" | "md-easel-sharp" | "md-egg" | "md-egg-outline" | "md-egg-sharp" | "md-ellipse" | "md-ellipse-outline" | "md-ellipse-sharp" | "md-ellipsis-horizontal" | "md-ellipsis-horizontal-circle" | "md-ellipsis-horizontal-circle-outline" | "md-ellipsis-horizontal-circle-sharp" | "md-ellipsis-horizontal-outline" | "md-ellipsis-horizontal-sharp" | "md-ellipsis-vertical" | "md-ellipsis-vertical-circle" | "md-ellipsis-vertical-circle-outline" | "md-ellipsis-vertical-circle-sharp" | "md-ellipsis-vertical-outline" | "md-ellipsis-vertical-sharp" | "md-enter" | "md-enter-outline" | "md-enter-sharp" | "md-exit" | "md-exit-outline" | "md-exit-sharp" | "md-expand" | "md-expand-outline" | "md-expand-sharp" | "md-eye" | "md-eye-off" | "md-eye-off-outline" | "md-eye-off-sharp" | "md-eye-outline" | "md-eye-sharp" | "md-eyedrop" | "md-eyedrop-outline" | "md-eyedrop-sharp" | "md-fast-food" | "md-fast-food-outline" | "md-fast-food-sharp" | "md-female" | "md-female-outline" | "md-female-sharp" | "md-file-tray" | "md-file-tray-full" | "md-file-tray-full-outline" | "md-file-tray-full-sharp" | "md-file-tray-outline" | "md-file-tray-sharp" | "md-file-tray-stacked" | "md-file-tray-stacked-outline" | "md-file-tray-stacked-sharp" | "md-film" | "md-film-outline" | "md-film-sharp" | "md-filter" | "md-filter-outline" | "md-filter-sharp" | "md-finger-print" | "md-finger-print-outline" | "md-finger-print-sharp" | "md-fitness" | "md-fitness-outline" | "md-fitness-sharp" | "md-flag" | "md-flag-outline" | "md-flag-sharp" | "md-flame" | "md-flame-outline" | "md-flame-sharp" | "md-flash" | "md-flash-off" | "md-flash-off-outline" | "md-flash-off-sharp" | "md-flash-outline" | "md-flash-sharp" | "md-flashlight" | "md-flashlight-outline" | "md-flashlight-sharp" | "md-flask" | "md-flask-outline" | "md-flask-sharp" | "md-flower" | "md-flower-outline" | "md-flower-sharp" | "md-folder" | "md-folder-open" | "md-folder-open-outline" | "md-folder-open-sharp" | "md-folder-outline" | "md-folder-sharp" | "md-football" | "md-football-outline" | "md-football-sharp" | "md-funnel" | "md-funnel-outline" | "md-funnel-sharp" | "md-game-controller" | "md-game-controller-outline" | "md-game-controller-sharp" | "md-gift" | "md-gift-outline" | "md-gift-sharp" | "md-git-branch" | "md-git-branch-outline" | "md-git-branch-sharp" | "md-git-commit" | "md-git-commit-outline" | "md-git-commit-sharp" | "md-git-compare" | "md-git-compare-outline" | "md-git-compare-sharp" | "md-git-merge" | "md-git-merge-outline" | "md-git-merge-sharp" | "md-git-network" | "md-git-network-outline" | "md-git-network-sharp" | "md-git-pull-request" | "md-git-pull-request-outline" | "md-git-pull-request-sharp" | "md-glasses" | "md-glasses-outline" | "md-glasses-sharp" | "md-globe" | "md-globe-outline" | "md-globe-sharp" | "md-golf" | "md-golf-outline" | "md-golf-sharp" | "md-grid" | "md-grid-outline" | "md-grid-sharp" | "md-hammer" | "md-hammer-outline" | "md-hammer-sharp" | "md-hand-left" | "md-hand-left-outline" | "md-hand-left-sharp" | "md-hand-right" | "md-hand-right-outline" | "md-hand-right-sharp" | "md-happy" | "md-happy-outline" | "md-happy-sharp" | "md-hardware-chip" | "md-hardware-chip-outline" | "md-hardware-chip-sharp" | "md-headset" | "md-headset-outline" | "md-headset-sharp" | "md-heart" | "md-heart-circle" | "md-heart-circle-outline" | "md-heart-circle-sharp" | "md-heart-dislike" | "md-heart-dislike-circle" | "md-heart-dislike-circle-outline" | "md-heart-dislike-circle-sharp" | "md-heart-dislike-outline" | "md-heart-dislike-sharp" | "md-heart-half" | "md-heart-half-outline" | "md-heart-half-sharp" | "md-heart-outline" | "md-heart-sharp" | "md-help" | "md-help-buoy" | "md-help-buoy-outline" | "md-help-buoy-sharp" | "md-help-circle" | "md-help-circle-outline" | "md-help-circle-sharp" | "md-help-outline" | "md-help-sharp" | "md-home" | "md-home-outline" | "md-home-sharp" | "md-hourglass" | "md-hourglass-outline" | "md-hourglass-sharp" | "md-ice-cream" | "md-ice-cream-outline" | "md-ice-cream-sharp" | "md-image" | "md-image-outline" | "md-image-sharp" | "md-images" | "md-images-outline" | "md-images-sharp" | "md-infinite" | "md-infinite-outline" | "md-infinite-sharp" | "md-information" | "md-information-circle" | "md-information-circle-outline" | "md-information-circle-sharp" | "md-information-outline" | "md-information-sharp" | "md-journal" | "md-journal-outline" | "md-journal-sharp" | "md-key" | "md-key-outline" | "md-key-sharp" | "md-keypad" | "md-keypad-outline" | "md-keypad-sharp" | "md-language" | "md-language-outline" | "md-language-sharp" | "md-laptop" | "md-laptop-outline" | "md-laptop-sharp" | "md-layers" | "md-layers-outline" | "md-layers-sharp" | "md-leaf" | "md-leaf-outline" | "md-leaf-sharp" | "md-library" | "md-library-outline" | "md-library-sharp" | "md-link" | "md-link-outline" | "md-link-sharp" | "md-list" | "md-list-circle" | "md-list-circle-outline" | "md-list-circle-sharp" | "md-list-outline" | "md-list-sharp" | "md-locate" | "md-locate-outline" | "md-locate-sharp" | "md-location" | "md-location-outline" | "md-location-sharp" | "md-lock-closed" | "md-lock-closed-outline" | "md-lock-closed-sharp" | "md-lock-open" | "md-lock-open-outline" | "md-lock-open-sharp" | "md-log-in" | "md-log-in-outline" | "md-log-in-sharp" | "md-log-out" | "md-log-out-outline" | "md-log-out-sharp" | "md-logo-amazon" | "md-logo-amplify" | "md-logo-android" | "md-logo-angular" | "md-logo-apple" | "md-logo-apple-appstore" | "md-logo-bitbucket" | "md-logo-bitcoin" | "md-logo-buffer" | "md-logo-capacitor" | "md-logo-chrome" | "md-logo-closed-captioning" | "md-logo-codepen" | "md-logo-css3" | "md-logo-designernews" | "md-logo-dribbble" | "md-logo-dropbox" | "md-logo-edge" | "md-logo-electron" | "md-logo-euro" | "md-logo-facebook" | "md-logo-firebase" | "md-logo-firefox" | "md-logo-flickr" | "md-logo-foursquare" | "md-logo-github" | "md-logo-google" | "md-logo-google-playstore" | "md-logo-hackernews" | "md-logo-html5" | "md-logo-instagram" | "md-logo-ionic" | "md-logo-ionitron" | "md-logo-javascript" | "md-logo-laravel" | "md-logo-linkedin" | "md-logo-markdown" | "md-logo-no-smoking" | "md-logo-nodejs" | "md-logo-npm" | "md-logo-octocat" | "md-logo-pinterest" | "md-logo-playstation" | "md-logo-pwa" | "md-logo-python" | "md-logo-react" | "md-logo-reddit" | "md-logo-rss" | "md-logo-sass" | "md-logo-skype" | "md-logo-slack" | "md-logo-snapchat" | "md-logo-stackoverflow" | "md-logo-steam" | "md-logo-stencil" | "md-logo-tumblr" | "md-logo-tux" | "md-logo-twitch" | "md-logo-twitter" | "md-logo-usd" | "md-logo-vimeo" | "md-logo-vk" | "md-logo-vue" | "md-logo-web-component" | "md-logo-whatsapp" | "md-logo-windows" | "md-logo-wordpress" | "md-logo-xbox" | "md-logo-xing" | "md-logo-yahoo" | "md-logo-yen" | "md-logo-youtube" | "md-magnet" | "md-magnet-outline" | "md-magnet-sharp" | "md-mail" | "md-mail-open" | "md-mail-open-outline" | "md-mail-open-sharp" | "md-mail-outline" | "md-mail-sharp" | "md-mail-unread" | "md-mail-unread-outline" | "md-mail-unread-sharp" | "md-male" | "md-male-female" | "md-male-female-outline" | "md-male-female-sharp" | "md-male-outline" | "md-male-sharp" | "md-man" | "md-man-outline" | "md-man-sharp" | "md-map" | "md-map-outline" | "md-map-sharp" | "md-medal" | "md-medal-outline" | "md-medal-sharp" | "md-medical" | "md-medical-outline" | "md-medical-sharp" | "md-medkit" | "md-medkit-outline" | "md-medkit-sharp" | "md-megaphone" | "md-megaphone-outline" | "md-megaphone-sharp" | "md-menu" | "md-menu-outline" | "md-menu-sharp" | "md-mic" | "md-mic-circle" | "md-mic-circle-outline" | "md-mic-circle-sharp" | "md-mic-off" | "md-mic-off-circle" | "md-mic-off-circle-outline" | "md-mic-off-circle-sharp" | "md-mic-off-outline" | "md-mic-off-sharp" | "md-mic-outline" | "md-mic-sharp" | "md-moon" | "md-moon-outline" | "md-moon-sharp" | "md-move" | "md-move-outline" | "md-move-sharp" | "md-musical-note" | "md-musical-note-outline" | "md-musical-note-sharp" | "md-musical-notes" | "md-musical-notes-outline" | "md-musical-notes-sharp" | "md-navigate" | "md-navigate-circle" | "md-navigate-circle-outline" | "md-navigate-circle-sharp" | "md-navigate-outline" | "md-navigate-sharp" | "md-newspaper" | "md-newspaper-outline" | "md-newspaper-sharp" | "md-notifications" | "md-notifications-circle" | "md-notifications-circle-outline" | "md-notifications-circle-sharp" | "md-notifications-off" | "md-notifications-off-circle" | "md-notifications-off-circle-outline" | "md-notifications-off-circle-sharp" | "md-notifications-off-outline" | "md-notifications-off-sharp" | "md-notifications-outline" | "md-notifications-sharp" | "md-nuclear" | "md-nuclear-outline" | "md-nuclear-sharp" | "md-nutrition" | "md-nutrition-outline" | "md-nutrition-sharp" | "md-open" | "md-open-outline" | "md-open-sharp" | "md-options" | "md-options-outline" | "md-options-sharp" | "md-paper-plane" | "md-paper-plane-outline" | "md-paper-plane-sharp" | "md-partly-sunny" | "md-partly-sunny-outline" | "md-partly-sunny-sharp" | "md-pause" | "md-pause-circle" | "md-pause-circle-outline" | "md-pause-circle-sharp" | "md-pause-outline" | "md-pause-sharp" | "md-paw" | "md-paw-outline" | "md-paw-sharp" | "md-pencil" | "md-pencil-outline" | "md-pencil-sharp" | "md-people" | "md-people-circle" | "md-people-circle-outline" | "md-people-circle-sharp" | "md-people-outline" | "md-people-sharp" | "md-person" | "md-person-add" | "md-person-add-outline" | "md-person-add-sharp" | "md-person-circle" | "md-person-circle-outline" | "md-person-circle-sharp" | "md-person-outline" | "md-person-remove" | "md-person-remove-outline" | "md-person-remove-sharp" | "md-person-sharp" | "md-phone-landscape" | "md-phone-landscape-outline" | "md-phone-landscape-sharp" | "md-phone-portrait" | "md-phone-portrait-outline" | "md-phone-portrait-sharp" | "md-pie-chart" | "md-pie-chart-outline" | "md-pie-chart-sharp" | "md-pin" | "md-pin-outline" | "md-pin-sharp" | "md-pint" | "md-pint-outline" | "md-pint-sharp" | "md-pizza" | "md-pizza-outline" | "md-pizza-sharp" | "md-planet" | "md-planet-outline" | "md-planet-sharp" | "md-play" | "md-play-back" | "md-play-back-circle" | "md-play-back-circle-outline" | "md-play-back-circle-sharp" | "md-play-back-outline" | "md-play-back-sharp" | "md-play-circle" | "md-play-circle-outline" | "md-play-circle-sharp" | "md-play-forward" | "md-play-forward-circle" | "md-play-forward-circle-outline" | "md-play-forward-circle-sharp" | "md-play-forward-outline" | "md-play-forward-sharp" | "md-play-outline" | "md-play-sharp" | "md-play-skip-back" | "md-play-skip-back-circle" | "md-play-skip-back-circle-outline" | "md-play-skip-back-circle-sharp" | "md-play-skip-back-outline" | "md-play-skip-back-sharp" | "md-play-skip-forward" | "md-play-skip-forward-circle" | "md-play-skip-forward-circle-outline" | "md-play-skip-forward-circle-sharp" | "md-play-skip-forward-outline" | "md-play-skip-forward-sharp" | "md-podium" | "md-podium-outline" | "md-podium-sharp" | "md-power" | "md-power-outline" | "md-power-sharp" | "md-pricetag" | "md-pricetag-outline" | "md-pricetag-sharp" | "md-pricetags" | "md-pricetags-outline" | "md-pricetags-sharp" | "md-print" | "md-print-outline" | "md-print-sharp" | "md-pulse" | "md-pulse-outline" | "md-pulse-sharp" | "md-push" | "md-push-outline" | "md-push-sharp" | "md-qr-code" | "md-qr-code-outline" | "md-qr-code-sharp" | "md-radio" | "md-radio-button-off" | "md-radio-button-off-outline" | "md-radio-button-off-sharp" | "md-radio-button-on" | "md-radio-button-on-outline" | "md-radio-button-on-sharp" | "md-radio-outline" | "md-radio-sharp" | "md-rainy" | "md-rainy-outline" | "md-rainy-sharp" | "md-reader" | "md-reader-outline" | "md-reader-sharp" | "md-receipt" | "md-receipt-outline" | "md-receipt-sharp" | "md-recording" | "md-recording-outline" | "md-recording-sharp" | "md-refresh" | "md-refresh-circle" | "md-refresh-circle-outline" | "md-refresh-circle-sharp" | "md-refresh-outline" | "md-refresh-sharp" | "md-reload" | "md-reload-circle" | "md-reload-circle-outline" | "md-reload-circle-sharp" | "md-reload-outline" | "md-reload-sharp" | "md-remove" | "md-remove-circle" | "md-remove-circle-outline" | "md-remove-circle-sharp" | "md-remove-outline" | "md-remove-sharp" | "md-reorder-four" | "md-reorder-four-outline" | "md-reorder-four-sharp" | "md-reorder-three" | "md-reorder-three-outline" | "md-reorder-three-sharp" | "md-reorder-two" | "md-reorder-two-outline" | "md-reorder-two-sharp" | "md-repeat" | "md-repeat-outline" | "md-repeat-sharp" | "md-resize" | "md-resize-outline" | "md-resize-sharp" | "md-restaurant" | "md-restaurant-outline" | "md-restaurant-sharp" | "md-return-down-back" | "md-return-down-back-outline" | "md-return-down-back-sharp" | "md-return-down-forward" | "md-return-down-forward-outline" | "md-return-down-forward-sharp" | "md-return-up-back" | "md-return-up-back-outline" | "md-return-up-back-sharp" | "md-return-up-forward" | "md-return-up-forward-outline" | "md-return-up-forward-sharp" | "md-ribbon" | "md-ribbon-outline" | "md-ribbon-sharp" | "md-rocket" | "md-rocket-outline" | "md-rocket-sharp" | "md-rose" | "md-rose-outline" | "md-rose-sharp" | "md-sad" | "md-sad-outline" | "md-sad-sharp" | "md-save" | "md-save-outline" | "md-save-sharp" | "md-scan" | "md-scan-circle" | "md-scan-circle-outline" | "md-scan-circle-sharp" | "md-scan-outline" | "md-scan-sharp" | "md-school" | "md-school-outline" | "md-school-sharp" | "md-search" | "md-search-circle" | "md-search-circle-outline" | "md-search-circle-sharp" | "md-search-outline" | "md-search-sharp" | "md-send" | "md-send-outline" | "md-send-sharp" | "md-server" | "md-server-outline" | "md-server-sharp" | "md-settings" | "md-settings-outline" | "md-settings-sharp" | "md-shapes" | "md-shapes-outline" | "md-shapes-sharp" | "md-share" | "md-share-outline" | "md-share-sharp" | "md-share-social" | "md-share-social-outline" | "md-share-social-sharp" | "md-shield" | "md-shield-checkmark" | "md-shield-checkmark-outline" | "md-shield-checkmark-sharp" | "md-shield-outline" | "md-shield-sharp" | "md-shirt" | "md-shirt-outline" | "md-shirt-sharp" | "md-shuffle" | "md-shuffle-outline" | "md-shuffle-sharp" | "md-skull" | "md-skull-outline" | "md-skull-sharp" | "md-snow" | "md-snow-outline" | "md-snow-sharp" | "md-speedometer" | "md-speedometer-outline" | "md-speedometer-sharp" | "md-square" | "md-square-outline" | "md-square-sharp" | "md-star" | "md-star-half" | "md-star-half-outline" | "md-star-half-sharp" | "md-star-outline" | "md-star-sharp" | "md-stats-chart" | "md-stats-chart-outline" | "md-stats-chart-sharp" | "md-stop" | "md-stop-circle" | "md-stop-circle-outline" | "md-stop-circle-sharp" | "md-stop-outline" | "md-stop-sharp" | "md-stopwatch" | "md-stopwatch-outline" | "md-stopwatch-sharp" | "md-subway" | "md-subway-outline" | "md-subway-sharp" | "md-sunny" | "md-sunny-outline" | "md-sunny-sharp" | "md-swap-horizontal" | "md-swap-horizontal-outline" | "md-swap-horizontal-sharp" | "md-swap-vertical" | "md-swap-vertical-outline" | "md-swap-vertical-sharp" | "md-sync" | "md-sync-circle" | "md-sync-circle-outline" | "md-sync-circle-sharp" | "md-sync-outline" | "md-sync-sharp" | "md-tablet-landscape" | "md-tablet-landscape-outline" | "md-tablet-landscape-sharp" | "md-tablet-portrait" | "md-tablet-portrait-outline" | "md-tablet-portrait-sharp" | "md-tennisball" | "md-tennisball-outline" | "md-tennisball-sharp" | "md-terminal" | "md-terminal-outline" | "md-terminal-sharp" | "md-text" | "md-text-outline" | "md-text-sharp" | "md-thermometer" | "md-thermometer-outline" | "md-thermometer-sharp" | "md-thumbs-down" | "md-thumbs-down-outline" | "md-thumbs-down-sharp" | "md-thumbs-up" | "md-thumbs-up-outline" | "md-thumbs-up-sharp" | "md-thunderstorm" | "md-thunderstorm-outline" | "md-thunderstorm-sharp" | "md-time" | "md-time-outline" | "md-time-sharp" | "md-timer" | "md-timer-outline" | "md-timer-sharp" | "md-today" | "md-today-outline" | "md-today-sharp" | "md-toggle" | "md-toggle-outline" | "md-toggle-sharp" | "md-trail-sign" | "md-trail-sign-outline" | "md-trail-sign-sharp" | "md-train" | "md-train-outline" | "md-train-sharp" | "md-transgender" | "md-transgender-outline" | "md-transgender-sharp" | "md-trash" | "md-trash-bin" | "md-trash-bin-outline" | "md-trash-bin-sharp" | "md-trash-outline" | "md-trash-sharp" | "md-trending-down" | "md-trending-down-outline" | "md-trending-down-sharp" | "md-trending-up" | "md-trending-up-outline" | "md-trending-up-sharp" | "md-triangle" | "md-triangle-outline" | "md-triangle-sharp" | "md-trophy" | "md-trophy-outline" | "md-trophy-sharp" | "md-tv" | "md-tv-outline" | "md-tv-sharp" | "md-umbrella" | "md-umbrella-outline" | "md-umbrella-sharp" | "md-videocam" | "md-videocam-outline" | "md-videocam-sharp" | "md-volume-high" | "md-volume-high-outline" | "md-volume-high-sharp" | "md-volume-low" | "md-volume-low-outline" | "md-volume-low-sharp" | "md-volume-medium" | "md-volume-medium-outline" | "md-volume-medium-sharp" | "md-volume-mute" | "md-volume-mute-outline" | "md-volume-mute-sharp" | "md-volume-off" | "md-volume-off-outline" | "md-volume-off-sharp" | "md-walk" | "md-walk-outline" | "md-walk-sharp" | "md-wallet" | "md-wallet-outline" | "md-wallet-sharp" | "md-warning" | "md-warning-outline" | "md-warning-sharp" | "md-watch" | "md-watch-outline" | "md-watch-sharp" | "md-water" | "md-water-outline" | "md-water-sharp" | "md-wifi" | "md-wifi-outline" | "md-wifi-sharp" | "md-wine" | "md-wine-outline" | "md-wine-sharp" | "md-woman" | "md-woman-outline" | "md-woman-sharp";

type NameOfMaterialIcon = "style" | "accessible" | "link" | "email" | "search" | "image" | "menu" | "radio" | "tab" | "timer" | "article" | "code" | "details" | "input" | "label" | "map" | "source" | "title" | "circle" | "filter" | "stop" | "forward" | "info" | "check" | "close" | "book" | "pause" | "mail" | "home" | "laptop" | "star" | "save" | "phone" | "inbox" | "lock" | "cloud" | "camera" | "delete" | "tag" | "flag" | "android" | "copyright" | "wifi" | "sync" | "login" | "logout" | "contacts" | "edit" | "warning" | "dashboard" | "adjust" | "archive" | "arrow-left" | "arrow-right" | "attachment" | "block" | "bookmark" | "bookmarks" | "brush" | "cake" | "chat" | "chevron-left" | "chevron-right" | "credit-card" | "crop" | "facebook" | "fingerprint" | "folder" | "help" | "keyboard" | "language" | "layers" | "list" | "location-pin" | "lock-open" | "loop" | "message" | "mic" | "mouse" | "note" | "notifications-off" | "palette" | "pie-chart" | "print" | "publish" | "reply" | "reply-all" | "share" | "shield" | "shop" | "shopping-bag" | "shopping-basket" | "shopping-cart" | "shuffle" | "tablet" | "tv" | "voicemail" | "comment" | "redo" | "refresh" | "undo" | "airplay" | "anchor" | "bar-chart" | "bluetooth" | "cast" | "check-circle" | "cloud-off" | "fast-forward" | "maximize" | "mic-off" | "minimize" | "monitor" | "navigation" | "phone-forwarded" | "phone-missed" | "power" | "repeat" | "send" | "settings" | "smartphone" | "speaker" | "stop-circle" | "trending-down" | "trending-up" | "umbrella" | "watch" | "wifi-off" | "zoom-in" | "zoom-out" | "remove" | "power-off" | "rotate-right" | "list-alt" | "volume-off" | "volume-down" | "volume-up" | "photo" | "eject" | "expand" | "compress" | "folder-open" | "star-half" | "arrow-circle-up" | "arrow-circle-down" | "group" | "reorder" | "money" | "sort" | "rotate-left" | "gavel" | "bolt" | "cloud-download" | "cloud-upload" | "gamepad" | "superscript" | "subscript" | "fire-extinguisher" | "euro" | "support" | "history" | "tty" | "toggle-off" | "toggle-on" | "motorcycle" | "hotel" | "train" | "subway" | "battery-full" | "usb" | "bathtub" | "web" | "lightbulb" | "backspace" | "border-all" | "border-style" | "charging-station" | "directions" | "file-download" | "file-upload" | "headset" | "hot-tub" | "memory" | "poll" | "portrait" | "receipt" | "satellite" | "school" | "sd-card" | "sim-card" | "sms" | "soap" | "spa" | "store" | "stream" | "sync-alt" | "tram" | "volume-mute" | "messenger" | "favorite" | "person" | "equalizer" | "music-note" | "preview" | "do-not-disturb" | "room" | "closed-caption" | "elevator" | "foundation" | "add" | "add-circle" | "add-circle-outline" | "alarm" | "analytics" | "apps" | "arrow-back" | "arrow-forward" | "bookmark-outline" | "build" | "business" | "call" | "cloud-circle" | "cloud-done" | "create" | "flash-off" | "help-outline" | "mail-outline" | "notifications" | "pause-circle-outline" | "people" | "people-outline" | "person-add" | "person-outline" | "person-remove" | "play-circle-outline" | "qr-code" | "radio-button-off" | "radio-button-on" | "remove-circle" | "remove-circle-outline" | "restaurant" | "star-outline" | "today" | "videocam" | "ios-share" | "account-box" | "account-circle" | "alarm-off" | "album" | "align-horizontal-center" | "align-horizontal-left" | "align-horizontal-right" | "align-vertical-bottom" | "align-vertical-center" | "align-vertical-top" | "all-inclusive" | "animation" | "api" | "aspect-ratio" | "assistant" | "atm" | "autorenew" | "av-timer" | "ballot" | "battery-alert" | "battery-unknown" | "bluetooth-audio" | "blur-linear" | "blur-off" | "border-bottom" | "border-color" | "border-horizontal" | "border-left" | "border-right" | "border-top" | "border-vertical" | "brightness-1" | "brightness-2" | "brightness-3" | "brightness-4" | "brightness-5" | "brightness-6" | "brightness-7" | "brightness-auto" | "bus-alert" | "cached" | "calendar-today" | "call-made" | "call-merge" | "call-missed" | "call-received" | "call-split" | "camera-enhance" | "camera-front" | "camera-rear" | "cancel" | "cast-connected" | "check-circle-outline" | "compare" | "content-copy" | "content-cut" | "content-paste" | "crop-free" | "crop-landscape" | "crop-portrait" | "crop-rotate" | "crop-square" | "delete-forever" | "delete-outline" | "delete-sweep" | "desktop-mac" | "developer-board" | "devices" | "dialpad" | "dns" | "domain" | "escalator" | "ev-station" | "exit-to-app" | "fence" | "find-replace" | "fire-hydrant" | "fireplace" | "flare" | "flash-auto" | "flip-to-back" | "flip-to-front" | "format-align-center" | "format-align-justify" | "format-align-left" | "format-align-right" | "format-bold" | "format-clear" | "format-color-fill" | "format-color-text" | "format-indent-decrease" | "format-indent-increase" | "format-italic" | "format-line-spacing" | "format-list-bulleted" | "format-list-numbered" | "format-list-numbered-rtl" | "format-paint" | "format-size" | "format-strikethrough" | "format-textdirection-l-to-r" | "format-textdirection-r-to-l" | "format-underline" | "forum" | "fullscreen" | "fullscreen-exit" | "gesture" | "grain" | "grass" | "grid-off" | "hail" | "hdr-off" | "headset-off" | "hvac" | "image-search" | "invert-colors" | "invert-colors-off" | "keyboard-backspace" | "keyboard-return" | "keyboard-tab" | "label-off" | "label-outline" | "launch" | "lightbulb-outline" | "link-off" | "liquor" | "lock-clock" | "lock-outline" | "looks" | "loupe" | "margin" | "menu-open" | "microwave" | "moped" | "more" | "movie" | "movie-filter" | "music-off" | "nature" | "nature-people" | "near-me" | "nfc" | "opacity" | "open-in-new" | "panorama" | "panorama-fisheye" | "panorama-horizontal" | "panorama-vertical" | "panorama-wide-angle" | "phone-in-talk" | "phone-paused" | "playlist-play" | "point-of-sale" | "polymer" | "pool" | "priority-high" | "replay" | "restore" | "room-service" | "rounded-corner" | "router" | "rowing" | "scanner" | "scatter-plot" | "screen-rotation" | "sd" | "security" | "segment" | "select-all" | "skip-next" | "skip-previous" | "spellcheck" | "stairs" | "storefront" | "subdirectory-arrow-left" | "subdirectory-arrow-right" | "subtitles" | "surround-sound" | "swap-horizontal-circle" | "swap-vertical-circle" | "tab-unselected" | "tablet-android" | "tag-faces" | "terrain" | "texture" | "thumb-down" | "thumb-up" | "thumbs-up-down" | "timelapse" | "timeline" | "timer-10" | "timer-3" | "timer-off" | "translate" | "trending-neutral" | "tune" | "update" | "view-agenda" | "view-array" | "view-carousel" | "view-column" | "view-comfy" | "view-compact" | "view-day" | "view-headline" | "view-list" | "view-module" | "view-quilt" | "view-stream" | "view-week" | "wallet-giftcard" | "wallet-membership" | "wallet-travel" | "wallpaper" | "waves" | "widgets" | "wifi-lock" | "360" | "10k" | "10mp" | "11mp" | "12mp" | "13mp" | "14mp" | "15mp" | "16mp" | "17mp" | "18mp" | "19mp" | "1k" | "1k-plus" | "20mp" | "21mp" | "22mp" | "23mp" | "24mp" | "2k" | "2k-plus" | "2mp" | "3d-rotation" | "3k" | "3k-plus" | "3mp" | "4k" | "4k-plus" | "4mp" | "5g" | "5k" | "5k-plus" | "5mp" | "6-ft-apart" | "6k" | "6k-plus" | "6mp" | "7k" | "7k-plus" | "7mp" | "8k" | "8k-plus" | "8mp" | "9k" | "9k-plus" | "9mp" | "ac-unit" | "access-alarm" | "access-alarms" | "access-time" | "accessibility" | "accessibility-new" | "accessible-forward" | "account-balance" | "account-balance-wallet" | "account-tree" | "ad-units" | "adb" | "add-a-photo" | "add-alarm" | "add-alert" | "add-box" | "add-business" | "add-call" | "add-chart" | "add-comment" | "add-ic-call" | "add-link" | "add-location" | "add-location-alt" | "add-moderator" | "add-photo-alternate" | "add-road" | "add-shopping-cart" | "add-task" | "add-to-drive" | "add-to-home-screen" | "add-to-photos" | "add-to-queue" | "addchart" | "admin-panel-settings" | "agriculture" | "airline-seat-flat" | "airline-seat-flat-angled" | "airline-seat-individual-suite" | "airline-seat-legroom-extra" | "airline-seat-legroom-normal" | "airline-seat-legroom-reduced" | "airline-seat-recline-extra" | "airline-seat-recline-normal" | "airplanemode-active" | "airplanemode-inactive" | "airplanemode-off" | "airplanemode-on" | "airport-shuttle" | "alarm-add" | "alarm-on" | "all-inbox" | "all-out" | "alt-route" | "alternate-email" | "amp-stories" | "announcement" | "apartment" | "app-blocking" | "app-registration" | "app-settings-alt" | "approval" | "architecture" | "arrow-back-ios" | "arrow-downward" | "arrow-drop-down" | "arrow-drop-down-circle" | "arrow-drop-up" | "arrow-forward-ios" | "arrow-right-alt" | "arrow-upward" | "art-track" | "assessment" | "assignment" | "assignment-ind" | "assignment-late" | "assignment-return" | "assignment-returned" | "assignment-turned-in" | "assistant-direction" | "assistant-navigation" | "assistant-photo" | "attach-email" | "attach-file" | "attach-money" | "attractions" | "audiotrack" | "auto-awesome" | "auto-awesome-mosaic" | "auto-awesome-motion" | "auto-delete" | "auto-fix-high" | "auto-fix-normal" | "auto-fix-off" | "auto-stories" | "baby-changing-station" | "backpack" | "backup" | "backup-table" | "badge" | "bakery-dining" | "batch-prediction" | "battery-charging-full" | "battery-std" | "beach-access" | "bedtime" | "beenhere" | "bento" | "bike-scooter" | "biotech" | "block-flipped" | "bluetooth-connected" | "bluetooth-disabled" | "bluetooth-searching" | "blur-circular" | "blur-on" | "book-online" | "bookmark-border" | "border-clear" | "border-inner" | "border-outer" | "branding-watermark" | "breakfast-dining" | "brightness-high" | "brightness-low" | "brightness-medium" | "broken-image" | "browser-not-supported" | "brunch-dining" | "bubble-chart" | "bug-report" | "build-circle" | "burst-mode" | "business-center" | "calculate" | "calendar-view-day" | "call-end" | "call-missed-outgoing" | "call-to-action" | "camera-alt" | "camera-roll" | "campaign" | "cancel-presentation" | "cancel-schedule-send" | "car-rental" | "car-repair" | "card-giftcard" | "card-membership" | "card-travel" | "carpenter" | "cases" | "casino" | "cast-for-education" | "category" | "celebration" | "cell-wifi" | "center-focus-strong" | "center-focus-weak" | "change-history" | "chat-bubble" | "chat-bubble-outline" | "check-box" | "check-box-outline-blank" | "checkroom" | "child-care" | "child-friendly" | "chrome-reader-mode" | "circle-notifications" | "class" | "clean-hands" | "cleaning-services" | "clear" | "clear-all" | "close-fullscreen" | "closed-caption-disabled" | "closed-caption-off" | "cloud-queue" | "collections" | "collections-bookmark" | "color-lens" | "colorize" | "comment-bank" | "commute" | "compare-arrows" | "compass-calibration" | "computer" | "confirmation-num" | "confirmation-number" | "connect-without-contact" | "connected-tv" | "construction" | "contact-mail" | "contact-page" | "contact-phone" | "contact-support" | "contactless" | "control-camera" | "control-point" | "control-point-duplicate" | "coronavirus" | "corporate-fare" | "countertops" | "create-new-folder" | "crop-16-9" | "crop-3-2" | "crop-5-4" | "crop-7-5" | "crop-din" | "crop-original" | "dangerous" | "dashboard-customize" | "data-usage" | "date-range" | "deck" | "dehaze" | "delivery-dining" | "departure-board" | "description" | "design-services" | "desktop-access-disabled" | "desktop-windows" | "developer-mode" | "device-hub" | "device-thermostat" | "device-unknown" | "devices-other" | "dialer-sip" | "dinner-dining" | "directions-bike" | "directions-boat" | "directions-bus" | "directions-car" | "directions-ferry" | "directions-off" | "directions-railway" | "directions-run" | "directions-subway" | "directions-train" | "directions-transit" | "directions-walk" | "dirty-lens" | "disabled-by-default" | "disc-full" | "dnd-forwardslash" | "do-not-disturb-alt" | "do-not-disturb-off" | "do-not-disturb-on" | "do-not-step" | "do-not-touch" | "dock" | "domain-disabled" | "domain-verification" | "done" | "done-all" | "done-outline" | "donut-large" | "donut-small" | "double-arrow" | "drafts" | "drag-handle" | "drag-indicator" | "drive-eta" | "drive-file-move" | "drive-file-move-outline" | "drive-file-rename-outline" | "drive-folder-upload" | "dry" | "dry-cleaning" | "duo" | "dvr" | "dynamic-feed" | "dynamic-form" | "east" | "eco" | "edit-attributes" | "edit-location" | "edit-off" | "edit-road" | "elderly" | "electric-bike" | "electric-car" | "electric-moped" | "electric-rickshaw" | "electric-scooter" | "electrical-services" | "emoji-emotions" | "emoji-events" | "emoji-flags" | "emoji-food-beverage" | "emoji-nature" | "emoji-objects" | "emoji-people" | "emoji-symbols" | "emoji-transportation" | "engineering" | "enhance-photo-translate" | "enhanced-encryption" | "error" | "error-outline" | "escalator-warning" | "euro-symbol" | "event" | "event-available" | "event-busy" | "event-note" | "event-seat" | "expand-less" | "expand-more" | "explicit" | "explore" | "explore-off" | "exposure" | "exposure-minus-1" | "exposure-minus-2" | "exposure-neg-1" | "exposure-neg-2" | "exposure-plus-1" | "exposure-plus-2" | "exposure-zero" | "extension" | "face" | "face-retouching-natural" | "fact-check" | "family-restroom" | "fast-rewind" | "fastfood" | "favorite-border" | "favorite-outline" | "featured-play-list" | "featured-video" | "feedback" | "festival" | "fiber-dvr" | "fiber-manual-record" | "fiber-new" | "fiber-pin" | "fiber-smart-record" | "file-copy" | "file-download-done" | "file-present" | "filter-1" | "filter-2" | "filter-3" | "filter-4" | "filter-5" | "filter-6" | "filter-7" | "filter-8" | "filter-9" | "filter-9-plus" | "filter-alt" | "filter-b-and-w" | "filter-center-focus" | "filter-drama" | "filter-frames" | "filter-hdr" | "filter-list" | "filter-list-alt" | "filter-none" | "filter-tilt-shift" | "filter-vintage" | "find-in-page" | "first-page" | "fit-screen" | "fitness-center" | "flaky" | "flash-on" | "flight" | "flight-land" | "flight-takeoff" | "flip" | "flip-camera-android" | "flip-camera-ios" | "folder-shared" | "folder-special" | "follow-the-signs" | "font-download" | "food-bank" | "format-color-reset" | "format-quote" | "format-shapes" | "format-underlined" | "forward-10" | "forward-30" | "forward-5" | "forward-to-inbox" | "free-breakfast" | "functions" | "g-translate" | "games" | "get-app" | "gif" | "goat" | "golf-course" | "gps-fixed" | "gps-not-fixed" | "gps-off" | "grade" | "gradient" | "grading" | "graphic-eq" | "grid-on" | "grid-view" | "group-add" | "group-work" | "groups" | "handyman" | "hardware" | "hd" | "hdr-enhanced-select" | "hdr-on" | "hdr-strong" | "hdr-weak" | "headset-mic" | "healing" | "hearing" | "hearing-disabled" | "height" | "help-center" | "high-quality" | "highlight" | "highlight-alt" | "highlight-off" | "highlight-remove" | "history-edu" | "history-toggle-off" | "home-filled" | "home-repair-service" | "home-work" | "horizontal-distribute" | "horizontal-rule" | "horizontal-split" | "hourglass-bottom" | "hourglass-disabled" | "hourglass-empty" | "hourglass-full" | "hourglass-top" | "house" | "house-siding" | "how-to-reg" | "how-to-vote" | "http" | "https" | "icecream" | "image-aspect-ratio" | "image-not-supported" | "imagesearch-roller" | "import-contacts" | "import-export" | "important-devices" | "indeterminate-check-box" | "info-outline" | "insert-chart" | "insert-chart-outlined" | "insert-comment" | "insert-drive-file" | "insert-emoticon" | "insert-invitation" | "insert-link" | "insert-photo" | "insights" | "integration-instructions" | "inventory" | "invert-colors-on" | "iso" | "keyboard-arrow-down" | "keyboard-arrow-left" | "keyboard-arrow-right" | "keyboard-arrow-up" | "keyboard-capslock" | "keyboard-control" | "keyboard-hide" | "keyboard-voice" | "king-bed" | "kitchen" | "label-important" | "label-important-outline" | "landscape" | "laptop-chromebook" | "laptop-mac" | "laptop-windows" | "last-page" | "layers-clear" | "leaderboard" | "leak-add" | "leak-remove" | "leave-bags-at-home" | "legend-toggle" | "lens" | "library-add" | "library-add-check" | "library-books" | "library-music" | "line-style" | "line-weight" | "linear-scale" | "linked-camera" | "live-help" | "live-tv" | "local-activity" | "local-airport" | "local-atm" | "local-attraction" | "local-bar" | "local-cafe" | "local-car-wash" | "local-convenience-store" | "local-dining" | "local-drink" | "local-fire-department" | "local-florist" | "local-gas-station" | "local-grocery-store" | "local-hospital" | "local-hotel" | "local-laundry-service" | "local-library" | "local-mall" | "local-movies" | "local-offer" | "local-parking" | "local-pharmacy" | "local-phone" | "local-pizza" | "local-play" | "local-police" | "local-post-office" | "local-print-shop" | "local-printshop" | "local-restaurant" | "local-see" | "local-shipping" | "local-taxi" | "location-city" | "location-disabled" | "location-history" | "location-off" | "location-on" | "location-searching" | "looks-3" | "looks-4" | "looks-5" | "looks-6" | "looks-one" | "looks-two" | "low-priority" | "loyalty" | "luggage" | "lunch-dining" | "maps-ugc" | "mark-as-unread" | "mark-chat-read" | "mark-chat-unread" | "mark-email-read" | "mark-email-unread" | "markunread" | "markunread-mailbox" | "masks" | "mediation" | "medical-services" | "meeting-room" | "menu-book" | "merge-type" | "messenger-outline" | "mic-external-off" | "mic-external-on" | "mic-none" | "military-tech" | "miscellaneous-services" | "missed-video-call" | "mms" | "mobile-friendly" | "mobile-off" | "mobile-screen-share" | "mode-comment" | "mode-edit" | "model-training" | "monetization-on" | "money-off" | "monochrome-photos" | "mood" | "mood-bad" | "more-horiz" | "more-time" | "more-vert" | "motion-photos-off" | "motion-photos-on" | "motion-photos-pause" | "motion-photos-paused" | "move-to-inbox" | "movie-creation" | "mp" | "multiline-chart" | "multiple-stop" | "multitrack-audio" | "museum" | "music-video" | "my-library-add" | "my-library-books" | "my-library-music" | "my-location" | "nat" | "navigate-before" | "navigate-next" | "near-me-disabled" | "network-cell" | "network-check" | "network-locked" | "network-wifi" | "new-releases" | "next-plan" | "next-week" | "night-shelter" | "nightlife" | "nightlight-round" | "nights-stay" | "no-backpack" | "no-cell" | "no-drinks" | "no-encryption" | "no-flash" | "no-food" | "no-luggage" | "no-meals" | "no-meals-ouline" | "no-meeting-room" | "no-photography" | "no-sim" | "no-stroller" | "no-transfer" | "north" | "north-east" | "north-west" | "not-accessible" | "not-interested" | "not-listed-location" | "not-started" | "note-add" | "notes" | "notification-important" | "notifications-active" | "notifications-none" | "notifications-on" | "notifications-paused" | "now-wallpaper" | "now-widgets" | "offline-bolt" | "offline-pin" | "offline-share" | "ondemand-video" | "online-prediction" | "open-in-browser" | "open-in-full" | "open-with" | "outbond" | "outbox" | "outdoor-grill" | "outgoing-mail" | "outlet" | "outlined-flag" | "padding" | "pages" | "pageview" | "pan-tool" | "panorama-fish-eye" | "panorama-horizontal-select" | "panorama-photosphere" | "panorama-photosphere-select" | "panorama-vertical-select" | "panorama-wide-angle-select" | "park" | "party-mode" | "pause-circle-filled" | "pause-presentation" | "payment" | "payments" | "pedal-bike" | "pending" | "pending-actions" | "people-alt" | "perm-camera-mic" | "perm-contact-cal" | "perm-contact-calendar" | "perm-data-setting" | "perm-device-info" | "perm-device-information" | "perm-identity" | "perm-media" | "perm-phone-msg" | "perm-scan-wifi" | "person-add-alt" | "person-add-alt-1" | "person-add-disabled" | "person-pin" | "person-pin-circle" | "person-remove-alt-1" | "person-search" | "personal-video" | "pest-control" | "pest-control-rodent" | "pets" | "phone-android" | "phone-bluetooth-speaker" | "phone-callback" | "phone-disabled" | "phone-enabled" | "phone-iphone" | "phone-locked" | "phonelink" | "phonelink-erase" | "phonelink-lock" | "phonelink-off" | "phonelink-ring" | "phonelink-setup" | "photo-album" | "photo-camera" | "photo-camera-back" | "photo-camera-front" | "photo-filter" | "photo-library" | "photo-size-select-actual" | "photo-size-select-large" | "photo-size-select-small" | "picture-as-pdf" | "picture-in-picture" | "picture-in-picture-alt" | "pie-chart-outlined" | "pin-drop" | "pivot-table-chart" | "place" | "plagiarism" | "play-arrow" | "play-circle-fill" | "play-circle-filled" | "play-disabled" | "play-for-work" | "playlist-add" | "playlist-add-check" | "plumbing" | "plus-one" | "policy" | "portable-wifi-off" | "post-add" | "power-input" | "power-settings-new" | "pregnant-woman" | "present-to-all" | "print-disabled" | "privacy-tip" | "psychology" | "public" | "public-off" | "published-with-changes" | "push-pin" | "qr-code-2" | "qr-code-scanner" | "query-builder" | "question-answer" | "queue" | "queue-music" | "queue-play-next" | "quick-contacts-dialer" | "quick-contacts-mail" | "quickreply" | "radio-button-checked" | "radio-button-unchecked" | "railway-alert" | "ramen-dining" | "rate-review" | "read-more" | "receipt-long" | "recent-actors" | "recommend" | "record-voice-over" | "redeem" | "reduce-capacity" | "remove-done" | "remove-from-queue" | "remove-moderator" | "remove-red-eye" | "remove-shopping-cart" | "repeat-on" | "repeat-one" | "repeat-one-on" | "replay-10" | "replay-30" | "replay-5" | "replay-circle-filled" | "report" | "report-off" | "report-problem" | "request-page" | "request-quote" | "reset-tv" | "restaurant-menu" | "restore-from-trash" | "restore-page" | "rice-bowl" | "ring-volume" | "roofing" | "room-preferences" | "rotate-90-degrees-ccw" | "rss-feed" | "rtt" | "rule" | "rule-folder" | "run-circle" | "rv-hookup" | "sanitizer" | "save-alt" | "saved-search" | "schedule" | "schedule-send" | "science" | "score" | "screen-lock-landscape" | "screen-lock-portrait" | "screen-lock-rotation" | "screen-search-desktop" | "screen-share" | "sd-storage" | "search-off" | "self-improvement" | "send-and-archive" | "send-to-mobile" | "sensor-door" | "sensor-window" | "sentiment-dissatisfied" | "sentiment-neutral" | "sentiment-satisfied" | "sentiment-satisfied-alt" | "sentiment-very-dissatisfied" | "sentiment-very-satisfied" | "set-meal" | "settings-applications" | "settings-backup-restore" | "settings-bluetooth" | "settings-brightness" | "settings-cell" | "settings-display" | "settings-ethernet" | "settings-input-antenna" | "settings-input-component" | "settings-input-composite" | "settings-input-hdmi" | "settings-input-svideo" | "settings-overscan" | "settings-phone" | "settings-power" | "settings-remote" | "settings-system-daydream" | "settings-voice" | "shop-two" | "short-text" | "show-chart" | "shuffle-on" | "shutter-speed" | "sick" | "signal-cellular-0-bar" | "signal-cellular-4-bar" | "signal-cellular-alt" | "signal-cellular-connected-no-internet-4-bar" | "signal-cellular-no-sim" | "signal-cellular-null" | "signal-cellular-off" | "signal-wifi-0-bar" | "signal-wifi-4-bar" | "signal-wifi-4-bar-lock" | "signal-wifi-off" | "sim-card-alert" | "single-bed" | "slideshow" | "slow-motion-video" | "smart-button" | "smoke-free" | "smoking-rooms" | "sms-failed" | "snippet-folder" | "snooze" | "sort-by-alpha" | "south" | "south-east" | "south-west" | "space-bar" | "speaker-group" | "speaker-notes" | "speaker-notes-off" | "speaker-phone" | "speed" | "sports" | "sports-bar" | "sports-baseball" | "sports-basketball" | "sports-cricket" | "sports-esports" | "sports-football" | "sports-golf" | "sports-handball" | "sports-hockey" | "sports-kabaddi" | "sports-mma" | "sports-motorsports" | "sports-rugby" | "sports-soccer" | "sports-tennis" | "sports-volleyball" | "square-foot" | "stacked-bar-chart" | "stacked-line-chart" | "star-border" | "star-rate" | "stars" | "stay-current-landscape" | "stay-current-portrait" | "stay-primary-landscape" | "stay-primary-portrait" | "sticky-note-2" | "stop-screen-share" | "storage" | "store-mall-directory" | "straighten" | "streetview" | "strikethrough-s" | "stroller" | "subject" | "subscriptions" | "subtitles-off" | "supervised-user-circle" | "supervisor-account" | "support-agent" | "swap-calls" | "swap-horiz" | "swap-vert" | "swap-vert-circle" | "swipe" | "switch-account" | "switch-camera" | "switch-left" | "switch-right" | "switch-video" | "sync-disabled" | "sync-problem" | "system-update" | "system-update-alt" | "system-update-tv" | "table-chart" | "table-rows" | "table-view" | "tablet-mac" | "takeout-dining" | "tap-and-play" | "tapas" | "taxi-alert" | "text-fields" | "text-format" | "text-rotate-up" | "text-rotate-vertical" | "text-rotation-angledown" | "text-rotation-angleup" | "text-rotation-down" | "text-rotation-none" | "text-snippet" | "textsms" | "theater-comedy" | "theaters" | "thumb-down-alt" | "thumb-down-off-alt" | "thumb-up-alt" | "thumb-up-off-alt" | "time-to-leave" | "toc" | "toll" | "tonality" | "topic" | "touch-app" | "tour" | "toys" | "track-changes" | "traffic" | "transfer-within-a-station" | "transform" | "transit-enterexit" | "trending-flat" | "trip-origin" | "turned-in" | "turned-in-not" | "tv-off" | "two-wheeler" | "unarchive" | "unfold-less" | "unfold-more" | "unpublished" | "unsubscribe" | "update-disabled" | "upgrade" | "upload-file" | "verified" | "verified-user" | "vertical-align-bottom" | "vertical-align-center" | "vertical-align-top" | "vertical-distribute" | "vertical-split" | "vibration" | "video-call" | "video-collection" | "video-label" | "video-library" | "video-settings" | "videocam-off" | "videogame-asset" | "view-comfortable" | "view-in-ar" | "view-sidebar" | "vignette" | "visibility" | "visibility-off" | "voice-chat" | "voice-over-off" | "volunteer-activism" | "vpn-key" | "vpn-lock" | "wash" | "watch-later" | "water-damage" | "waterfall-chart" | "wb-auto" | "wb-cloudy" | "wb-incandescent" | "wb-iridescent" | "wb-shade" | "wb-sunny" | "wb-twighlight" | "wc" | "web-asset" | "weekend" | "west" | "whatshot" | "wheelchair-pickup" | "where-to-vote" | "wifi-calling" | "wifi-protected-setup" | "wifi-tethering" | "wine-bar" | "work" | "work-off" | "work-outline" | "workspaces-filled" | "workspaces-outline" | "wrap-text" | "wrong-location" | "wysiwyg" | "youtube-searched-for" | "zoom-out-map";

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
type IconNames = NameOfMaterialIcon | NameOfIoniconIcon | NameOfFontAwesomeIcon;

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
    renderRight?: () => JSX.Element | null;
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
interface CreateThemeFunc {
    (config: ThemeConfig): ThemeInterface;
}
declare const createTheme: CreateThemeFunc;

declare const createThemeForNative: (config: ThemeConfig) => ThemeInterface;

declare const createThemeForWeb: (config: ThemeConfig) => ThemeInterfaceForHTML;

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

declare class InitializationError extends Error {
    constructor(message: string);
}
declare class LogError extends Error {
    constructor(message: string);
}
declare class MessageError extends Error {
    constructor(message: string);
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

interface HtmlSpanInterface extends Partial<React$1.HTMLProps<HTMLSpanElement>> {
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
    textDecoration?: TextDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    maxFontSize?: number;
    maxWidth?: number;
    children?: React$1.ReactNode;
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
    textDecorationLine?: TextDecorationLineTypes;
}
interface HtmlSpanStylePropsWithTheme extends HtmlSpanStyleProps {
    theme: ThemeInterfaceForHTML;
}

interface OnVisibilityChangeProps {
    onVisibilityChange: (visible: boolean) => void;
    parentVisible?: boolean;
    children?: React$1.ReactNode;
    loading?: boolean;
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
    error?: boolean;
}

declare enum ColorNameOrValueEnum {
    ColorName = "colorName",
    ColorValue = "colorValue"
}
declare const isColorNameOrValue: (nameOrValue: ColorNameOrValueFromTheme, theme: ThemeInterface | ThemeInterfaceForHTML) => ColorNameOrValueEnum | false;

interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: ColorNameOrValueEnum;
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

declare const statusBarHeight: number;
declare const windowHeight: number;
declare const windowWidth: number;
declare const screenHeight: number;
declare const screenWidth: number;
declare const paddingForScrollView = 15;
declare const paddingForScrollViewTwo = 5;
declare const paddingObj: PaddingOnThemeType;

declare function extractKeysAndValuesFromColorsInterface(colors: ColorsInterface): [string[], string[]];

declare const getLineHeight: (fontSize?: number, amountToIncrease?: number) => number;

declare function isValidHex(color: string): boolean;

declare function RGBAToHexA(rgba: string, forceRemoveAlpha?: boolean): string;

declare const hslToRgb: (h: number, s: number, l: number) => [number, number, number];

declare function isJson(str: string): boolean;

type SentryConfig = {
    SENTRY_DSN: string;
    SENTRY_ENVIRONMENT?: string;
    SENTRY_RELEASE?: string;
};
declare function initializeSentry(config: SentryConfig): void;
declare function logError(error: unknown): void;
declare function logMessage(message: string): void;

declare function removeKeysWithSubstrings(obj: {
    [key: string]: any;
}, substrings: string[]): {
    [key: string]: any;
};

declare function sliceIntoChunks(arr: any[], chunkSize: number): any[];

declare function videoTimeStampToSeconds(str: string): number;

export { type AdjustColorParams, AlignItemsEnum, AutoCapitalizeEnum, AutoCompleteTypeEnum, type BackgroundColors, type BaseButtonPropsInterface, type BaseDivInterface, type BaseHeaderPropsInterface, type BaseImageBackgroundInterface, type BaseScrollViewInterface, type BaseThemeInterface, type BaseViewInterface, type BoxShadowFuncInterface, type BrandColors, ButtonVariantEnum, type CapFontSizeInterface, type ColorFromTheme, type ColorInfoItem, ColorNameOrValueEnum, type ColorNameOrValueFromTheme, type ColorsInterface, type ContainerStyleInterfaceWithTheme, type ContainerStyleProps, type CreateThemeFunc, type CustomButtonTypes, type CustomStylePropsInterface, type CustomTextStylesFromTheme, type CustomViewStylePropsInterface, DataDetectorEnum, type DeviceOnTheme, type ElementColors, type ElevationObjType, type ErrorMessages, type FeedbackColors, type FixedLengthArray, FontAwesomeIconNames, type FontType, FontTypeEnum, type FontTypeWeight, FontTypeWeightEnum, type FontWeightType, type FontsInterface, FormInputGroupDefaultProps, type FormInputGroupProps, type GetStyleForContainerParameters, type GetStyleForContainerPropsParametersNative, type GetStyleForContainerPropsParametersWeb, type GetStyleForGhostPropsParameters, type GetStyleForGhostPropsParametersNative, type GetStyleForGhostPropsParametersWeb, type GetStyleForImgPropsInterface, type GetStyleForParagraphPropsWeb, type GetStyleForTextPropsParameters, type GetStyleForTextPropsParametersNative, type GetStyleForTouchableOpacityInterface, type GhostBaseButton, type GhostTextInterface, type GrayScaleColors, type HandleColorFromThemeInterfaceNative, type HandleColorFromThemeInterfaceWeb, type HandleColorFromThemeParameters, type HandleFontFromThemeParameters, type HandleFontFromThemeParametersForNative, type HandleFontFromThemeParametersForWeb, type HandleFontSizePropsInterface, type HandleSnackbarColorInterface, type HandleUnitPropsInterface, type HtmlButtonPropsInterface, type HtmlButtonPropsInterfaceWithTheme, type HtmlFormInputGroupProps, type HtmlImageInterface, type HtmlImgStyleProps, type HtmlImgStylePropsWithTheme, type HtmlParagraphInterface, type HtmlParagraphStyleProps, type HtmlParagraphStylePropsWithTheme, type HtmlSecureInputProps, type HtmlSpanInterface, type HtmlSpanStyleProps, type HtmlSpanStylePropsWithTheme, type IconNames, InitializationError, type InteractionColors, IoniconNames, JustifyContentEnum, KeyBoardTypeEnum, LogError, MessageError, type NameOfFontAwesomeIcon, type NameOfIoniconIcon, type NameOfMaterialIcon, type OnVisibilityChangeProps, type PaddingOnThemeType, RGBAToHexA, ResponsiveByPercentOrValue, type SVGPropsInterface, SecureInputDefaultProps, type SecureInputProps, type StylePropsInterface, type StylePropsInterfaceWithTheme, TextContentTypeEnum, TextDecorationLineTypes, type TextFontWeightType, TextFontWeightTypesEnum, type TextInterface, type TextStyleProps, type TextStylePropsWithTheme, TextTransformTypes, type ThemeConfig, type ThemeInterface, type ThemeInterfaceForHTML, type TouchableOpacityStylePropsInterface, type TouchableOpacityStylePropsInterfaceWithTheme, UnitOfMeasurementNative, UnitOfMeasurementWeb, type ValueOfColor, adjustColor, boxShadowOne, calculatePercentageByPartAndWhole, capFontSize, createTheme, createThemeForNative, createThemeForWeb, cssColorNames, darkColors, dashToCamelCase, defaultDarkBackgroundColors, defaultDarkBrandColors, defaultDarkElementColors, defaultDarkFeedbackColors, defaultDarkGrayScaleColors, defaultDarkInteractionColors, defaultFonts, defaultLightBackgroundColors, defaultLightBrandColors, defaultLightElementColors, defaultLightFeedbackColors, defaultLightGrayScaleColors, defaultLightInteractionColors, defaultSVGProps, extractKeysAndValuesFromColorsInterface, generateColorsFrom, getErrorMessageByField, getErrorMessageFromErrorMessages, getFirstWordCapitalized, getLineHeight, getResponsiveFontSize, getStyleForContainerProps, getStyleForGhostProps, getStyleForGhostPropsForWeb, getStyleForImgPropsForWeb, getStyleForParagraphProps, getStyleForTextProps, getStyleForTouchableOpacityProps, getStyleFromProps, handleColorFromTheme, handleColorFromThemeWeb, handleFontFromTheme, handleFontFromThemeWeb, handleFontSizeProps, handleSnackbarColor, handleUnitProps, hslToRgb, initializeSentry, isColorNameOrValue, isConsoleAvailable, isJson, isValidHex, lightColors, log, logError, logMessage, paddingForScrollView, paddingForScrollViewTwo, paddingObj, removeKeysWithSubstrings, screenHeight, screenWidth, sliceIntoChunks, statusBarHeight, textFontWeightTypes, videoTimeStampToSeconds, windowHeight, windowWidth };
