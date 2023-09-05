import { ThemeInterface } from "./theme.types"
import { CustomStylePropsInterface, CustomViewStylePropsInterface } from './custom-style-props.interface';
import { ViewStyle } from "react-native";
export interface ContainerStyleProps extends ViewStyle, CustomViewStylePropsInterface {
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    opacity?: number;
    flex?: number;
    
    width?: number;
    paddingTop?: number;
    marginLeft?: number;
    marginRight?: number;
    paddingBottom?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;

    minHeight?: number;
  
    margin?: number;
    borderWidth?: number;
}

export enum JustifyContentEnum {
    center = "center",
    flexStart = "flex-start",
    flexEnd = "flex-end",
    spaceBetween = "space-between",
    spaceAround = "space-around",
    spaceEvenly = "space-evenly"
}

export enum AlignItemsEnum {
    center = "center",
    flexStart = "flex-start",
    flexEnd = "flex-end",
    stretch = "stretch",
    baseline = "baseline"
}



export interface ContainerStyleInterfaceWithTheme extends ContainerStyleProps, CustomStylePropsInterface {
    theme: ThemeInterface;
}