/* eslint-disable no-undef */
import type { ViewStyle } from 'react-native';
import { LayoutStyleProps } from '../../shared/types/style-attributes.interfaces';
import type { BaseTextInputProps } from '../../shared/types/base-input-props.types';

export interface FormInputGroupPropsForNative extends BaseTextInputProps {
  opacity?: number;
  dense?: boolean;
  renderRight?: () => JSX.Element | null;
  containerStyleProps?: ViewStyle;
  containerStyleFromTheme?: LayoutStyleProps<number>;
}
