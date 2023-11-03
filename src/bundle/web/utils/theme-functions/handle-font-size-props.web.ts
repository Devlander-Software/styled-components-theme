import type {
  FontSizePropsHandler,
  ResponsiveBy,
} from '../../../shared/types/font-size-handler.type';
import { capFontSize } from '../../../shared/utils/cap-font-size';

// A utility function that mimics the RFValue function for web.
const getFontValue = (
  fontSize: number,
  screenHeight: number,
  responsiveBy: ResponsiveBy
): number => {
  // Define base and default screen height
  const baseFontSize = 16;
  const defaultScreenHeight = 768;
  let fontValue: number = fontSize;

  // Calculate font value based on the responsiveness strategy
  if (responsiveBy === 'percent') {
    fontValue = (baseFontSize * fontSize) / 100;
  } else if (responsiveBy === 'value') {
    const heightCoefficient = screenHeight / defaultScreenHeight;
    fontValue = fontSize * heightCoefficient;
  }

  return fontValue;
};

export const handleFontSizePropsForWeb: FontSizePropsHandler = (
  fontSize: number | string = 13,
  maxFontSize: number | string = 24,
  standardScreenHeight: number | string = window.innerHeight,
  responsiveBy: ResponsiveBy = 'value'
): string => {
  // Parse input parameters and provide defaults
  const parsedFontSize = parseInt(fontSize.toString(), 10);
  const parsedMaxFontSize = parseInt(maxFontSize.toString(), 10);
  const screenHeight = parseInt(standardScreenHeight.toString(), 10);

  // Check if parsed values are numbers and throw an error if not
  if (isNaN(parsedFontSize)) throw new Error('Invalid fontSize provided');
  if (isNaN(parsedMaxFontSize)) throw new Error('Invalid maxFontSize provided');
  if (isNaN(screenHeight)) throw new Error('Invalid screenHeight provided');

  // Calculate adjusted font size
  const adjustedFontSizeValue = getFontValue(
    parsedFontSize,
    screenHeight,
    responsiveBy
  );
  const cappedFontSizeValue = capFontSize(
    adjustedFontSizeValue,
    parsedMaxFontSize
  );

  // Return the final font size in pixels
  return `${cappedFontSizeValue}px`;
};

