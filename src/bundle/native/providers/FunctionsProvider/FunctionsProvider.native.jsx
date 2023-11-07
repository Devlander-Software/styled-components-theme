import React from 'react';
import { withThemeFunctionsNative } from '../../hoc/withThemeFunctions.native';
// Component
var FunctionsProviderWithoutFunctionsForNative = function (props) {
    var children = props.children, theme = props.theme, ThemeProviderComponent = props.ThemeProviderComponent;
    if (!theme || !ThemeProviderComponent) {
        return <React.Fragment>{children}</React.Fragment>;
    }
    else {
        return (<ThemeProviderComponent theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeProviderComponent>);
    }
};
export var StyledProviderWithFunctionsForNative = withThemeFunctionsNative(FunctionsProviderWithoutFunctionsForNative);
export default StyledProviderWithFunctionsForNative;
//# sourceMappingURL=FunctionsProvider.native.jsx.map