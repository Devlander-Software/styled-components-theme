/**
 * Adjusts a color's alpha and brightness.
 * @param colorValue - A string representing a color (e.g. hex, rgb, rgba).
 * @param alphaValue - A number between 0 to 100 representing the alpha value.
 * @param mode - A string, either 'light' or 'dark', to adjust the brightness.
 * @returns The adjusted color as an rgba string.
 */
declare function adjustColor(colorValue: string, alphaValue: number, mode: 'light' | 'dark'): string;
export default adjustColor;
