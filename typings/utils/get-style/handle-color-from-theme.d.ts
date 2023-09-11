import { ThemeInterface, ColorsInterface, ElevationObjType } from '../../types/theme.types';
export interface handleColorFromThemeInterface {
    (color: keyof ColorsInterface, opacity: number, theme: ThemeInterface): string | ElevationObjType | any;
}
export declare const handleColorFromTheme: (color: keyof ColorsInterface, opacity: number | undefined, theme: ThemeInterface) => string | ElevationObjType | any;
//# sourceMappingURL=handle-color-from-theme.d.ts.map