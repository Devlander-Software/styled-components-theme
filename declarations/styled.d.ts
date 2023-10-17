import "styled-components";
import "styled-components/native";
import { ThemeInterface, ThemeInterfaceForHTML } from "../src/types/theme.types";
export declare module "styled-components/native" {
    export interface DefaultTheme extends ThemeInterface {}
}
  

 export declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterfaceForHTML {}
}
