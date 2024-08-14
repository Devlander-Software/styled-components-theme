import { LayoutStyleProperties } from "./style-attributes.interfaces"

export type ContainerStyleFromTheme = LayoutStyleProperties<number> | undefined

export interface ContainerStyleProps<S = Record<any, any>> {
  containerStyleFromTheme?: ContainerStyleFromTheme
  containerStyle?: S
}
