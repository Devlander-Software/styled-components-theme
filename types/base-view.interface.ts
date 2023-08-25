import { BaseThemeInterface } from "./base-theme.interface"
import { ThemeInterface } from "./theme.types"

export interface BaseViewInterface extends BaseThemeInterface {
    theme: ThemeInterface;
    padding?: string | number;
    paddingTop?: string | number;
    width?: string | number;
    position?: "absolute" | "relative";
    maxWidth?: string | number;
    paddingLeft?: string | number;
    marginBottom?: string | number;
    opacity?: number;
    paddingRight?: string | number;
    maxHeight?: string | number;
    paddingBottom?: string | number;
    height?: string | number;
    borderWidth?: number | string;
    borderColor?: string;
    backgroundOpacity?: number;
}