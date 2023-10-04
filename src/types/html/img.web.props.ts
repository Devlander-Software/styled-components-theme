import { ThemeInterface } from '../theme.types'
import { HtmlImageInterface } from './img.type.web'

export interface HtmlImgStyleProps extends Partial<HtmlImageInterface> {
  width?: string | number
  borderColorFromTheme?: keyof ThemeInterface['colors']
  backgroundColorFromTheme?: keyof ThemeInterface['colors']
  height?: string | number
  borderRadius?: string | number
  borderWidth?: string | number
  maxHeight?: string | number
  borderTopLeftRadius?: number | string
  borderTopRightRadius?: number | string
  borderBottomLeftRadius?: number | string
  borderBottomRightRadius?: number | string
  maxWidth?: string | number
}
export interface HtmlImgStylePropsWithTheme extends HtmlImgStyleProps {
  theme: ThemeInterface
}
