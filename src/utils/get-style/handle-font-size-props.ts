
import { RFValue } from 'react-native-responsive-fontsize'
import Platform from 'react-native'

export interface handleFontSizePropsInterface {
  (fontSize: string | number | undefined): string | number | undefined | any
}
export const handleFontSizeProps: handleFontSizePropsInterface = (
  fontSize: string | number = 13,
  standardScreenHeight?: number,
): string => {
  const parsedFontSize =
    typeof fontSize === 'string' ? parseInt(fontSize, 10) : fontSize
  const adjustedFontSize = standardScreenHeight
    ? RFValue(parsedFontSize, standardScreenHeight)
    : RFValue(parsedFontSize)

  return `${adjustedFontSize}px`
}

export default handleFontSizeProps