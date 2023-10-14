import { lightColors } from '../defaults/light-colors.defaults';
import { ColorFromTheme, ColorsInterface } from "../types/color.types";
import adjustColor from "../utils/adjust-color";


/**
 * Generates a new color palette based on the provided colors and a direction ('light' or 'dark').
 * @param colors - An object implementing the ColorsInterface.
 * @param to - A string, either 'light' or 'dark', to determine the direction to adjust the colors.
 * @returns The adjusted color palette.
 */
export const generateColorsFrom = (
  colors: ColorsInterface,
  to: "light" | "dark",
): ColorsInterface => {
  const adjustedColors: Partial<ColorsInterface> = {
    ...lightColors,
  };

  // Loop through each property in the provided colors object
  for (const colorKey in colors) {
    const colorValue = colors[colorKey as ColorFromTheme];

    if(colorValue === undefined) continue;
    if(colorValue === "transparent") continue;


    // Swap logic for black and white series
    if (to === "dark" && colorKey.startsWith("white")) {
      const blackKey = colorKey.replace("white", "black");
      adjustedColors[colorKey as ColorFromTheme] =
        colors[blackKey as ColorFromTheme];
      continue;
    } else if (to === "light" && colorKey.startsWith("black")) {
      const whiteKey = colorKey.replace("black", "white");
      adjustedColors[colorKey as ColorFromTheme] =
        colors[whiteKey as ColorFromTheme];
      continue;
    }

    // Check if the color property name contains "Alpha" and retain original value
    if (colorKey.includes("Alpha")) {
      adjustedColors[colorKey as ColorFromTheme] = colorValue;
    } else {
      // Use the adjustColor function to modify the color towards the desired shade (light or dark)
      adjustedColors[colorKey as ColorFromTheme] = adjustColor(
        colorValue,
        100,
        to,
      );
    }
  }

  return adjustedColors as ColorsInterface;
};

export default generateColorsFrom;
