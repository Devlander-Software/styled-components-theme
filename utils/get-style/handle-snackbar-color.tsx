import { ThemeInterface } from '../../../../../../../herb-design-system-react-native/packages/shared/types/theme.types'
export interface handleSnackbarColorInterface {
  (colorType?: string | number, theme?: ThemeInterface): string | number
}
export const handleSnackbarColor = (
  type?: string,
  theme?: ThemeInterface,
): string => {
  if (!type || !theme) {
    return '#fff'
  } else {
    switch (type) {
      case 'success':
        return theme.colors.successColor
      case 'error':
        return theme.colors.errorColor
      case 'none':
        return theme.colors.primaryTextColor
      default:
        return theme.colors.primaryTextColor
    }
  }
}
