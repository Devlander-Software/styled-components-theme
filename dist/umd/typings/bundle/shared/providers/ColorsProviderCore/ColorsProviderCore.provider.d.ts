import React from 'react';
import type { NativeTheme, WebTheme } from '../../types/base-theme-types';
import type { DeviceOnTheme } from '../../types/device-on-theme.type';
import type { FunctionProviderProps } from '../../types/function-provider.types';
import type { ThemeProviderOptions } from '../SharedThemeProviderCore/SharedThemeProviderCore.provider';
interface ColorsProviderCorePropsCore {
    children: React.ReactNode | React.ReactNode[];
    saveToStorage?: (key: string, value: boolean) => Promise<void>;
    getValueFromStorage?: (key: string) => Promise<boolean | undefined>;
    systemIsDark?: boolean;
    FunctionsProviderComponent?: React.ComponentType<FunctionProviderProps<WebTheme | NativeTheme>>;
    options?: ThemeProviderOptions;
}
interface ColorContextType {
    deviceOnTheme: DeviceOnTheme;
    setDeviceOnTheme: (value: DeviceOnTheme) => void;
    canToggleTheme: boolean;
    toggleLightDarkMode: () => void;
    setDarkThemeEnabled: (value: boolean) => void;
    darkThemeEnabled: boolean;
}
declare const DefaultColorsProviderCoreContext: ColorContextType;
declare const ColorsProviderCoreContext: React.Context<ColorContextType>;
declare const ColorsProviderCore: React.FC<ColorsProviderCorePropsCore>;
declare const useColorsContext: () => ColorContextType;
export { ColorsProviderCore, ColorsProviderCoreContext, DefaultColorsProviderCoreContext, useColorsContext };
export default ColorsProviderCore;
