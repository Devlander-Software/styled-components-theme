import { colorsInterface } from "./theme.types";
export interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: keyof colorsInterface;
}
export declare const defaultSVGProps: {
    width: string;
    height: string;
    viewBox: string;
};
//# sourceMappingURL=svg-props.interface.d.ts.map