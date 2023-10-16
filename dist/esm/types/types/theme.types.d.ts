import { AdjustColorParams } from "../utils/adjust-color";
import { GetStyleForContainerPropsParametersNative } from "../utils/get-style/native/get-style-for-container-props.native";
import { GetStyleForGhostPropsParametersNative } from "../utils/get-style/native/get-style-for-ghost-props.native";
import { GetStyleForTextPropsParametersNative } from "../utils/get-style/native/get-style-for-text-props.native";
import { GetStyleForTouchableOpacityInterface } from "../utils/get-style/native/get-style-for-touchable-opacity-props.native";
import { HandleFontFromThemeParametersForNative } from "../utils/get-style/native/handle-font-for-theme.native";
import { CapFontSizeInterface } from "../utils/get-style/shared/cap-font-size";
import { BoxShadowFuncInterface } from "../utils/get-style/shared/handle-box-shadows";
import { HandleColorFromThemeInterfaceNative } from "../utils/get-style/shared/handle-color-from-theme";
import { HandleFontSizePropsInterface } from "../utils/get-style/shared/handle-font-size-props";
import { HandleSnackbarColorInterface } from "../utils/get-style/shared/handle-snackbar-color";
import { HandleUnitPropsInterface } from "../utils/get-style/shared/handle-unit-props";
import { GetStyleForGhostPropsParametersWeb } from "../utils/get-style/web/get-style-for-ghost-props.web";
import { GetStyleForImgPropsInterface } from "../utils/get-style/web/get-style-for-img-props.web";
import { GetStyleForParagraphPropsWeb } from "../utils/get-style/web/get-style-for-paragraph-props.web";
import { GetStyleForContainerPropsParametersWeb } from "../utils/get-style/web/get-style-from-props.web";
import { HandleColorFromThemeInterfaceWeb } from "../utils/get-style/web/handle-color-for-theme.web";
import { HandleFontFromThemeParametersForWeb } from "../utils/get-style/web/handle-font-for-theme.web";
import { ColorNameOrValueFromTheme, ColorsInterface } from "./color.types";
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
    (color: ColorNameOrValueFromTheme, opacity: number, theme: T): string;
}
export interface GetStyleForContainerParameters<T> {
    (props: T): string;
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
export interface ThemeInterfaceForHTML {
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
