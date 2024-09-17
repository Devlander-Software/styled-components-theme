import { logSeparator, logEnd, logFunction, logStart } from '@devlander/utils';
import type {
  LayoutStyleGenerator,
  WebTheme,
} from '../../../shared/types/base-theme-types';
import type { ComprehensiveStyleProps } from '../../../shared/types/style-attributes.interfaces';

export const getStyleFromPropsForWeb: LayoutStyleGenerator<
  WebTheme,
  string | number
> = ({
  theme,
  backgroundColorFromTheme,
  flex,
  paddingLeft,
  paddingTop,
  paddingRight,
  width,
  marginTop,
  marginBottom,
  opacity,
  marginLeft,
  marginRight,
  height,
  debug,
  maxWidth,
  maxHeight
}: ComprehensiveStyleProps<WebTheme, string | number>): string => {
  const debugModeEnabled =
    debug && typeof debug === 'boolean' && debug === true;

  if (debugModeEnabled) {
    logStart('getStyleFromPropsForWeb', 'get-style-from-props.web');

    logFunction(
      'getStyleFromPropsForWeb',
      {
        backgroundColorFromTheme,
        flex,
        paddingLeft,
        paddingTop,
        paddingRight,
        width,
        marginTop,
        marginBottom,
        opacity,
        marginLeft,
        marginRight,
        height,
        maxWidth,
        maxHeight
      },
      '1. - Initial properties object'
    );
    logSeparator();
  }

  const computedBackgroundColor = backgroundColorFromTheme
    ? theme.colorThemeHandler(backgroundColorFromTheme, 1, theme)
    : undefined;
  const computedPaddingLeft =
    paddingLeft && theme.unitPropsHandler(paddingLeft);
  const computedPaddingTop = paddingTop && theme.unitPropsHandler(paddingTop);
  const computedPaddingRight =
    paddingRight && theme.unitPropsHandler(paddingRight);
  const computedWidth = width && theme.unitPropsHandler(width);
  const computedMarginTop = marginTop && theme.unitPropsHandler(marginTop);
  const computedMarginBottom =
    marginBottom && theme.unitPropsHandler(marginBottom);
  const computedMarginLeft = marginLeft && theme.unitPropsHandler(marginLeft);
  const computedMarginRight =
    marginRight && theme.unitPropsHandler(marginRight);
  const computedHeight = height && theme.unitPropsHandler(height);
  const computedMaxWidth = maxWidth && theme.unitPropsHandler(maxWidth);
  const computedMaxHeight = maxHeight && theme.unitPropsHandler(maxHeight);

  const propertiesToSort: string[] = [
    computedBackgroundColor ? `background: ${computedBackgroundColor};` : '',
    flex ? `flex: ${flex};` : '',
    computedPaddingLeft ? `padding-left: ${computedPaddingLeft};` : '',
    computedPaddingTop ? `padding-top: ${computedPaddingTop};` : '',
    computedPaddingRight ? `padding-right: ${computedPaddingRight};` : '',
    computedWidth ? `width: ${computedWidth};` : '',
    computedMarginTop ? `margin-top: ${computedMarginTop};` : '',
    computedMarginBottom ? `margin-bottom: ${computedMarginBottom};` : '',
    opacity ? `opacity: ${opacity};` : '',
    computedMarginLeft ? `margin-left: ${computedMarginLeft};` : '',
    computedMarginRight ? `margin-right: ${computedMarginRight};` : '',
    computedHeight ? `height: ${computedHeight};` : '',
    computedMaxWidth ? `max-width: ${computedMaxWidth};` : '',
    computedMaxHeight ? `max-height: ${computedMaxHeight};` : '',
  ];

  if (debugModeEnabled) {
    logFunction(
      'getStyleFromPropsForWeb',
      { properties: propertiesToSort },
      '2. - Properties before sorting'
    );
    logSeparator();
  }

  const sortedProperties = propertiesToSort.filter(Boolean).sort();
  const css = sortedProperties.join('\n');

  if (debugModeEnabled) {
    logFunction('getStyleFromPropsForWeb', css, '3. - Final CSS output');
    logSeparator();
    logEnd('getStyleFromPropsForWeb');
  }

  return css;
};
