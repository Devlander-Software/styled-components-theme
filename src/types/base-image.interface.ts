import { ThemeInterface } from "./theme.types"

export interface BaseImageBackgroundInterface {
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    borderWidth?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    theme?: ThemeInterface
}