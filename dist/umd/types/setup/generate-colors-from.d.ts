import { ColorsInterface } from "../types/color.types";
/**
 * Generates a new color palette based on the provided colors and a direction ('light' or 'dark').
 * @param colors - An object implementing the ColorsInterface.
 * @param to - A string, either 'light' or 'dark', to determine the direction to adjust the colors.
 * @returns The adjusted color palette.
 */
export declare const generateColorsFrom: (colors: ColorsInterface, to: "light" | "dark") => ColorsInterface;
export default generateColorsFrom;
