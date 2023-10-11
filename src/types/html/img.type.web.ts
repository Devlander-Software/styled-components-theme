import { ThemeInterfaceForHTML } from "../theme.types";

export interface HtmlImageInterface
  extends Partial<React.HTMLProps<HTMLImageElement>> {
  theme?: ThemeInterfaceForHTML;
}
