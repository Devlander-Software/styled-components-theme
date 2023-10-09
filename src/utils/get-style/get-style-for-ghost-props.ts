import { ColorsInterface, GetStyleForGhostPropsParameters, ThemeInterface } from '../../types/theme.types';

export type GetStyleForGhostPropsParametersNative =  GetStyleForGhostPropsParameters<ThemeInterface>

export const getStyleForGhostProps: GetStyleForGhostPropsParametersNative = (
  ghost: boolean,
  disabled: boolean,
  theme: ThemeInterface,
  colorOne: keyof ColorsInterface,
  colorTwo: keyof ColorsInterface,
) =>
  disabled === true && ghost === true
    ? theme.handleColorFromTheme('blackAlpha40', 0.5, theme)
    : disabled === false && ghost === false
    ? theme.handleColorFromTheme(colorOne, 1, theme)
    : ghost === true
    ? theme.handleColorFromTheme(colorTwo, 1, theme)
    : disabled
    ? theme.handleColorFromTheme('blackAlpha40', 0.5, theme)
    : theme.handleColorFromTheme(colorOne, 1, theme)


export default getStyleForGhostProps