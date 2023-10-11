/**
 * Adjusts a color's alpha and brightness.
 * @param colorValue - A string representing a color (e.g. hex, rgb, rgba).
 * @param alphaValue - A number between 0 to 100 representing the alpha value.
 * @param mode - A string, either 'light' or 'dark', to adjust the brightness.
 * @param isSolid - A boolean value. If true, returns the solid version of the color with no transparency.
 * @returns The adjusted color as a string.
 */
export interface AdjustColorParams {
    (colorValue: string, alphaValue: number, mode: "light" | "dark", isSolid?: boolean): string;
}
declare const adjustColor: AdjustColorParams;
export default adjustColor;
