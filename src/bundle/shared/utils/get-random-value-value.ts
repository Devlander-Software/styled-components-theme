import { lightColors } from "../defaults/light-colors.defaults";
import { ValueOfColor } from "../types/color.types";

// Function to get a random value from lightColors
export function getRandomColorValue(): ValueOfColor {
  const colorKeys = Object.keys(lightColors) as (keyof typeof lightColors)[];
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const randomColorKey = colorKeys[randomIndex];
  if(!randomColorKey){
    return '#ffffff';
  } else {
    let value = lightColors[randomColorKey];
  
    if (!value) {
      return '#ffffff';
    } else {
      return value;
    }
  }
 
}
