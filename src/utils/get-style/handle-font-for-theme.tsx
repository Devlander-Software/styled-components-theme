import { Platform } from 'react-native'
import { FontTypeEnum } from '../../types/font-type.enum'
import { FontTypeWeight, ThemeInterface } from 'types/theme.types'


export const handleFontFromTheme = (
  fontType: FontTypeEnum = FontTypeEnum.Font2,
  fontTypeWeight: keyof FontTypeWeight = 'bold',
  theme: ThemeInterface
): string => {
  if (
    fontType &&
    fontTypeWeight &&
    Platform.OS === 'web' &&
    theme.fonts[fontType] &&
    theme.fonts[fontType].name
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
