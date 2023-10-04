import { TextFontWeightTypesEnum } from "../font-weight.types";
import { textDecorationLineTypes } from "../text.types";
import { ThemeInterface } from "../theme.types";


export interface HtmlImageInterface extends Partial<React.HTMLProps<HTMLImageElement>> {
  
   
    theme?: ThemeInterface;
  }