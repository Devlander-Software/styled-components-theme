import React from 'react';
import type { WithThemeFunctionsAndStyleNative } from '../../hoc/withThemeFunctions.native';
import { withThemeFunctionsNative } from '../../hoc/withThemeFunctions.native';

// Component

const FunctionsProviderWithoutFunctionsForNative: React.FC<
  WithThemeFunctionsAndStyleNative
> = (props: WithThemeFunctionsAndStyleNative) => {
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

export const StyledProviderWithFunctionsForNative = withThemeFunctionsNative(
  FunctionsProviderWithoutFunctionsForNative
);

export default StyledProviderWithFunctionsForNative;
