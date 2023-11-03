import { IconNames } from '../../shared/types/icons/icon-names.enum';
import type { SecureInputProps } from '../../shared/types/secure-input-props';
import type { FormInputGroupPropsForNative } from './text-input-props.native';
export interface SecureInputPropsForNative extends FormInputGroupPropsForNative, SecureInputProps {
    secureTextOnIcon?: IconNames;
    secureTextOffIcon?: IconNames;
    securePressOnChange: () => void;
}
