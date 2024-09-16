import { __assign } from "tslib";
import React from 'react';
import { capFontSize } from '../../shared/utils/cap-font-size';
import { boxShadowOne } from '../../shared/utils/handle-box-shadows';
import { unitPropsHandler } from '../../shared/utils/handle-unit-props';
import { getStyleForGhostPropsForNative } from '../utils/theme-functions/get-style-for-ghost-props.native';
import { getStyleForImgPropsForNative } from '../utils/theme-functions/get-style-for-img-props.native';
import { getStyleForTextPropsForNative } from '../utils/theme-functions/get-style-for-text-props.native';
import { getStyleFromButtonPropsForNative } from '../utils/theme-functions/get-style-from-button-props.native';
import { getStyleFromPropsNative } from '../utils/theme-functions/get-style-from-props.native';
import { colorThemeHandlerNative } from '../utils/theme-functions/handle-color-from-theme.native';
import { handleFontFromThemeForNative } from '../utils/theme-functions/handle-font-for-theme.native';
import { handleFontSizePropsForNative } from '../utils/theme-functions/handle-font-size-props.native';
import { adjustColor } from "@devlander/colors";
export var withThemeFunctionsNative = function (Component) {
    return function (props) {
        var baseTheme = props.baseTheme, children = props.children;
        var theme = __assign(__assign({}, baseTheme), { fontSizePropsHandler: handleFontSizePropsForNative, unitPropsHandler: unitPropsHandler, layoutStyleGenerator: getStyleFromPropsNative, imageStyleGenerator: getStyleForImgPropsForNative, buttonStyleGenerator: getStyleFromButtonPropsForNative, ghostStyleGenerator: getStyleForGhostPropsForNative, textStyleGenerator: getStyleForTextPropsForNative, boxShadowOne: boxShadowOne, boxShadowTwo: boxShadowOne, boxShadowThree: boxShadowOne, colorThemeHandler: colorThemeHandlerNative, fontThemeHandler: handleFontFromThemeForNative, fontSizeCap: capFontSize, colorAdjuster: adjustColor });
        return (<Component baseTheme={baseTheme} theme={theme}>
        <>{children}</>
      </Component>);
    };
};
//# sourceMappingURL=withThemeFunctions.native.jsx.map