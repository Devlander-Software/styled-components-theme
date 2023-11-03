import type { FC } from 'react';
import { WebTheme } from '../../shared/types/base-theme-types';
import { FunctionProviderProps } from '../../shared/types/function-provider.types';
export interface WithThemeFunctionsAndStyleWeb extends FunctionProviderProps<WebTheme> {
    theme: WebTheme;
}
export type ComponentWithThemeFunctionsWeb = FC<WithThemeFunctionsAndStyleWeb>;
export type WithThemeFunctionsForWeb = FC<FunctionProviderProps<WebTheme>>;
export declare const withThemeFunctionsWeb: (Component: ComponentWithThemeFunctionsWeb) => WithThemeFunctionsForWeb;
