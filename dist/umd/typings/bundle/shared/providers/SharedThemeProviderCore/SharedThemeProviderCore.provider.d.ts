import React from 'react';
import type { ColorsInterface } from '../../types/color.types';
import type { FontsInterface } from '../../types/fonts.interface';
export interface ThemeColorPreferences {
    dark?: ColorsInterface;
    light?: ColorsInterface;
}
export interface ThemeProviderOptions {
    colorPreferences?: ThemeColorPreferences;
    fontPreferences?: Partial<FontsInterface>;
    ThemeProviderComponent?: React.ComponentType<any>;
}
export interface ThemeProviderPropsShared {
    systemIsDark?: boolean;
    getValueFromStorage?: (key: string) => Promise<boolean>;
    saveToStorage?: (key: string, value: boolean) => Promise<void>;
    children: React.ReactNode | React.ReactNode[];
    options?: ThemeProviderOptions;
}
export declare const ThemeProvider: React.FC<ThemeProviderPropsShared>;
