import {
  ImageStyleGenerator,
  NativeTheme,
} from '../../../shared/types/base-theme-types';
import { ImageStyleFromProps } from '../../../shared/types/img-style-props';

export const getStyleForImgPropsForNative: ImageStyleGenerator<NativeTheme> = ({
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
  borderTopLeftRadius
}: ImageStyleFromProps<NativeTheme, number>): string => {
  const getBorderRadius =
    !borderBottomLeftRadius &&
    !borderTopRightRadius &&
    !borderBottomRightRadius &&
    !borderBottomLeftRadius
      ? `
    border-radius: ${
      borderRadius ? theme.unitPropsHandler(borderRadius) : '0px'
    };
  `
      : `  border-radius: ${
          borderTopLeftRadius
            ? theme.unitPropsHandler(borderTopLeftRadius)
            : theme.unitPropsHandler(0)
        } ${
          borderTopRightRadius
            ? theme.unitPropsHandler(borderTopRightRadius)
            : theme.unitPropsHandler(0)
        } ${
          borderBottomRightRadius
            ? theme.unitPropsHandler(borderBottomRightRadius)
            : theme.unitPropsHandler(0)
        } ${
          borderBottomLeftRadius
            ? theme.unitPropsHandler(borderBottomLeftRadius)
            : theme.unitPropsHandler(0)
        };`;

  const css = `
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

        ${getBorderRadius}



    `;
  return css.trim()
};
