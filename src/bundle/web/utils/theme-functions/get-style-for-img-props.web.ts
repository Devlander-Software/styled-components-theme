import { WebTheme } from '../../../shared/types/base-theme-types';
import { ImageStyleFromProps } from "../../../shared/types/img-style-props";



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
}: ImageStyleFromProps<WebTheme, number | string>): string =>
  `
        ${
          backgroundColorFromTheme
            ? `background-color: ${theme.colorThemeHandler(
                backgroundColorFromTheme,
                1,
                theme
              )};`
            : ''
        }

        ${
          borderColorFromTheme
            ? `border-color: ${theme.colorThemeHandler(
                borderColorFromTheme,
                1,
                theme
              )};`
            : ''
        }
        ${
          borderWidth
            ? `border-width: ${theme.unitPropsHandler(borderWidth)};`
            : ''
        }
       
        ${width ? `width: ${theme.unitPropsHandler(width)};` : ''}

        ${height ? `height: ${theme.unitPropsHandler(height)};` : ''}
        ${width ? `width: ${theme.unitPropsHandler(width)};` : ''}
        ${maxWidth ? `max-width: ${theme.unitPropsHandler(maxWidth)};` : ''}
        ${maxHeight ? `max-height: ${theme.unitPropsHandler(maxHeight)};` : ''}

 border-radius: ${
   borderTopLeftRadius
     ? theme.unitPropsHandler(borderTopLeftRadius)
     : theme.unitPropsHandler(borderRadius)
 } ${
   borderTopRightRadius
     ? theme.unitPropsHandler(borderTopRightRadius)
     : theme.unitPropsHandler(borderRadius)
 } ${
   borderBottomRightRadius
     ? theme.unitPropsHandler(borderBottomRightRadius)
     : theme.unitPropsHandler(borderRadius)
 } ${
   borderBottomLeftRadius
     ? theme.unitPropsHandler(borderBottomLeftRadius)
     : theme.unitPropsHandler(borderRadius)
 }};



    `;
