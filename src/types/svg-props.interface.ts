import { ColorNameOrValueEnum } from "../utils/get-style/shared/is-color-name-or-value";


export interface SVGPropsInterface {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  backgroundColorFromTheme?: ColorNameOrValueEnum;
}

export const defaultSVGProps = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 100 100",
};
