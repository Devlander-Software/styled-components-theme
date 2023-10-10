import { ColorsInterface } from "../types/color.types";
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
        const colorValue = colors[colorKey as keyof ColorsInterface];

        // Swap logic for black and white series
        if (to === 'dark' && colorKey.startsWith('white')) {
            const blackKey = colorKey.replace('white', 'black');
            adjustedColors[colorKey as keyof ColorsInterface] = colors[blackKey as keyof ColorsInterface];
            continue;
        } else if (to === 'light' && colorKey.startsWith('black')) {
            const whiteKey = colorKey.replace('black', 'white');
            adjustedColors[colorKey as keyof ColorsInterface] = colors[whiteKey as keyof ColorsInterface];
            continue;
        }

        // Check if the color property name contains "Alpha" and retain original value
        if (colorKey.includes("Alpha")) {
            adjustedColors[colorKey as keyof ColorsInterface] = colorValue;
        } else {
            // Use the adjustColor function to modify the color towards the desired shade (light or dark)
            adjustedColors[colorKey as keyof ColorsInterface] = adjustColor(colorValue, 100, to);
        }
    }

    return adjustedColors as ColorsInterface;
}

export default generateColorsFrom;
