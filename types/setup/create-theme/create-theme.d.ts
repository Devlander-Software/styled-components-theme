import { ColorsInterface } from "../../types/color.types";
import { DeviceOnTheme } from "../../types/device-on-theme.type";
import { FontsInterface } from "../../types/fonts.interface";
import { ThemeInterface } from "../../types/theme.types";
export interface ThemeConfig {
    colorPreferences?: Partial<ColorsInterface>;
    fontPreferences?: Partial<FontsInterface>;
    deviceOnTheme?: Partial<DeviceOnTheme>;
}
export interface CreateThemeFunc {
    (config: ThemeConfig): ThemeInterface;
}
export declare const createTheme: CreateThemeFunc;
export default createTheme;
