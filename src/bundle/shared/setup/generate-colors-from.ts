import { lightColors } from '../defaults/light-colors.defaults';
import type { ColorFromTheme, ColorsInterface } from '../types/color.types';
import { hexToRgb, adjustColor, hslToRgb } from '@devlander/colors';

export const generateColorsFrom = (
  colors: ColorsInterface,
  to: 'light' | 'dark'
): ColorsInterface => {
  // This syntax requires an imported helper but module 'tslib' cannot be found.ts(2354)

  const adjustedColors: Partial<ColorsInterface> = { ...lightColors };

  for (const colorKey in colors) {
    let colorValue = colors[colorKey as ColorFromTheme];

    if (colorValue === undefined) continue;
    if (colorValue === 'transparent') continue;

    // Convert HEX to RGB(A) if needed
    if (colorValue.startsWith('#')) {
      colorValue = hexToRgb(colorValue);
    }

    // Convert HSL to RGB if needed
    else if (colorValue.startsWith('hsl')) {
      const hslMatch = colorValue.match(/\d+/g);
      if (hslMatch && hslMatch.length === 3) {
        const hsl = hslMatch.map(Number);
        if (hsl.every((value) => !isNaN(value))) {
          if(hsl[0] && hsl[1] && hsl[2]){
            const [r, g, b] = hslToRgb(hsl[0], hsl[1], hsl[2]);
            colorValue = `rgb(${r}, ${g}, ${b})`;
          }
          
        }
      }
    }

    // Swap logic for black and white series
    if (to === 'dark' && colorKey.startsWith('white')) {
      const blackKey = colorKey.replace('white', 'black');
      adjustedColors[colorKey as ColorFromTheme] =
        colors[blackKey as ColorFromTheme];
      continue;
    } else if (to === 'light' && colorKey.startsWith('black')) {
      const whiteKey = colorKey.replace('black', 'white');
      adjustedColors[colorKey as ColorFromTheme] =
        colors[whiteKey as ColorFromTheme];
      continue;
    }

    // Check if the color property name contains "Alpha" and retain original value
    if (colorKey.includes('Alpha')) {
      adjustedColors[colorKey as ColorFromTheme] = colorValue;
    } else {
      adjustedColors[colorKey as ColorFromTheme] = adjustColor(
        colorValue,
        1, // assuming full alpha
        to
      );
    }
  }

  return adjustedColors as ColorsInterface;
};
