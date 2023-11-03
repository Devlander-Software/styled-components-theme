import type { CSSProperties } from 'react';
import { BaseButtonProps } from '../../shared/types/base-button.types';
import type { ColorFromTheme } from '../../shared/types/color.types';
export interface ButtonPropsForWeb extends BaseButtonProps<string | number, CSSProperties> {
}
export interface GhostButtonForWeb extends BaseButtonProps<string | number, CSSProperties> {
    textColorFromTheme: ColorFromTheme;
    backgroundColorFromTheme: ColorFromTheme;
}
