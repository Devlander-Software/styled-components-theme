import { WebTheme } from '../../shared/types/base-theme-types';
import { FunctionProviderProps } from '../../shared/types/function-provider.types';
import type { FC } from 'react';
export interface WithThemeFunctionsAndStyleWeb extends FunctionProviderProps<WebTheme> {
    theme: WebTheme;
}
export type ComponentWithThemeFunctionsWeb = FC<WithThemeFunctionsAndStyleWeb>;
export type WithThemeFunctionsForWeb = FC<FunctionProviderProps<WebTheme>>;
export declare const withThemeFunctionsWeb: (Component: ComponentWithThemeFunctionsWeb) => WithThemeFunctionsForWeb;
