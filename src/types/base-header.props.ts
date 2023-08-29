import { TextStyle, ViewProps } from "react-native"
import { colorsInterface } from "./theme.types"

export interface BaseHeaderPropsInterface {
    backgroundColorFromTheme: keyof colorsInterface;
    subTitle?: string;
    nestedScreen?: boolean;
    subHeader?: () => JSX.Element;
    onGoBack: () => void;
    title: string;
    titleOnPress?: () => void;
    titleFlex?: number;
    presentationModal?: boolean;
    titleStyle?: TextStyle;
    containerStyle?: ViewProps;
    contentStyle?: ViewProps;
    headerRightButton?: () => JSX.Element;
    headerLeftButton?: () => JSX.Element;
}
