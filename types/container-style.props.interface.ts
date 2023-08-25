import { ThemeInterface } from "./theme.types"
import { CustomStylePropsInterface } from './custom-style-props.interface';
export interface ContainerStyleProps {
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    height?: number | string;
    opacity?: number;
    flex?: number;
    
    width?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    padding?: number | string;
    borderBottomWidth?: number | string;

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