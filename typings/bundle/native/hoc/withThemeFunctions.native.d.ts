import { NativeTheme } from '../../shared/types/base-theme-types';
import { FunctionProviderProps } from '../../shared/types/function-provider.types';
import type { FC } from 'react';
export interface WithThemeFunctionsAndStyleNative extends FunctionProviderProps<NativeTheme> {
    theme: NativeTheme;
}
export type ComponentWithThemeFunctionsNative = FC<WithThemeFunctionsAndStyleNative>;
export type WithThemeFunctionsForNative = FC<FunctionProviderProps<NativeTheme>>;
export declare const withThemeFunctionsNative: (Component: ComponentWithThemeFunctionsNative) => WithThemeFunctionsForNative;
