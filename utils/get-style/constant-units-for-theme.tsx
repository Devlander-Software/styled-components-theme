import { Dimensions, Platform } from 'react-native'
import { paddingForThemeType } from '../../types/theme.types';


export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0

export const windowHeight = Dimensions.get('window').height || 0.1
export const windowWidth = Dimensions.get('window').width || 0.1
export const screenHeight = Dimensions.get('screen').height || 0.1
export const screenWidth = Dimensions.get('screen').width || 0.1

export const paddingForScrollView = 15
export const paddingForScrollViewTwo = 5

export const paddingObj: paddingForThemeType = {
  paddingForScrollView,
  paddingForScrollViewTwo,
}
