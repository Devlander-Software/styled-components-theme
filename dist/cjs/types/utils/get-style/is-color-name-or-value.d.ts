import { ColorNameOrValueFromTheme } from '../../types/color.types';
import { ThemeInterface } from '../../types/theme.types';
export declare enum NameOrValue {
    Name = "name",
    Value = "value"
}
export declare const isColorNameOrValue: (nameOrValue: ColorNameOrValueFromTheme, theme: ThemeInterface) => NameOrValue | false;
