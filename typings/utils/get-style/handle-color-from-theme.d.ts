import { ThemeInterface, colorsInterface, elevationObjType } from '../../types/theme.types';
export interface handleColorFromThemeInterface {
    (color: keyof colorsInterface, opacity: number, theme: ThemeInterface): string | elevationObjType | any;
}
export declare const handleColorFromTheme: (color: keyof colorsInterface, opacity: number | undefined, theme: ThemeInterface) => string | elevationObjType | any;
//# sourceMappingURL=handle-color-from-theme.d.ts.map