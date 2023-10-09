import { ColorsInterface } from "../types/color.types";
import { FontsInterface } from '../types/fonts.interface';
import { ThemeInterface, ThemeInterfaceForHTML } from '../types/theme.types';
export interface ThemeConfig {
    colorPreferences?: Partial<ColorsInterface>;
    fontPreferences?: Partial<FontsInterface>;
}
export declare const createThemeForNative: (config: ThemeConfig) => ThemeInterface;
export declare const createThemeForWeb: (config: ThemeConfig) => ThemeInterfaceForHTML;
interface CreateThemeConfig extends ThemeConfig {
    framework: "react-native" | "web";
}
declare const createTheme: (config: CreateThemeConfig) => ThemeInterface | ThemeInterfaceForHTML;
export default createTheme;
