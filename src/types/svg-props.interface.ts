import { ColorFromTheme } from "./color.types";

export interface SVGPropsInterface {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  backgroundColorFromTheme?: ColorFromTheme
}

export const defaultSVGProps = {
	width: "100%",
	height: "100%",
	viewBox: "0 0 100 100",
}
