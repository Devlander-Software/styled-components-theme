/* eslint-disable import/order */
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import type {
  FontSizePropsHandler,
  ResponsiveBy,
} from '../../../shared/types/font-size-handler.type';
import { ResponsiveByPercentOrValue } from '../../../shared/types/font-size-handler.type';
import { capFontSize } from '../../../shared/utils/cap-font-size';

// Define the function to get the responsive font size value.
const getResponsiveFontSize = (
  fontSize: number,
  maxFontSize: number,
  screenHeight: number | undefined,
  responsiveBy: ResponsiveByPercentOrValue | ResponsiveBy
): number => {
  // Helper function to calculate the font value based on responsiveness strategy.
  const getFontValue = (
    fontSize: number,
    screenHeight: number | undefined,
    responsiveBy: ResponsiveByPercentOrValue | ResponsiveBy
  ): number => {
    let fontValue: number = 0;
    if (responsiveBy === ResponsiveByPercentOrValue.Value) {
      fontValue = screenHeight
        ? RFValue(fontSize, screenHeight)
        : RFValue(fontSize);
    } else if (responsiveBy === ResponsiveByPercentOrValue.Percent) {
      fontValue = RFPercentage(fontSize);
    }
    return fontValue;
  };

  // Get the adjusted font size value.
  const adjustedFontSize = getFontValue(fontSize, screenHeight, responsiveBy);
  // Calculate the adjusted max font size depending on the responsiveBy method.
  const adjustedMaxFontSize =
    responsiveBy === ResponsiveByPercentOrValue.Value
      ? maxFontSize
      : RFPercentage(maxFontSize);

  // Cap the font size using the utility function.
  return capFontSize(adjustedFontSize, adjustedMaxFontSize);
};

// Export the main function with all parameters set as optional.
export const handleFontSizePropsForNative: FontSizePropsHandler = (
  fontSize?: number | string,
  maxFontSize?: number | string,
  standardScreenHeight?: number | string,
  responsiveBy?: ResponsiveByPercentOrValue | ResponsiveBy
): string => {
  if (!fontSize) fontSize = 13;
  if (!maxFontSize) maxFontSize = 24;
  if (!standardScreenHeight)
    standardScreenHeight = Dimensions.get('window').height;
  if (!responsiveBy) responsiveBy = ResponsiveByPercentOrValue.Value;

  // Parse the input parameters and validate them.
  const parsedFontSize = parseInt(fontSize.toString(), 10);
  const parsedMaxFontSize = maxFontSize
    ? parseInt(maxFontSize.toString(), 10)
    : undefined;

  // If parsed values are not valid numbers, throw an error.
  if (isNaN(parsedFontSize)) {
    throw new Error('Invalid fontSize provided');
  }
  if (parsedMaxFontSize !== undefined && isNaN(parsedMaxFontSize)) {
    throw new Error('Invalid maxFontSize provided');
  }

  // Convert standardScreenHeight to a number if it is a string, or use undefined if not provided.
  const parsedScreenHeight = standardScreenHeight
    ? parseInt(standardScreenHeight.toString(), 10)
    : undefined;

  // Get the adjusted font size.
  const adjustedFontSizeValue = getResponsiveFontSize(
    parsedFontSize,
    parsedMaxFontSize || parsedFontSize, // Use fontSize as max if maxFontSize is not provided
    parsedScreenHeight,
    responsiveBy
  );

  // Return the final font size as a string with 'px' suffix.
  return `${adjustedFontSizeValue}px`;
};

