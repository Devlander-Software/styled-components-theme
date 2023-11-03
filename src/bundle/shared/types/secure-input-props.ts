import type { BaseTextInputProps } from './base-input-props.types';
import type { IconNames } from './icons/icon-names.enum';

export interface SecureInputProps extends BaseTextInputProps {
  secureTextOnIcon?: IconNames;
  secureTextOffIcon?: IconNames;
  securePressOnChange: () => void;
}
