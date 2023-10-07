import { Platform } from 'react-native'
import { FontTypeEnum } from '../../../types/font-type.enum'
import { FontTypeWeight, ThemeInterface, ThemeInterfaceForHTML } from '../../../types/theme.types'


export interface HandleFontFromThemeParametersForWeb {
    (fontType: keyof ThemeInterface['fonts'],
    fontTypeWeight: keyof FontTypeWeight,
    theme: ThemeInterfaceForHTML): string
  }
    


export const handleFontFromThemeWeb: HandleFontFromThemeParametersForWeb = (
  fontType: keyof ThemeInterface['fonts'],
  fontTypeWeight: keyof FontTypeWeight = 'bold',
  theme:  ThemeInterfaceForHTML
): string => {

  const tempFontType = fontType? fontType : FontTypeEnum.Font2
  if (
    fontType &&
    fontTypeWeight &&
    Platform.OS === 'web' &&
    theme.fonts[tempFontType] &&
    theme.fonts[tempFontType].name
  ) {
    return theme.fonts[fontType].name as string
  } else if (fontType && fontTypeWeight && Platform.OS !== 'web') {
    return theme.fonts[fontType][fontTypeWeight]
  } else if (Platform.OS === 'web') {
    return theme.fonts.Font2.name as string
  } else {
    return theme.fonts.Font2.bold as string
  }
}


export default handleFontFromThemeWeb