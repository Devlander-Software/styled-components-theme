import { ThemeInterface } from "../../types/theme.types";
export interface handleSnackbarColorInterface {
    (colorType?: undefined | 'none' | 'success' | 'error', theme?: ThemeInterface): string;
}
export declare const handleSnackbarColor: handleSnackbarColorInterface;
export default handleSnackbarColor;
