import { lightColors } from "../defaults/light-colors.defaults";
import { ColorFromTheme, ColorsInterface } from "../types/color.types";
import adjustColor from "../utils/adjust-color";
import { hslToRgb } from "../utils/hsl-to-rgba";

const hexToRgb = (hex: string): string => {
  hex = hex.charAt(0) === "#" ? hex.slice(1) : hex;
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  if (hex.length === 8) {
    const a = ((bigint >> 24) & 255) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

export const generateColorsFrom = (
  colors: ColorsInterface,
  to: "light" | "dark",
): ColorsInterface => {
  const adjustedColors: Partial<ColorsInterface> = { ...lightColors };

  for (const colorKey in colors) {
    let colorValue = colors[colorKey as ColorFromTheme];

    if (colorValue === undefined) continue;
    if (colorValue === "transparent") continue;

    // Convert HEX to RGB(A) if needed
    if (colorValue.startsWith("#")) {
      colorValue = hexToRgb(colorValue);
    }

    // Convert HSL to RGB if needed
    else if (colorValue.startsWith("hsl")) {
      const hsl = colorValue.match(/\d+/g)!.map(Number);
      const [r, g, b] = hslToRgb(hsl[0], hsl[1], hsl[2]);
      colorValue = `rgb(${r}, ${g}, ${b})`;
    }

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
