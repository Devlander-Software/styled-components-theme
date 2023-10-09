import hexToRgba from 'hex-to-rgba'

import { ColorFromTheme } from '../../types/color.types'
import { HandleColorFromThemeParameters, ThemeInterface } from '../../types/theme.types'
import { isValidHex } from './is-valid-hex'

export type HandleColorFromThemeInterfaceNative  = HandleColorFromThemeParameters<ThemeInterface>


export const handleColorFromTheme: HandleColorFromThemeInterfaceNative = (
  color:  ColorFromTheme,
  opacity: number = 1,
  theme: ThemeInterface
): string => {

  const tempColor = color? color : 'primaryTextColor' as string;
  const colorExistsInTheme = theme && theme.colors && theme.colors[tempColor as ColorFromTheme] ? true : false;
  if (
    colorExistsInTheme &&
    isValidHex(theme.colors[color] as any)
  ) {
    return hexToRgba(theme.colors[color] as string, opacity)
  } else if (theme.colors[color]) {
    return theme.colors[color]
  } else {
    return theme.colors.primaryTextColor
  }
}


export default handleColorFromTheme