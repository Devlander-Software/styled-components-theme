import { TouchableOpacityStylePropsInterfaceWithTheme } from "../../types/touchable-opacity.props.interface"

export const getStyleForTouchableOpacityProps = ({
  borderBottomWidth,
  maxWidth,
  borderRadius,
  paddingBottom,
  alignItems,
  justifyContent,
  padding,
  theme,
  marginTop,
  width,
  backgroundColorFromTheme,
  marginBottom,
  marginLeft,
  marginRight,
  paddingLeft,
  paddingRight,
  flex,
  paddingTop,
  alignSelf,
}: TouchableOpacityStylePropsInterfaceWithTheme): string => {
  const css: string[] = []

  if (backgroundColorFromTheme) {
    css.push(
      `background-color: ${theme.handleColorFromTheme(
        backgroundColorFromTheme,
        1,
        theme,
      )};`,
    )
  }
  if (flex) {
    css.push(`flex: ${flex};`)
  }
  if (paddingLeft) {
    css.push(`padding-left: ${theme.handleUnitProps(paddingLeft)};`)
  }
  if (width) {
    css.push(`width: ${theme.handleUnitProps(width)};`)
  }
  if (paddingBottom) {
    css.push(`padding-bottom: ${theme.handleUnitProps(paddingBottom)};`)
  }
  if (paddingTop) {
    css.push(`padding-top: ${theme.handleUnitProps(paddingTop)};`)
  }
  if (paddingRight) {
    css.push(`padding-right: ${theme.handleUnitProps(paddingRight)};`)
  }
  if (maxWidth) {
    css.push(`max-width: ${theme.handleUnitProps(maxWidth)};`)
  }
  if (marginTop) {
    css.push(`margin-top: ${theme.handleUnitProps(marginTop)};`)
  }
  if (marginBottom) {
    css.push(`margin-bottom: ${theme.handleUnitProps(marginBottom)};`)
  }
  if (marginLeft) {
    css.push(`margin-left: ${theme.handleUnitProps(marginLeft)};`)
  }
  if (marginRight) {
    css.push(`margin-right: ${theme.handleUnitProps(marginRight)};`)
  }
  if (alignSelf) {
    css.push(`align-self: ${alignSelf};`)
  }
  if (padding) {
    css.push(`padding: ${theme.handleUnitProps(padding)};`)
  }
  if (justifyContent) {
    css.push(`justify-content: ${justifyContent};`)
  }
  if (alignItems) {
    css.push(`align-items: ${alignItems};`)
  }
  if (borderRadius) {
    css.push(`border-radius: ${borderRadius};`)
  }
  if (borderBottomWidth) {
    css.push(
      `border-bottom-width: ${theme.handleUnitProps(borderBottomWidth)};`,
    )
  }

  return css.join(' ')
}
