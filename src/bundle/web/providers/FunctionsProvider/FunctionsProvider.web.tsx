import React from 'react';
import { WithThemeFunctionsAndStyleWeb, withThemeFunctionsWeb } from '../../hoc/withThemeFunctions.web';

// Component

const FunctionsProviderWithoutFunctionsForWeb: React.FC<
  WithThemeFunctionsAndStyleWeb
> = (props: WithThemeFunctionsAndStyleWeb) => {
  const { children, theme, ThemeProviderComponent } = props;
  if (!theme || !ThemeProviderComponent) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return (
      <ThemeProviderComponent theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeProviderComponent>
    );
  }
};

export const StyledProviderWithFunctionsForWeb = withThemeFunctionsWeb(
  FunctionsProviderWithoutFunctionsForWeb
);

export default StyledProviderWithFunctionsForWeb;
