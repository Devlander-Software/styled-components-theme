import { ViewStyle } from "react-native";
import { FontTypeEnum } from "./font-type.enum"
import { textDecorationLineTypes, textTransformTypes } from "./text.types"
import { FontWeightEnum, colorsInterface } from './theme.types';
import { CustomStylePropsInterface } from "./custom-style-props.interface";

export interface BaseButtonPropsInterface extends ViewStyle, CustomStylePropsInterface {
    onPress?: () => void;


    text?: string;
    renderLeft?: () => React.ReactElement;
    renderRight?: () => React.ReactElement;
    isSelected?: boolean;


}



export interface GhostBaseButton extends BaseButtonPropsInterface {

   

    textColorFromTheme?: keyof colorsInterface
    backgroundColorFromTheme?: keyof  colorsInterface

}
