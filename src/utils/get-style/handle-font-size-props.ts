import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import capFontSize from './cap-font-size';
import { Dimensions } from 'react-native';


export enum ResponsiveByPercentOrValue {
  Percent = "percent",
  Value = "value",
}

export interface HandleFontSizePropsInterface {
  (
    fontSize?: string | number,
    maxFontSize?: string | number,
    standardScreenHeight?: string | number,
    responsiveBy?: ResponsiveByPercentOrValue
  ): string;
}

export const getResponsiveFontSize = (fontSize:  number, maxFontSize: number, screenHeight: number | undefined, responsiveBy: ResponsiveByPercentOrValue): number => {
  const getFontValue = (fontSize:  number, screenHeight: number | undefined, responsiveBy: ResponsiveByPercentOrValue) => {
    let fontValue: number = 0;
    if(responsiveBy === ResponsiveByPercentOrValue.Value){
      if (typeof screenHeight === 'number') {
        fontValue = RFValue(fontSize, screenHeight);
      } else {
        fontValue = RFValue(fontSize);
      }
    } else if(responsiveBy === ResponsiveByPercentOrValue.Percent){
      if (typeof screenHeight === 'number') {
        fontValue = RFPercentage(fontSize);
      } else {
        fontValue = RFPercentage(fontSize);
      }
    }
    return fontValue;
  }

  const adjustedFontSize = getFontValue(fontSize,  screenHeight, responsiveBy);
  const adjustedMaxFontSize = responsiveBy === ResponsiveByPercentOrValue.Value ? maxFontSize : RFPercentage(maxFontSize);

  const cappedFontSize = capFontSize(adjustedFontSize, adjustedMaxFontSize);
  return cappedFontSize as number;
}

export const handleFontSizeProps: HandleFontSizePropsInterface = (
  fontSize: string | number = 13,
  maxFontSize: string | number | undefined = 24,
  standardScreenHeight: string | number = Dimensions.get('window').height,
  responsiveBy: ResponsiveByPercentOrValue = ResponsiveByPercentOrValue.Value
): string => {
  const parsedFontSize = typeof fontSize === 'string' ? parseInt(fontSize, 10) : fontSize;
  if (isNaN(parsedFontSize)) {
    throw new Error("Invalid fontSize provided");
  }

  const parsedMaxFontSize = typeof maxFontSize === 'string' ? parseInt(maxFontSize, 10) : maxFontSize;
  if (isNaN(parsedMaxFontSize)) {
    throw new Error("Invalid maxFontSize provided");
  }

  const parsedScreenHeight = standardScreenHeight ? parseInt(standardScreenHeight.toString(), 10) : undefined;
  
  let adjustedFontSizeValue = getResponsiveFontSize(parsedFontSize, parsedMaxFontSize, parsedScreenHeight, responsiveBy);


  return `${adjustedFontSizeValue}px`;
};

export default handleFontSizeProps;
