export interface GrayScaleColors {
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
      dividerColor: string
      primaryContainer: string
      secondaryContainer: string
      tertiary: string
      tertiaryContainer: string
    
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

export interface ElementColors {
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
  
export interface ColorsInterface extends 
    GrayScaleColors, 
    BrandColors, 
    BackgroundColors, 
    ElementColors, 
    FeedbackColors,
    InteractionColors {}


export type ColorFromTheme = keyof ColorsInterface;