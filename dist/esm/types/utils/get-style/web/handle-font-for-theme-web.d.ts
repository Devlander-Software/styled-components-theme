import { FontTypeWeight, ThemeInterface, ThemeInterfaceForHTML } from '../../../types/theme.types';
export interface HandleFontFromThemeParametersForWeb {
    (fontType: keyof ThemeInterface['fonts'], fontTypeWeight: keyof FontTypeWeight, theme: ThemeInterfaceForHTML): string;
}
export declare const handleFontFromThemeWeb: HandleFontFromThemeParametersForWeb;
export default handleFontFromThemeWeb;
