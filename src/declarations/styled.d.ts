import { ThemeInterface } from "../types/theme.types";
import "styled-components/native"
import "styled-components"
declare module "styled-components/native" {
    export interface DefaultTheme extends ThemeInterface {}
  }
  