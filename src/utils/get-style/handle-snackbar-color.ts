import { ThemeInterface } from "../../types/theme.types"


export interface handleSnackbarColorInterface {
  (colorType?: undefined | 'none' | 'success' | 'error', theme?: ThemeInterface): string
}
export const handleSnackbarColor: handleSnackbarColorInterface = (
  type?: undefined | 'none' | 'success' | 'error' ,
  theme?: ThemeInterface,
): string => {
  if (!type || !theme) {
    return '#fff'
  } else {
    switch (type) {
      case 'success':
        return theme.colors.successColor
      case 'error':
        return theme.colors.error
      case 'none':
        return theme.colors.primaryTextColor
      default:
        return theme.colors.primaryTextColor
    }
  }
}


export default handleSnackbarColor