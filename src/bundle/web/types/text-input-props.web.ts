/* eslint-disable import/order */
import type { CSSProperties } from 'react';
import { AutoCapitalizeEnum } from '../../shared/types/auto-capatlize.enum';
import { AutoCompleteTypeEnum } from '../../shared/types/auto-complete.enum';
import { BaseTextInputProps } from '../../shared/types/base-input-props.types';
import { DataDetectorEnum } from '../../shared/types/data-detector.enum';
import { KeyBoardTypeEnum } from '../../shared/types/keyboard-type.enum';
import { LayoutStyleProperties } from '../../shared/types/style-attributes.interfaces';
import { TextContentTypeEnum } from '../../shared/types/text-field-content.enum';


export interface FormInputGroupPropsForWeb extends BaseTextInputProps<CSSProperties, (e: string | number) => void, (e: any) => void> {
  opacity?: number;
  dense?: boolean;
  renderRight?: () => JSX.Element | null;
  containerStyleFromTheme?: LayoutStyleProperties<string | number>;
  autoComplete?: AutoCompleteTypeEnum;
  renderBottom?: () => JSX.Element | null;
  dataDetectorTypes?: DataDetectorEnum;
  textContentType?: TextContentTypeEnum;
  keyboardType?: KeyBoardTypeEnum;
  secureTextEntry?: boolean;
  disabled?: boolean;
  errorText?: string | null | boolean | undefined;
  error?: boolean;
  label?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  underlineColor?: string;
  editable?: boolean;
  autoCapitalize?: AutoCapitalizeEnum | undefined;
  backgroundColor?: string;
  submitting?: boolean;
}


