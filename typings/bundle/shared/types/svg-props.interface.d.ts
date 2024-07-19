import type { ColorNameOrValueFromTheme } from './color.types';
export interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
}
