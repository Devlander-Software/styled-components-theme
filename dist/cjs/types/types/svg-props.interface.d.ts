import { ColorFromTheme } from "./color.types";
export interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: ColorFromTheme;
}
export declare const defaultSVGProps: {
    width: string;
    height: string;
    viewBox: string;
};
