import { BaseThemeInterface } from "../base-theme.interface";
import { CustomViewStylePropsInterface } from "../custom-style-props.interface";

export interface BaseDivInterface extends Partial<React.HTMLProps<HTMLDivElement>>, BaseThemeInterface, CustomViewStylePropsInterface {
    padding?: number | string;
    paddingTop?: number | string;
    width?: number | string;
    position?: "absolute" | "relative";
    maxWidth?: number | string;
    paddingLeft?: number | string;
    marginBottom?: number | string;
    opacity?: number | string;
    paddingRight?: number;
    maxHeight?: number | string;
    marginLeft?: number  | string;
    marginRight?: number | string;
    paddingBottom?: number | string;
    height?: number | string;
    borderWidth?: number | string; 
    borderColor?: string | string;
    backgroundOpacity?: number;
    borderBottomLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    borderTopLeftRadius?: string | number;
    borderTopRightRadius?: string | number;
}