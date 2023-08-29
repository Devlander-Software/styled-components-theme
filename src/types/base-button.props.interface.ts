import { ViewStyle } from "react-native";
import { FontTypeEnum } from "./font-type.enum"
import { textDecorationLineTypes, textTransformTypes } from "./text.types"
import { FontWeightEnum, colorsInterface } from './theme.types';

export interface BaseButtonPropsInterface extends ViewStyle {
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
