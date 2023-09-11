import { ViewProps } from "react-native";
import { BaseThemeInterface } from "./base-theme.interface";
import { CustomViewStylePropsInterface } from "./custom-style-props.interface";
import { ThemeInterface } from "./theme.types";
export interface BaseViewInterface extends ViewProps, BaseThemeInterface, CustomViewStylePropsInterface {
    theme: ThemeInterface;
    padding?: number;
    paddingTop?: number;
    width?: number;
    position?: "absolute" | "relative";
    maxWidth?: number;
    paddingLeft?: number;
    marginBottom?: number;
    opacity?: number;
    paddingRight?: number;
    maxHeight?: number;
    marginLeft?: number;
    marginRight?: number;
    paddingBottom?: number;
    height?: number;
    borderWidth?: number;
    borderColor?: string;
    backgroundOpacity?: number;
}
//# sourceMappingURL=base-view.interface.d.ts.map