import { ViewStyle } from "react-native";

import { ColorFromTheme } from "./color.types";
import { CustomStylePropsInterface } from "./custom-style-props.interface";

export interface BaseButtonPropsInterface
  extends ViewStyle,
    CustomStylePropsInterface {
  onPress?: () => void;

  text?: string;
  renderLeft?: () => React.ReactElement;
  renderRight?: () => React.ReactElement;
  isSelected?: boolean;
}

export interface GhostBaseButton extends BaseButtonPropsInterface {
  textColorFromTheme: ColorFromTheme;
  backgroundColorFromTheme: ColorFromTheme;
}
