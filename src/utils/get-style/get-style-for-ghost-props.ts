import { ColorFromTheme } from "../../types/color.types";
import {
  GetStyleForGhostPropsParameters,
  ThemeInterface,
} from "../../types/theme.types";

export type GetStyleForGhostPropsParametersNative =
  GetStyleForGhostPropsParameters<ThemeInterface>;

export const getStyleForGhostProps: GetStyleForGhostPropsParametersNative = (
  ghost: boolean,
  disabled: boolean,
  theme: ThemeInterface,
  colorOne: ColorFromTheme = "primaryTextColor",
  colorTwo: ColorFromTheme = "whiteAlpha100",
) =>
  disabled === true && ghost === true
    ? theme.handleColorFromTheme("blackAlpha40", 0.5, theme)
    : disabled === false && ghost === false
    ? theme.handleColorFromTheme(colorOne, 1, theme)
    : ghost === true
    ? theme.handleColorFromTheme(colorTwo, 1, theme)
    : disabled
    ? theme.handleColorFromTheme("blackAlpha40", 0.5, theme)
    : theme.handleColorFromTheme(colorOne, 1, theme);

export default getStyleForGhostProps;
