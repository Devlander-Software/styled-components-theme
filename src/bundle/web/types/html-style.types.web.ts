

import { CSSProperties } from "react"
import { AutoCapitalizeEnum } from "../../shared/types/auto-capatlize.enum"
import { WebTheme } from '../../shared/types/base-theme-types'
import { DataDetectorEnum } from "../../shared/types/data-detector.enum"
import { FontTypeEnum } from '../../shared/types/font-type.enum'
import { FontWeightType } from '../../shared/types/font-weight.enum'
import { TextFontWeightTypesEnum } from '../../shared/types/font-weight.types'
import { IconNames } from '../../shared/types/icons/icon-names.enum'
import { KeyBoardTypeEnum } from "../../shared/types/keyboard-type.enum"
import { LayoutStyleProperties, ThemedLayoutStyleProps } from "../../shared/types/style-attributes.interfaces"
import { TextDecorationLineTypes } from '../../shared/types/text-decoration-line-types.enum'
import { TextContentTypeEnum } from "../../shared/types/text-field-content.enum"
import { ThemedTextStylingProps, UITextStylingAttributes } from "../../shared/types/text-style.types"
import { TextTransformTypes } from '../../shared/types/text-transform-types.enum'
import { HtmlSpanInterface } from "./span.types.web"




export interface DivTag extends ThemedLayoutStyleProps<WebTheme, any> {
    style?: any
}

export interface ParagraphTag extends ThemedTextStylingProps<WebTheme, any> {
    style?: any
}



export interface HtmlFormInputGroupProps extends Partial<HTMLInputElement> {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element;
    containerStyleProps?: CSSProperties;
    containerStyleFromTheme?: LayoutStyleProperties<string | number>;
  
    renderBottom?: () => JSX.Element | null;
    dataDetectorTypes?: DataDetectorEnum;
    textContentType?: TextContentTypeEnum;
    keyboardType?: KeyBoardTypeEnum;
    secureTextEntry?: boolean;
    errorText?: string | null | boolean | undefined;
    error?: boolean;
    label?: string;
    onChangeText: (text: string) => void;
    underlineColor?: string;
    editable?: boolean;
    autoCapitalize?: AutoCapitalizeEnum | undefined;
    backgroundColor?: string;
    submitting?: boolean;
    onSubmitEditing?: () => void;
  }
  
  export interface HtmlSecureInputProps extends HtmlFormInputGroupProps {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
  }
  




export interface HtmlSpanStyleProps
  extends Partial<HtmlSpanInterface>,
  UITextStylingAttributes<string | number> {
  fontType?: FontTypeEnum;
  fontTypeWeight?: FontWeightType;
  maxFontSizeMultiplier?: number;
  onDark?: boolean;
  fontStyle?: 'normal' | 'italic';
  numberOfLines?: number;
  paddingLeft?: number;
  highlight?: boolean;
  paddingTop?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  width?: number;
  lineHeight?: number;
  fontSize?: number;
  opacity?: number;
  destructive?: boolean;
  flex?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  fontWeight?: TextFontWeightTypesEnum;
  shadowOffsetY?: number;
  shadowRadius?: number;
  maxFontSize?: number;
  paddingRight?: number;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: TextTransformTypes;
  textDecorationLine?: TextDecorationLineTypes;
}

export interface HtmlSpanStylePropsWithTheme extends HtmlSpanStyleProps {
  theme: WebTheme;
}
