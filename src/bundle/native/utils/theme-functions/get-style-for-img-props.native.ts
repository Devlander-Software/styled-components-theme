import {
  ImageStyleGenerator,
  NativeTheme
} from '../../../shared/types/base-theme-types';
import { ImageStyleFromProps } from '../../../shared/types/img-style-props';
import { getBorderRadius } from '../../../shared/utils/get-border-radius';

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
  borderTopLeftRadius,
  debug // Add the debug flag here to pass it to getBorderRadius
}: ImageStyleFromProps<NativeTheme, number>): string => {
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
        ${maxWidth ? `max-width: ${theme.unitPropsHandler(maxWidth)};` : ''}
        ${maxHeight ? `max-height: ${theme.unitPropsHandler(maxHeight)};` : ''}

        ${getBorderRadius(
          theme,
          borderRadius,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          debug // Pass the debug flag to enable logging if needed
        )}

    `;

  return css.trim();
};
