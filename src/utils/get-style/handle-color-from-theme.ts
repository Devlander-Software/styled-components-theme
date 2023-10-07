import hexToRgba from 'hex-to-rgba'

import { ColorsInterface, ElevationObjType, ThemeInterface, ThemeInterfaceForHTML } from '../../types/theme.types'
import { isValidHex } from './is-valid-hex'

export interface handleColorFromThemeInterface {
  (
    color: keyof ColorsInterface,
    opacity: number,
    theme: ThemeInterface | ThemeInterfaceForHTML,
  ): string | ElevationObjType | any
}

export const handleColorFromTheme: handleColorFromThemeInterface = (
  color: keyof ColorsInterface,
  opacity: number = 1,
  theme: ThemeInterface | ThemeInterfaceForHTML,
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