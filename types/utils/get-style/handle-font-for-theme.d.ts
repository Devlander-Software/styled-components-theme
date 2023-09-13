import { FontTypeWeight, ThemeInterface } from '../../types/theme.types';
export declare const handleFontFromTheme: (fontType: keyof ThemeInterface['fonts'], fontTypeWeight: keyof FontTypeWeight | undefined, theme: ThemeInterface) => string;
