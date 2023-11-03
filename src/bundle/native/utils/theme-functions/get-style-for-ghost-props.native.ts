import { GhostStyleGenerator, NativeTheme } from '../../../shared/types/base-theme-types';
import { ColorNameOrValueFromTheme } from '../../../shared/types/color.types';



export const getStyleForGhostPropsForNative: GhostStyleGenerator<NativeTheme> = (
  ghost: boolean,
  disabled: boolean,
  theme: NativeTheme,
  colorOne: ColorNameOrValueFromTheme = 'primaryTextColor',
  colorTwo: ColorNameOrValueFromTheme = 'whiteAlpha100'
) =>
  disabled === true && ghost === true
    ? theme.colorThemeHandler('blackAlpha40', 0.5, theme)
    : disabled === false && ghost === false
    ? theme.colorThemeHandler(colorOne, 1, theme)
    : ghost === true
    ? theme.colorThemeHandler(colorTwo, 1, theme)
    : disabled
    ? theme.colorThemeHandler('blackAlpha40', 0.5, theme)
    : theme.colorThemeHandler(colorOne, 1, theme);

