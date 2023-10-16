/* eslint-disable no-undef */
import Color from "color";

export interface AdjustColorParams {
  (
    colorValue: string,
    alphaValue: number,
    mode: "light" | "dark",
    isSolid?: boolean,
  ): string;
}

export const cssColorNames = ["transparent"];

export const isConsoleAvailable = () =>
  typeof console !== "undefined" && console.log;

export const log = (message: string) => {
  if (isConsoleAvailable()) {
    console.log(message);
  }
};

const canBeConvertedIntoColor = (colorValue: string): boolean => {
  if (cssColorNames.includes(colorValue)) return true;

  try {
    const color = Color(colorValue);
    return Boolean(color);
  } catch (e) {
    return false;
  }
};

export const adjustColor: AdjustColorParams = (
  colorValue: string,
  alphaValue: number,
  mode: "light" | "dark",
  isSolid = false,
): string => {
  if (cssColorNames.includes(colorValue)) return colorValue;

  if (alphaValue < 0 || alphaValue > 100) {
    log("Alpha value should be between 0 and 100. Returning default color.");
    return "#FF0000"; // Default color (Red in this case)
  }

  if (canBeConvertedIntoColor(colorValue)) {
    try {
      let adjustedColor = Color(colorValue);

      if (mode === "light") {
        adjustedColor = adjustedColor.lighten(0.2);
      } else if (mode === "dark") {
        adjustedColor = adjustedColor.darken(0.2);
      }

      const alphaScale = alphaValue / 100;

      if (isSolid) {
        const solidColor = adjustedColor
          .alpha(alphaScale)
          .mix(Color("white"), 1 - alphaScale);
        return solidColor.hex();
      } else {
        adjustedColor = adjustedColor.alpha(alphaScale);

        if (adjustedColor.alpha() === 1) {
          return adjustedColor.hex();
        } else {
          return adjustedColor.rgb().string();
        }
      }
    } catch (error) {
      log(
        `Error adjusting color with value: ${colorValue}. Returning default color.`,
      );
      return "#FF0000"; // Default color (Red in this case)
    }
  } else {
    log(
      `Failed to convert ${colorValue} into a color. Returning default color.`,
    );
    return "#FF0000"; // Default color (Red in this case)
  }
};

export default adjustColor;
