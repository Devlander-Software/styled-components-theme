import { ThemeInterface } from "../../../types/theme.types";
export interface HandleSnackbarColorInterface {
    (colorType?: undefined | "none" | "success" | "error", theme?: ThemeInterface): string;
}
export declare const handleSnackbarColor: HandleSnackbarColorInterface;
export default handleSnackbarColor;
