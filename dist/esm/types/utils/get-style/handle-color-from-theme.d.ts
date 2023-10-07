import { ColorsInterface, ElevationObjType, ThemeInterface, ThemeInterfaceForHTML } from '../../types/theme.types';
export interface handleColorFromThemeInterface {
    (color: keyof ColorsInterface, opacity: number, theme: ThemeInterface | ThemeInterfaceForHTML): string | ElevationObjType | any;
}
export declare const handleColorFromTheme: handleColorFromThemeInterface;
export default handleColorFromTheme;
