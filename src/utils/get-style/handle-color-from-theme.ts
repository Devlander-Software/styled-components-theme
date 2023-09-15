import hexToRgba from 'hex-to-rgba'

import { isValidHex } from './is-valid-hex'
import { ThemeInterface, ColorsInterface, ElevationObjType }from '../../types/theme.types'

export interface handleColorFromThemeInterface {
  (
    color: keyof ColorsInterface,
    opacity: number,
    theme: ThemeInterface,
  ): string | ElevationObjType | any
}

export const handleColorFromTheme = (
  color: keyof ColorsInterface,
  opacity: number = 1,
  theme: ThemeInterface,
): string | ElevationObjType | any => {
  if (
    color &&
    theme.colors[color] &&
    color &&
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