import { FontTypeWeight, ThemeInterface } from '../../types/theme.types';
export interface HandleFontFromThemeParameters {
    (fontType: keyof ThemeInterface['fonts'], fontTypeWeight: keyof FontTypeWeight, theme: ThemeInterface): string;
}
export declare const handleFontFromTheme: HandleFontFromThemeParameters;
export default handleFontFromTheme;
