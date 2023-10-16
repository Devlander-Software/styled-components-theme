import { ColorNameOrValueEnum } from "../utils/get-style/shared/is-color-name-or-value";
export interface SVGPropsInterface {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    backgroundColorFromTheme?: ColorNameOrValueEnum;
}
export declare const defaultSVGProps: {
    width: string;
    height: string;
    viewBox: string;
};
