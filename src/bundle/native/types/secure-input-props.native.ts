import { ViewStyle } from 'react-native';
import { IconNames } from '../../shared/types/icons/icon-names.enum';
import { SecureInputProps } from '../../shared/types/secure-input-props';

export interface SecureInputPropsForNative<ContainerStyleProps = ViewStyle> extends
 
    SecureInputProps<ContainerStyleProps> {
  secureTextOnIcon?: IconNames;
  secureTextOffIcon?: IconNames;
  securePressOnChange: () => void;
}
