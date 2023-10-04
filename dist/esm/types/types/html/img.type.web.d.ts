/// <reference types="react" />
import { ThemeInterface } from "../theme.types";
export interface HtmlImageInterface extends Partial<React.HTMLProps<HTMLImageElement>> {
    theme?: ThemeInterface;
}
