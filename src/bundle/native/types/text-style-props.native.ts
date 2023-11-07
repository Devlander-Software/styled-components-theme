import type { TextStyle } from "react-native";
import { TextStylingPropsWrapper } from '../../shared/types/text-style.types';




export interface TextStylePropsNative
  extends TextStylingPropsWrapper<any, TextStyle> {
    fontSize?: number;

  }


