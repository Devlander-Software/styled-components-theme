import type { FC, ReactElement } from 'react';

import { WebTheme } from '../../shared/types/base-theme-types';
import { FunctionProviderProps } from '../../shared/types/function-provider.types';
import { adjustColor } from '../../shared/utils/adjust-color';
import { capFontSize } from '../../shared/utils/cap-font-size';
import { boxShadowOne } from '../../shared/utils/handle-box-shadows';
import { unitPropsHandler } from '../../shared/utils/handle-unit-props';
import { getStyleForGhostPropsForWeb } from '../utils/theme-functions/get-style-for-ghost-props.web';
import { getStyleForImgPropsForWeb } from '../utils/theme-functions/get-style-for-img-props.web';
import { getStyleForTextPropsForWeb } from '../utils/theme-functions/get-style-for-text-props.web';
import { getStyleFromButtonPropsForWeb } from '../utils/theme-functions/get-style-from-button-props.web';
import { getStyleFromPropsForWeb } from '../utils/theme-functions/get-style-from-props.web';
import { colorThemeHandlerWeb } from '../utils/theme-functions/handle-color-for-theme.web';
import { handleFontFromThemeForWeb } from '../utils/theme-functions/handle-font-for-theme.web';
import { handleFontSizePropsForWeb } from '../utils/theme-functions/handle-font-size-props.web';
import React from 'react';
// Interfaces and types for StyledProvider Web
export interface WithThemeFunctionsAndStyleWeb
  extends FunctionProviderProps<WebTheme> {
  theme: WebTheme;
}

export type ComponentWithThemeFunctionsWeb =
  FC<WithThemeFunctionsAndStyleWeb>;
export type WithThemeFunctionsForWeb = FC<FunctionProviderProps<WebTheme>>;

export const withThemeFunctionsWeb = (
  Component: ComponentWithThemeFunctionsWeb
): WithThemeFunctionsForWeb => {

  return (props: FunctionProviderProps<WebTheme>): ReactElement => {
    const { baseTheme, children } = props;
    const theme: WebTheme = {
      ...baseTheme,
      fontSizePropsHandler: handleFontSizePropsForWeb,
      unitPropsHandler: unitPropsHandler,
      layoutStyleGenerator: getStyleFromPropsForWeb,
      imageStyleGenerator: getStyleForImgPropsForWeb,
      buttonStyleGenerator: getStyleFromButtonPropsForWeb,
      ghostStyleGenerator: getStyleForGhostPropsForWeb,
      textStyleGenerator: getStyleForTextPropsForWeb,
      boxShadowOne: boxShadowOne,
      boxShadowTwo: boxShadowOne,
      boxShadowThree: boxShadowOne,
  
      colorThemeHandler: colorThemeHandlerWeb,
      fontThemeHandler: handleFontFromThemeForWeb,
      fontSizeCap: capFontSize,
      colorAdjuster: adjustColor,
    };
    return (
      <Component baseTheme={baseTheme} theme={theme}>
        <>{children}</>
      </Component>
    );
  };
};
