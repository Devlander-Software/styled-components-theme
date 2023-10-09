import { ColorsInterface } from '../../../types/color.types';
import { GetStyleForGhostPropsParameters, ThemeInterfaceForHTML } from '../../../types/theme.types';

export type GetStyleForGhostPropsParametersWeb =  GetStyleForGhostPropsParameters<ThemeInterfaceForHTML>

export const getStyleForGhostPropsForWeb: GetStyleForGhostPropsParametersWeb = (
  ghost: boolean,
  disabled: boolean,
  theme: ThemeInterfaceForHTML,
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


export default getStyleForGhostPropsForWeb