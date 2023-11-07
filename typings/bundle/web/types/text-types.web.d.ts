import { WebTheme } from '../../shared/types/base-theme-types';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
import { FontTypeEnum } from '../../shared/types/font-type.enum';
import { FontTypeWeightEnum } from '../../shared/types/font-weight.enum';
import { TextDecorationLineTypes } from '../../shared/types/text-decoration-line-types.enum';
import { ResolvedThemedTextStylingProps } from '../../shared/types/text-style.types';
export interface TextInterfaceForWeb extends ResolvedThemedTextStylingProps<WebTheme, string | number> {
    paddingTop?: number;
    paddingBottom?: number;
    textDecoration?: TextDecorationLineTypes;
    error?: boolean;
    fontFamily?: string;
    maxFontSize?: number;
    maxWidth?: number;
}
export interface GhostTextInterfaceForWeb extends Partial<TextInterfaceForWeb> {
    fontType: FontTypeEnum;
    fontTypeWeight: FontTypeWeightEnum;
    ghost: boolean;
    disabled: boolean;
    textColorFromTheme: ColorNameOrValueFromTheme;
    backgroundColorFromTheme: ColorNameOrValueFromTheme;
    theme: WebTheme;
}
