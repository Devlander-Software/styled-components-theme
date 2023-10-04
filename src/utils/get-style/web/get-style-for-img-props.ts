import { HtmlImgStyleProps, HtmlImgStylePropsWithTheme } from "../../../types/html/img.web.props";

export const getStyleForImgPropsForWeb = ({
  backgroundColorFromTheme,
  maxWidth,
  borderBottomRightRadius,
  borderColorFromTheme,
  borderTopRightRadius,
  maxHeight,
  height,
  theme,
  width,
  borderRadius,
  borderWidth,
  borderBottomLeftRadius,
  borderTopLeftRadius,
}: HtmlImgStylePropsWithTheme): string =>
  `
        ${
          backgroundColorFromTheme
            ? `background-color: ${theme.handleColorFromTheme(
                backgroundColorFromTheme,
                1,
                theme
              )};`
            : ''
        }

        ${
          borderColorFromTheme
            ? `border-color: ${theme.handleColorFromTheme(
                borderColorFromTheme,
                1,
                theme
              )};`
            : ''
        }
        ${
          borderWidth
            ? `border-width: ${theme.handleUnitProps(borderWidth)};`
            : ''
        }
       
        ${width ? `width: ${theme.handleUnitProps(width)};` : ''}

        ${height ? `height: ${theme.handleUnitProps(height)};` : ''}
        ${width ? `width: ${theme.handleUnitProps(width)};` : ''}
        ${maxWidth ? `max-width: ${theme.handleUnitProps(maxWidth)};` : ''}
        ${maxHeight ? `max-height: ${theme.handleUnitProps(maxHeight)};` : ''}

 border-radius: ${
   borderTopLeftRadius
     ? theme.handleUnitProps(borderTopLeftRadius)
     : theme.handleUnitProps(borderRadius)
 } ${
    borderTopRightRadius
      ? theme.handleUnitProps(borderTopRightRadius)
      : theme.handleUnitProps(borderRadius)
  } ${
    borderBottomRightRadius
      ? theme.handleUnitProps(borderBottomRightRadius)
      : theme.handleUnitProps(borderRadius)
  } ${
    borderBottomLeftRadius
      ? theme.handleUnitProps(borderBottomLeftRadius)
      : theme.handleUnitProps(borderRadius)
  }};



    `
