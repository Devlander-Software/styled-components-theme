import { ColorsInterface } from "./theme.types";
export interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: keyof ColorsInterface;
}
export declare const defaultSVGProps: {
    width: string;
    height: string;
    viewBox: string;
};
