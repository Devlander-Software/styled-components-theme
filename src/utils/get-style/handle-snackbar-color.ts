import { ThemeInterface } from "../../types/theme.types";

export interface HandleSnackbarColorInterface {
  (
    colorType?: undefined | "none" | "success" | "error",
    theme?: ThemeInterface,
  ): string;
}
export const handleSnackbarColor: HandleSnackbarColorInterface = (
  type?: undefined | "none" | "success" | "error",
  theme?: ThemeInterface,
): string => {
  if (!type || !theme) {
    return "#fff";
  } else {
    switch (type) {
      case "success":
        return theme.colors.successColor;
      case "error":
        return theme.colors.error;
      case "none":
        return theme.colors.primaryTextColor;
      default:
        return theme.colors.primaryTextColor;
    }
  }
};

export default handleSnackbarColor;
