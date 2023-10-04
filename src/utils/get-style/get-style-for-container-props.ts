import { ContainerStyleInterfaceWithTheme } from "../../types/container-style.props.interface"
import { StylePropsInterfaceWithTheme } from "../../types/custom-style-props.interface"
import { HtmlParagraphStylePropsWithTheme } from "../../types/html/paragraph-style.props.web"


export interface GetStyleForContainerPropsParameters {
	(props: ContainerStyleInterfaceWithTheme | HtmlParagraphStylePropsWithTheme): string
}


export const getStyleForContainerProps: GetStyleForContainerPropsParameters = ({
  maxWidth,
  maxHeight,
  height,
  theme,
  marginTop,
  width,
  backgroundColorFromTheme,
  marginBottom,
  minHeight,
  opacity,
  marginLeft,
  marginRight,
  paddingLeft,
  borderColorFromTheme,
  paddingRight,
  margin,
  borderWidth,
  flex,
  paddingTop,
}: ContainerStyleInterfaceWithTheme | StylePropsInterfaceWithTheme): string => {
  const handleUnitProps = theme.handleUnitProps
  const handleColorFromTheme = theme.handleColorFromTheme

  const css = `${
    backgroundColorFromTheme
      ? `background: ${handleColorFromTheme(
          backgroundColorFromTheme,
          1,
          theme,
        )};`
      : ''
  }
  ${flex ? `flex: ${flex};` : ''}
  ${paddingLeft ? `padding-left: ${handleUnitProps(paddingLeft)};` : ''}
  ${paddingTop ? `padding-top: ${handleUnitProps(paddingTop)};` : ''}
  ${paddingRight ? `padding-right: ${handleUnitProps(paddingRight)};` : ''}
  ${width ? `width: ${handleUnitProps(width)};` : ''}
  ${marginTop ? `margin-top: ${handleUnitProps(marginTop)};` : ''}
  ${marginBottom ? `margin-bottom: ${handleUnitProps(marginBottom)};` : ''}
  ${opacity ? `opacity: ${opacity};` : ''}
  ${marginLeft ? `margin-left: ${handleUnitProps(marginLeft)};` : ''}
  ${marginRight ? `margin-right: ${handleUnitProps(marginRight)};` : ''}
  ${height ? `height: ${handleUnitProps(height)};` : ''}
  ${maxWidth ? `max-width: ${handleUnitProps(maxWidth)};` : ''}
  ${maxHeight ? `max-height: ${handleUnitProps(maxHeight)};` : ''}
  ${minHeight ? `min-height: ${handleUnitProps(minHeight)};` : ''}
  ${
    borderColorFromTheme
      ? `border-color: ${handleColorFromTheme(
          borderColorFromTheme,
          1,
          theme,
        )};`
      : ''
  };
  ${borderWidth ? `border-width: ${handleUnitProps(borderWidth)};` : ''};
  ${margin ? `margin: ${handleUnitProps(margin)};` : ''};
`

  return css    
}


export default getStyleForContainerProps