import "styled-components";
import "styled-components/native";
import { ThemeInterface, ThemeInterfaceForHTML } from "../src/types/theme.types";
 declare module "styled-components/native" {
    export interface DefaultTheme extends ThemeInterface {}
}
  

  declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterfaceForHTML {}
}
