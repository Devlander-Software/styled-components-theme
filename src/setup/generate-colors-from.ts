import { ColorFromTheme, ColorsInterface } from "../types/color.types";
import adjustColor from "../utils/adjust-color";

/**
 * Generates a new color palette based on the provided colors and a direction ('light' or 'dark').
 * @param colors - An object implementing the ColorsInterface.
 * @param to - A string, either 'light' or 'dark', to determine the direction to adjust the colors.
 * @returns The adjusted color palette.
 */
const generateColorsFrom = (colors: ColorsInterface, to: 'light' | 'dark'): ColorsInterface => {
    const adjustedColors: Partial<ColorsInterface> = {};

    // Loop through each property in the provided colors object
    for (const colorKey in colors) {
        const colorValue = colors[colorKey as ColorFromTheme];

        // Check if the color property name contains "Alpha" and skip if trying to make it solid
        if (colorKey.includes("Alpha")) {
            adjustedColors[colorKey as ColorFromTheme] = colorValue; // retain original value
        } else {
            // Use the adjustColor function to modify the color towards the desired shade (light or dark)
            adjustedColors[colorKey as ColorFromTheme] = adjustColor(colorValue, 100, to);
        }
    }

    return adjustedColors as ColorsInterface;
}

export default generateColorsFrom;
