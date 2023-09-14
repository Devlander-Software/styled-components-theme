/// <reference types="react" />
import { TextProps, PlatformOSType, ViewStyle, TextInputProps, TextStyle, ViewProps } from 'react-native';

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
    backgroundColorFromTheme?: keyof ColorsInterface;
}
interface TouchableOpacityStylePropsInterfaceWithTheme extends TouchableOpacityStylePropsInterface {
    theme: ThemeInterface;
}

interface GetStyleForTouchableOpacityInterface {
    (props: TouchableOpacityStylePropsInterfaceWithTheme): string;
}
declare const getStyleForTouchableOpacityProps: GetStyleForTouchableOpacityInterface;

declare const getStyleForGhostProps: (ghost: boolean, disabled: boolean, theme: ThemeInterface, colorOne: keyof ColorsInterface, colorTwo: keyof ColorsInterface) => any;

declare enum FontTypeEnum {
    Font1 = "Font1",
    Font2 = "Font2",
    Font3 = "Font3",
    CondensedFont = "CondensedFont"
}

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

interface CustomTextStylesFromTheme {
    textDecorationColorFromTheme?: keyof ColorsInterface;
    colorFromTheme?: keyof ColorsInterface;
    textColorFromTheme?: keyof ColorsInterface;
    fontTypeWeight?: keyof FontTypeWeight;
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

declare enum textTransformTypes {
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
    fontTypeWeight: keyof FontTypeWeight;
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

declare const getStyleForTextProps: (props: TextStylePropsWithTheme) => string;

interface handleColorFromThemeInterface {
    (color: keyof ColorsInterface, opacity: number, theme: ThemeInterface): string | ElevationObjType | any;
}
declare const handleColorFromTheme: (color: keyof ColorsInterface, opacity: number | undefined, theme: ThemeInterface) => string | ElevationObjType | any;

declare const handleFontFromTheme: (fontType: keyof ThemeInterface['fonts'], fontTypeWeight: keyof FontTypeWeight | undefined, theme: ThemeInterface) => string;

interface handleSnackbarColorInterface {
    (colorType?: undefined | 'none' | 'success' | 'error', theme?: ThemeInterface): string;
}
declare const handleSnackbarColor: handleSnackbarColorInterface;

interface capFontSizeInterface {
    (fontSize: string | number, maxFontSize: number): string | number;
}
declare const capFontSize: capFontSizeInterface;

interface handleUnitPropsInterface {
    (units: any): any;
}
declare const handleUnitProps: handleUnitPropsInterface;

interface handleFontSizePropsInterface {
    (fontSize: string | number | undefined): string | number | undefined | any;
}
declare const handleFontSizeProps: handleFontSizePropsInterface;

interface boxShadowFuncInterface {
    (fontSize: string): any;
}
declare const boxShadowOne: boxShadowFuncInterface;

type ElevationObjType = {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
};
interface ColorsInterface {
    disabled: string;
    backdrop: string;
    placeholder: string;
    accentDarkest: string;
    primaryDarkest: string;
    primary: string;
    primaryLighter: string;
    transparent: string;
    white80: string;
    black80: string;
    secondary: string;
    grey: string;
    darkGrey: string;
    error: string;
    white: string;
    black: string;
    background: string;
    reference: string;
    errorColor: string;
    colorOne: string;
    colorTwo: string;
    colorThree: string;
    colorFour: string;
    colorFive: string;
    logoColor: string;
    headerBackground: string;
    accent: string;
    accentLighter: string;
    accent50: string;
    accent80: string;
    successColor: string;
    selectedColorOne10: string;
    selectedColorOne40: string;
    selectedColorOne100: string;
    cardBorderColor: string;
    cardBackgroundColor: string;
    dividerColor: string;
    primaryTextColor: string;
    text: string;
    secondaryTextColor: string;
    secondaryButtonBackgroundColor: string;
    secondaryIconTextColor: string;
    webWashColor: string;
    mediumTextColor: string;
    primaryIconColor: string;
    primaryIconTextColor: string;
    secondaryIconColor: string;
    tabBarColor: string;
    commentBackgroundColor: string;
    warningAlpha22: string;
    warningAlpha62: string;
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
    primaryContainer: string;
    secondaryContainer: string;
    tertiary: string;
    tertiaryContainer: string;
    surface: string;
    surfaceVariant: string;
    surfaceDisabled: string;
    errorContainer: string;
    onPrimary: string;
    onPrimaryContainer: string;
    onSecondary: string;
    onSecondaryContainer: string;
    onTertiary: string;
    onTertiaryContainer: string;
    onSurface: string;
    onSurfaceVariant: string;
    onSurfaceDisabled: string;
    onError: string;
    onErrorContainer: string;
    onBackground: string;
    outline: string;
    shadow: string;
    inverseOnSurface: string;
    inverseSurface: string;
    inversePrimary: string;
}
declare enum FontWeightEnum {
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
interface FontsInterface {
    Font2: FontTypeWeight;
    CondensedFont: FontTypeWeight;
    Font1: FontTypeWeight;
    Font3: FontTypeWeight;
}
interface FontConfigItemInterface {
    regular: {
        fontFamily: string;
        fontWeight: string;
    };
    medium: {
        fontFamily: string;
        fontWeight: string;
    };
    light: {
        fontFamily: string;
        fontWeight: string;
    };
    thin: {
        fontFamily: string;
        fontWeight: string;
    };
}
interface FontConfigInterface {
    web: FontConfigItemInterface;
    ios: FontConfigItemInterface;
    default: FontConfigItemInterface;
}
type PaddingOnThemeType = {
    paddingForScrollView: number;
    paddingForScrollViewTwo: number;
};
type DeviceOnTheme = {
    screenWidth: number;
    statusBarHeight: number;
    screenHeight: number;
    isTablet: boolean;
    hasNotch: boolean;
    hasDynamicIsland: boolean;
    platform: PlatformOSType;
};
interface ThemeInterface {
    padding: PaddingOnThemeType;
    handleSnackbarColor: handleSnackbarColorInterface;
    handleFontSizeProps: handleFontSizePropsInterface;
    handleUnitProps: handleUnitPropsInterface;
    getStyleForTouchableOpacityProps: GetStyleForTouchableOpacityInterface;
    getStyleForContainerProps: (props: ContainerStyleInterfaceWithTheme) => string;
    handleGhost: typeof getStyleForGhostProps;
    getStyleForTextProps: typeof getStyleForTextProps;
    boxShadowOne: boxShadowFuncInterface;
    boxShadowTwo?: boxShadowFuncInterface;
    elevation?: ElevationObjType;
    boxShadowThree?: boxShadowFuncInterface;
    handleColorFromTheme: handleColorFromThemeInterface;
    handleFontFromTheme: typeof handleFontFromTheme;
    colors: ColorsInterface;
    fonts: FontsInterface;
    darkThemeEnabled?: boolean;
    deviceOnTheme: DeviceOnTheme;
    capFontSize: capFontSizeInterface;
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
    eyeOffOutline = "eye-off-outline",
    eyeOutline = "eye-outline",
    pauseCircleOutline = "pause-circle-outline",
    pauseCircleSharp = "pause-circle-sharp",
    pauseOutline = "pause-outline",
    pauseSharp = "pause-sharp",
    lockClosed = "lock-closed",
    playForward = "play-forward",
    playForwardCircle = "play-forward-circle",
    playForwardCircleOutline = "play-forward-circle-outline",
    playForwardCircleSharp = "play-forward-circle-sharp",
    playForwardOutline = "play-forward-outline",
    playForwardSharp = "play-forward-sharp",
    playOutline = "play-outline",
    playSharp = "play-sharp",
    playSkipBack = "play-skip-back",
    playSkipBackCircle = "play-skip-back-circle",
    playSkipBackCircleOutline = "play-skip-back-circle-outline",
    playSkipBackCircleSharp = "play-skip-back-circle-sharp",
    playSkipBackOutline = "play-skip-back-outline",
    playSkipBackSharp = "play-skip-back-sharp",
    playSkipForward = "play-skip-forward",
    playSkipForwardCircle = "play-skip-forward-circle",
    playSkipForwardCircleOutline = "play-skip-forward-circle-outline",
    playSkipForwardCircleSharp = "play-skip-forward-circle-sharp",
    playSkipForwardOutline = "play-skip-forward-outline",
    playSkipForwardSharp = "play-skip-forward-sharp",
    podium = "podium",
    podiumOutline = "podium-outline",
    podiumSharp = "podium-sharp",
    playBack = "play-back",
    playBackCircle = "play-back-circle",
    playBackCircleOutline = "play-back-circle-outline",
    playBackgroundCircleSharp = "play-back-circle-sharp",
    playBackOutline = "play-back-outline",
    playBackSharp = "play-back-sharp",
    playCircleOutline = "play-circle-outline",
    playCircleSharp = "play-circle-sharp",
    link = "link",
    search = "search",
    image = "image",
    text = "text",
    alert = "alert",
    checkbox = "checkbox",
    menu = "menu",
    radio = "radio",
    timer = "timer",
    body = "body",
    code = "code",
    map = "map",
    time = "time",
    ellipse = "ellipse",
    filter = "filter",
    stop = "stop",
    close = "close",
    book = "book",
    pause = "pause",
    mail = "mail",
    home = "home",
    laptop = "laptop",
    star = "star",
    save = "save",
    cloud = "cloud",
    addOutline = "add",
    eye = "eye",
    camera = "camera",
    enter = "enter",
    heart = "heart",
    calculator = "calculator",
    download = "download",
    play = "play",
    calendar = "calendar",
    barcode = "barcode",
    hourglass = "hourglass",
    key = "key",
    flag = "flag",
    car = "car",
    man = "man",
    gift = "gift",
    wallet = "wallet",
    woman = "woman",
    earth = "earth",
    wifi = "wifi",
    sync = "sync",
    warning = "warning",
    archive = "archive",
    arrowDown = "arrow-down",
    arrowUp = "arrow-up",
    bookmark = "bookmark",
    bookmarks = "bookmarks",
    briefcase = "briefcase",
    brush = "brush",
    bug = "bug",
    chevronDown = "chevron-down",
    chevronUp = "chevron-up",
    chevronForward = "chevron-forward",
    clipboard = "clipboard",
    cog = "cog",
    compass = "compass",
    copy = "copy",
    crop = "crop",
    document = "document",
    documents = "documents",
    flash = "flash",
    flashlight = "flashlight",
    flower = "flower",
    folder = "folder",
    funnel = "funnel",
    gameController = "game-controller",
    globe = "globe",
    grid = "grid",
    help = "help",
    images = "images",
    language = "language",
    layers = "layers",
    leaf = "leaf",
    list = "list",
    location = "location",
    lockOpen = "lock-open",
    logOut = "log-out",
    magnet = "magnet",
    medal = "medal",
    megaphone = "megaphone",
    mic = "mic",
    moon = "moon",
    notificationsOff = "notifications-off",
    paperPlane = "paper-plane",
    pencil = "pencil",
    pieChart = "pie-chart",
    pin = "pin",
    print = "print",
    rocket = "rocket",
    share = "share",
    shield = "shield",
    shuffle = "shuffle",
    stopwatch = "stopwatch",
    thermometer = "thermometer",
    thumbsDown = "thumbs-down",
    thumbsUp = "thumbs-up",
    trash = "trash",
    trophy = "trophy",
    tv = "tv",
    water = "water",
    cart = "cart",
    refresh = "refresh",
    alertCircle = "alert-circle",
    aperture = "aperture",
    arrowDownCircle = "arrow-down-circle",
    arrowUpCircle = "arrow-up-circle",
    caretBackCircleOutline = "caret-back-circle-outline",
    caretBackCircleSharp = "caret-back-circle-sharp",
    caretBackOutline = "caret-back-outline",
    caretBackSharp = "caret-back-sharp",
    caretDownCircle = "caret-down-circle",
    caretDownCircleOutline = "caret-down-circle-outline",
    caretDownCircleSharp = "caret-down-circle-sharp",
    caretDownOutline = "caret-down-outline",
    caretDownSharp = "caret-down-sharp",
    caretForward = "caret-forward",
    caretForwardCircle = "caret-forward-circle",
    caretForwardCircleOutline = "caret-forward-circle-outline",
    caretForwardCircleSharp = "caret-forward-circle-sharp",
    caretForwardOutline = "caret-forward-outline",
    caretForwardSharp = "caret-forward-sharp",
    caretUpCircle = "caret-up-circle",
    caretUpCircleOutline = "caret-up-circle-outline",
    caretUpCircleSharp = "caret-up-circle-sharp",
    caretUpOutline = "caret-up-outline",
    caretUpSharp = "caret-up-sharp",
    cartOutline = "cart-outline",
    cartSharp = "cart-sharp",
    cash = "cash",
    cashOutline = "cash-outline",
    cashSharp = "cash-sharp",
    cellular = "cellular",
    cellularOutline = "cellular-outline",
    cellularSharp = "cellular-sharp",
    chatbox = "chatbox",
    chatboxEllipses = "chatbox-ellipses",
    chatboxEllipsesOutline = "chatbox-ellipses-outline",
    chatboxEllipsesSharp = "chatbox-ellipses-sharp",
    chatboxOutline = "chatbox-outline",
    chatboxSharp = "chatbox-sharp",
    chatbubble = "chatbubble",
    chatbubbleEllipses = "chatbubble-ellipses",
    chatbubbleEllipsesOutline = "chatbubble-ellipses-outline",
    chatbubbleEllipsesSharp = "chatbubble-ellipses-sharp",
    chatbubbleOutline = "chatbubble-outline",
    chatbubbleSharp = "chatbubble-sharp",
    chatbubbles = "chatbubbles",
    chatbubblesOutline = "chatbubbles-outline",
    chatbubblesSharp = "chatbubbles-sharp",
    checkboxOutline = "checkbox-outline",
    checkboxSharp = "checkbox-sharp",
    checkmark = "checkmark",
    checkmarkCircle = "checkmark-circle",
    checkmarkCircleOutline = "checkmark-circle-outline",
    checkmarkCircleSharp = "checkmark-circle-sharp",
    checkmarkDone = "checkmark-done",
    checkmarkDoneCircle = "checkmark-done-circle",
    checkmarkDoneCircleOutline = "checkmark-done-circle-outline",
    checkmarkDoneCircleSharp = "checkmark-done-circle-sharp",
    checkmarkDoneOutline = "checkmark-done-outline",
    checkmarkDoneSharp = "checkmark-done-sharp",
    checkmarkOutline = "checkmark-outline",
    checkmarkSharp = "checkmark-sharp",
    chevronBack = "chevron-back",
    chevronBackCircle = "chevron-back-circle",
    chevronBackCircleOutline = "chevron-back-circle-outline",
    chevronBackCircleSharp = "chevron-back-circle-sharp",
    chevronBackOutline = "chevron-back-outline",
    chevronBackSharp = "chevron-back-sharp",
    chevronDownCircle = "chevron-down-circle",
    chevronDownCircleOutline = "chevron-down-circle-outline"
}
type IconNames = keyof typeof IoniconNames;

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
    secureTextOnIcon?: IoniconNames | string;
    secureTextOffIcon?: IoniconNames | string;
    securePressOnChange: () => void;
}

declare const FormInputGroupDefaultProps: FormInputGroupProps;
declare const SecureInputDefaultProps: SecureInputProps;

interface BaseButtonPropsInterface extends ViewStyle, CustomStylePropsInterface {
    onPress?: () => void;
    text?: string;
    renderLeft?: () => React.ReactElement;
    renderRight?: () => React.ReactElement;
    isSelected?: boolean;
}
interface GhostBaseButton extends BaseButtonPropsInterface {
    textColorFromTheme: keyof ColorsInterface;
    backgroundColorFromTheme: keyof ColorsInterface;
}

interface BaseHeaderPropsInterface {
    backgroundColorFromTheme?: keyof ColorsInterface;
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
    backgroundColorFromTheme?: keyof ColorsInterface;
}
declare const defaultSVGProps: {
    width: string;
    height: string;
    viewBox: string;
};

declare function calculatePercentageByPartAndWhole(partial: number, whole: number): number;

declare function getFirstWordCapitalized(str: string): string;

declare const STATUSBAR_HEIGHT: number;
declare const windowHeight: number;
declare const windowWidth: number;
declare const screenHeight: number;
declare const screenWidth: number;
declare const paddingForScrollView = 15;
declare const paddingForScrollViewTwo = 5;
declare const paddingObj: PaddingOnThemeType;

declare const getLineHeight: (fontSize?: number, amountToIncrease?: number) => number;

declare function isValidHex(color: string): boolean;

declare const getStyleForContainerProps: ({ maxWidth, maxHeight, height, theme, marginTop, width, backgroundColorFromTheme, marginBottom, minHeight, opacity, marginLeft, marginRight, paddingLeft, borderColorFromTheme, paddingRight, margin, borderWidth, flex, paddingTop, }: ContainerStyleInterfaceWithTheme) => string;

declare function sliceIntoChunks(arr: any[], chunkSize: number): any[];

declare function videoTimeStampToSeconds(str: string): number;

export { AlignItemsEnum, type BaseButtonPropsInterface, type BaseHeaderPropsInterface, type BaseImageBackgroundInterface, type BaseScrollViewInterface, type BaseThemeInterface, type BaseViewInterface, ButtonVariantEnum, type ColorsInterface, type ContainerStyleInterfaceWithTheme, type ContainerStyleProps, type CustomButtonTypes, type CustomStylePropsInterface, type CustomTextStylesFromTheme, type CustomViewStylePropsInterface, type DeviceOnTheme, type ElevationObjType, type FixedLengthArray, type FontConfigInterface, type FontConfigItemInterface, FontTypeEnum, type FontTypeWeight, FontWeightEnum, type FontsInterface, FormInputGroupDefaultProps, type FormInputGroupProps, type GetStyleForTouchableOpacityInterface, type GhostBaseButton, type GhostTextInterface, type IconNames, IoniconNames, JustifyContentEnum, type OnVisibilityChangeProps, type PaddingOnThemeType, STATUSBAR_HEIGHT, type SVGPropsInterface, SecureInputDefaultProps, type SecureInputProps, TextFontWeightTypes, TextFontWeightTypesEnum, type TextInterface, type TextStyleProps, type TextStylePropsWithTheme, type ThemeInterface, type boxShadowFuncInterface, boxShadowOne, calculatePercentageByPartAndWhole, capFontSize, type capFontSizeInterface, defaultSVGProps, getFirstWordCapitalized, getLineHeight, getStyleForContainerProps, getStyleForGhostProps, getStyleForTextProps, getStyleForTouchableOpacityProps, handleColorFromTheme, type handleColorFromThemeInterface, handleFontFromTheme, handleFontSizeProps, type handleFontSizePropsInterface, handleSnackbarColor, type handleSnackbarColorInterface, handleUnitProps, type handleUnitPropsInterface, isValidHex, paddingForScrollView, paddingForScrollViewTwo, paddingObj, screenHeight, screenWidth, sliceIntoChunks, textDecorationLineTypes, textTransformTypes, videoTimeStampToSeconds, windowHeight, windowWidth };
