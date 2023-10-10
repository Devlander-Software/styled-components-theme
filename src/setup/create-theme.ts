import { defaultFonts } from '../defaults/fonts.defaults';
import { lightColors } from '../defaults/light-colors.defaults';
import { ColorsInterface } from "../types/color.types";
import { DeviceOnTheme } from '../types/device-on-theme.type';
import { FontsInterface } from '../types/fonts.interface';
import { ThemeInterface, ThemeInterfaceForHTML } from '../types/theme.types';
import adjustColor from '../utils/adjust-color';
import capFontSize from '../utils/get-style/cap-font-size';
import getStyleForContainerProps from '../utils/get-style/get-style-for-container-props';
import getStyleForGhostProps from '../utils/get-style/get-style-for-ghost-props';
import getStyleForTextProps from '../utils/get-style/get-style-for-text-props';
import getStyleForTouchableOpacityProps from '../utils/get-style/get-style-for-touchable-opacity-props';
import boxShadowOne from '../utils/get-style/handle-box-shadows';
import handleColorFromTheme from '../utils/get-style/handle-color-from-theme';
import handleFontFromTheme from '../utils/get-style/handle-font-for-theme';
import handleFontSizeProps from '../utils/get-style/handle-font-size-props';
import handleSnackbarColor from '../utils/get-style/handle-snackbar-color';
import handleUnitProps from '../utils/get-style/handle-unit-props';
import getStyleForGhostPropsForWeb from '../utils/get-style/web/get-style-for-ghost-props.web';
import { getStyleForImgPropsForWeb } from '../utils/get-style/web/get-style-for-img-props';
import getStyleForParagraphProps from '../utils/get-style/web/get-style-for-paragraph-props';
import handleColorFromThemeWeb from '../utils/get-style/web/handle-color-for-theme.web';
import handleFontFromThemeWeb from '../utils/get-style/web/handle-font-for-theme.web';



export interface ThemeConfig {
    colorPreferences?: Partial<ColorsInterface>
    fontPreferences?: Partial<FontsInterface>
    deviceOnTheme?: Partial<DeviceOnTheme>,
}

export const createThemeForNative = (config: ThemeConfig): ThemeInterface => {
    const { colorPreferences, fontPreferences, deviceOnTheme } = config
    const theme: ThemeInterface = {
        colors: {
            ...lightColors,
            ...colorPreferences,
        },
        fonts: {
            ...defaultFonts,
            ...fontPreferences,
        },
        handleSnackbarColor: handleSnackbarColor,
        handleFontSizeProps: handleFontSizeProps,
        handleUnitProps: handleUnitProps,
        getStyleForTouchableOpacityProps: getStyleForTouchableOpacityProps,
        getStyleForContainerProps: getStyleForContainerProps,
        handleGhost: getStyleForGhostProps,
        getStyleForTextProps: getStyleForTextProps,
        boxShadowOne: boxShadowOne,
        boxShadowTwo: boxShadowOne,
        boxShadowThree: boxShadowOne,
        handleColorFromTheme: handleColorFromTheme,
        handleFontFromTheme: handleFontFromTheme,
        elevation: {
            level1: "",
            level2: "",
            level3: "",
            level4: "",
            level5: "",
        },
        padding: {
            paddingForScrollView: 0,
            paddingForScrollViewTwo: 0
        },
        deviceOnTheme: {
            
            screenWidth: 0,
            statusBarHeight: 0,
            screenHeight: 0,
            isTablet: false,
            hasNotch: false,
            hasDynamicIsland: false,
            platform: 'ios',
            ...deviceOnTheme,
        },
        capFontSize: capFontSize,
        adjustColor: adjustColor,
    }

    return theme
}



export const createThemeForWeb = (config: ThemeConfig): ThemeInterfaceForHTML => {
    const { colorPreferences, fontPreferences, deviceOnTheme } = config
    const theme: ThemeInterfaceForHTML = {
        colors: {
            ...lightColors,
            ...colorPreferences,
        },
        fonts: {
            ...defaultFonts,
            ...fontPreferences,
        },
        handleSnackbarColor: handleSnackbarColor,
        handleFontSizeProps: handleFontSizeProps,
        handleUnitProps: handleUnitProps,
        getStyleForContainerProps: getStyleForContainerProps,
        handleGhost: getStyleForGhostPropsForWeb,
        getStyleForImageProps: getStyleForImgPropsForWeb,
        getStyleForTextProps: getStyleForParagraphProps,
        boxShadowOne: boxShadowOne,
        boxShadowTwo: boxShadowOne,
        boxShadowThree: boxShadowOne,
        handleColorFromTheme: handleColorFromThemeWeb,
        handleFontFromTheme: handleFontFromThemeWeb,
        elevation: {
            level1: "",
            level2: "",
            level3: "",
            level4: "",
            level5: "",
        },
        padding: {
            paddingForScrollView: 0,
            paddingForScrollViewTwo: 0
        },
        deviceOnTheme: {
            screenWidth: 0,
            statusBarHeight: 0,
            screenHeight: 0,
            isTablet: false,
            hasNotch: false,
            hasDynamicIsland: false,
            platform: 'ios',
            ...deviceOnTheme,
          
        },
        capFontSize: capFontSize,
        adjustColor: adjustColor,

    }

    return theme
}


interface CreateThemeConfig extends ThemeConfig {
    framework: "react-native" | "web"
}



const createTheme = (config: CreateThemeConfig): ThemeInterface | ThemeInterfaceForHTML => {
    if(config.framework === "react-native") {
        return createThemeForNative(config)
    } else {
        return createThemeForWeb(config)
    }
 
}


export default createTheme