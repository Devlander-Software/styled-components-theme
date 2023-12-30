import {
  ColorFromTheme,
  colorKeysArray,
} from '../types/color.types';

// Function to get a random key from ColorsInterface
export function getRandomColorKey(): ColorFromTheme {
  const randomIndex = Math.floor(Math.random() * colorKeysArray.length);
  if (!colorKeysArray[randomIndex]) console.log('randomIndex', randomIndex);

  const value = colorKeysArray[randomIndex];
  if (!value) {
    return 'primary';
  } else {
    return value;
  }
}
