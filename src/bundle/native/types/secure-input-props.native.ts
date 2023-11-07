import { IconNames } from '../../shared/types/icons/icon-names.enum';
import type { FormInputGroupPropsForNative } from './text-input-props.native';
import type { SecureInputProps } from '../../shared/types/secure-input-props';

export interface SecureInputPropsForNative
  extends FormInputGroupPropsForNative,
    SecureInputProps {
  secureTextOnIcon?: IconNames;
  secureTextOffIcon?: IconNames;
  securePressOnChange: () => void;
}
