import { ThemeInterface, ColorsInterface } from "./theme.types";
export interface TouchableOpacityStylePropsInterface {
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    height?: number | string;
    justifyContent?: "center" | "flex-start" | "flex-end";
    alignItems?: "center" | "flex-start" | "flex-end";
    borderRadius?: number;
    flex?: number;
    width?: number | string;
    maxWidth?: number | string;
    alignSelf?: "center" | "flex-start" | "flex-end";
    flexShrink?: number;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    padding?: number | string;
    borderBottomWidth?: number | string;
    paddingBottom?: number | string;
    backgroundColorFromTheme?: keyof ColorsInterface;
}
export interface TouchableOpacityStylePropsInterfaceWithTheme extends TouchableOpacityStylePropsInterface {
    theme: ThemeInterface;
}
