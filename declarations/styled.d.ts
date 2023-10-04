import { ThemeInterface, ThemeInterfaceForHTML } from "../src/types/theme.types";
import "styled-components/native"
import "styled-components"
declare module "styled-components/native" {
    export interface DefaultTheme extends ThemeInterface {}
}
  

 declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterfaceForHTML {}
}
