/**
 * Type definition for handling color from theme.
 */
import { ColorThemeHandler, NativeTheme } from '../../../shared/types/base-theme-types';
/**
 * Retrieve a color from the theme based on the given color name, value, and opacity.
 * If the color is not found, it defaults to the primary text color from the theme.
 *
 * @param color - The name or value of the color from the theme.
 * @param opacity - The desired opacity. Defaults to 1 if not provided.
 * @param theme - The theme object containing the color definitions.
 * @returns The RGBA color string.
 */
export declare const colorThemeHandlerNative: ColorThemeHandler<NativeTheme>;
