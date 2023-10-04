import { ContainerStyleInterfaceWithTheme } from '../../../types/container-style.props.interface'
import { CustomStylePropsInterface, StylePropsInterface, StylePropsInterfaceWithTheme } from '../../../types/custom-style-props.interface'
export const getStyleFromProps = (props: StylePropsInterfaceWithTheme): string => {
  const {
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
    maxWidth,
    maxHeight,
  } = props;

  // Precompute the values
  const computedBackgroundColor = backgroundColorFromTheme ? theme.handleColorFromTheme(backgroundColorFromTheme, 1, theme) : undefined;
  const computedPaddingLeft = paddingLeft && theme.handleUnitProps(paddingLeft);
  const computedPaddingTop = paddingTop && theme.handleUnitProps(paddingTop);
  const computedPaddingRight = paddingRight && theme.handleUnitProps(paddingRight);
  const computedWidth = width && theme.handleUnitProps(width);
  const computedMarginTop = marginTop && theme.handleUnitProps(marginTop);
  const computedMarginBottom = marginBottom && theme.handleUnitProps(marginBottom);
  const computedMarginLeft = marginLeft && theme.handleUnitProps(marginLeft);
  const computedMarginRight = marginRight && theme.handleUnitProps(marginRight);
  const computedHeight = height && theme.handleUnitProps(height);
  const computedMaxWidth = maxWidth && theme.handleUnitProps(maxWidth);
  const computedMaxHeight = maxHeight && theme.handleUnitProps(maxHeight);

  return `
    ${computedBackgroundColor ? `background: ${computedBackgroundColor};` : ''}
    ${flex ? `flex: ${flex};` : ''}
    ${computedPaddingLeft ? `padding-left: ${computedPaddingLeft};` : ''}
    ${computedPaddingTop ? `padding-top: ${computedPaddingTop};` : ''}
    ${computedPaddingRight ? `padding-right: ${computedPaddingRight};` : ''}
    ${computedWidth ? `width: ${computedWidth};` : ''}
    ${computedMarginTop ? `margin-top: ${computedMarginTop};` : ''}
    ${computedMarginBottom ? `margin-bottom: ${computedMarginBottom};` : ''}
    ${opacity ? `opacity: ${opacity};` : ''}
    ${computedMarginLeft ? `margin-left: ${computedMarginLeft};` : ''}
    ${computedMarginRight ? `margin-right: ${computedMarginRight};` : ''}
    ${computedHeight ? `height: ${computedHeight};` : ''}
    ${computedMaxWidth ? `max-width: ${computedMaxWidth};` : ''}
    ${computedMaxHeight ? `max-height: ${computedMaxHeight};` : ''}
  `;
}
