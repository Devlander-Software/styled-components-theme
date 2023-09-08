import {ColorsInterface} from "./theme.types"
export interface SVGPropsInterface {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  backgroundColorFromTheme?: keyof ColorsInterface;
}

export const defaultSVGProps = {
	width: "100%",
	height: "100%",
	viewBox: "0 0 100 100",
}
