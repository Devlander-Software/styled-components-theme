import { ThemeInterface, ColorsInterface, ElevationObjType } from '../../types/theme.types';
export interface handleColorFromThemeInterface {
    (color: keyof ColorsInterface, opacity: number, theme: ThemeInterface): string | ElevationObjType | any;
}
export declare const handleColorFromTheme: handleColorFromThemeInterface;
export default handleColorFromTheme;
