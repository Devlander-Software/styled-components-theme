import { AdjustColorParams } from "../utils/adjust-color";
import { capFontSizeInterface } from "../utils/get-style/cap-font-size";
import { GetStyleForContainerPropsParameters } from "../utils/get-style/get-style-for-container-props";
import { GetStyleForGhostPropsParametersNative } from "../utils/get-style/get-style-for-ghost-props";
import { GetStyleForTextPropsParametersNative } from "../utils/get-style/get-style-for-text-props";
import { GetStyleForTouchableOpacityInterface } from "../utils/get-style/get-style-for-touchable-opacity-props";
import { BoxShadowFuncInterface } from "../utils/get-style/handle-box-shadows";
import { HandleColorFromThemeInterfaceNative } from "../utils/get-style/handle-color-from-theme";
import { HandleFontFromThemeParametersForNative } from "../utils/get-style/handle-font-for-theme";
import { HandleFontSizePropsInterface } from "../utils/get-style/handle-font-size-props";
import { HandleSnackbarColorInterface } from "../utils/get-style/handle-snackbar-color";
import { HandleUnitPropsInterface } from "../utils/get-style/handle-unit-props";
import { GetStyleForGhostPropsParametersWeb } from "../utils/get-style/web/get-style-for-ghost-props.web";
import { GetStyleForImgPropsInterface } from "../utils/get-style/web/get-style-for-img-props";
import { GetStyleForParagraphPropsWeb } from "../utils/get-style/web/get-style-for-paragraph-props";
import { HandleColorFromThemeInterfaceWeb } from "../utils/get-style/web/handle-color-for-theme.web";
import { HandleFontFromThemeParametersForWeb } from "../utils/get-style/web/handle-font-for-theme.web";
import { ColorFromTheme, ColorsInterface } from "./color.types";
import { ContainerStyleInterfaceWithTheme } from "./container-style.props.interface";
import { DeviceOnTheme } from "./device-on-theme.type";
import { ElevationObjType } from "./elevation-obj.type";
import { FontWeightType } from "./font-weight.enum";
import { FontType, FontsInterface } from "./fonts.interface";
export interface GetStyleForTextPropsParameters<Props> {
    (props: Props): string;
}
export interface HandleFontFromThemeParameters<T> {
    (fontType: FontType, fontTypeWeight: FontWeightType, theme: T): string;
}
export interface HandleColorFromThemeParameters<T> {
    (color: ColorFromTheme, opacity: number, theme: T): string;
}
export interface GetStyleForGhostPropsParameters<T> {
    (ghost: boolean, disabled: boolean, theme: T, colorOne: keyof ColorsInterface, colorTwo: keyof ColorsInterface): string;
}
export type PaddingOnThemeType = {
    paddingForScrollView: number;
    paddingForScrollViewTwo: number;
};
export interface ThemeInterface {
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
export interface ThemeInterfaceForHTML {
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
