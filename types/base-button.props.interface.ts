import { FontTypeEnum } from "./font-type.enum"
import { textDecorationLineTypes, textTransformTypes } from "./text.types"
import { FontWeightEnum, colorsInterface } from './theme.types';

export interface BaseButtonPropsInterface {
    text?: string;
    borderRadius?: number | string;
    onPress: () => void;
    backgroundColorFromTheme?: keyof colorsInterface;
    textColorFromTheme?: keyof colorsInterface;
    fontFromTheme?: FontTypeEnum;
    fontTypeWeight?: FontWeightEnum;
    disabled?: boolean;
    ghost?: boolean;
    submitting?: boolean;
    fontSize?: number | string;
    width?: number | string;
    height?: number | string;
    marginBottom?: number | string;
    marginTop?: number | string;
    marginLeft: number | string;
    marginRight: number | string;
    paddingTop?: number | string;
    decorationLine?: textDecorationLineTypes;
    textTransform?: textTransformTypes;
    isSelected?: boolean;
    textAlign?: "left" | "center" | "right";
    paddingRight?: number | string;
    paddingLeft?: number | string;
    renderLeft?: () => React.ReactElement;
    renderRight?: () => React.ReactElement;

}



export interface GhostBaseButton extends BaseButtonPropsInterface {

    borderWidth?: number | string;
    ghost: boolean;
    disabled: boolean;

    textColorFromTheme?: keyof colorsInterface
    backgroundColorFromTheme?: keyof  colorsInterface

}
