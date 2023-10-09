import { TextStyle, ViewProps } from "react-native";
import { ColorFromTheme } from "./color.types";
export interface BaseHeaderPropsInterface {
    backgroundColorFromTheme?: ColorFromTheme;
    subTitle?: string;
    nestedScreen?: boolean;
    subHeader?: () => JSX.Element;
    onGoBack: () => void;
    title: string;
    applyGoBackToTitle?: boolean;
    titleOnPress?: () => void;
    titleFlex?: number;
    onOpenDrawer?: () => void;
    presentationModal?: boolean;
    titleStyle?: TextStyle;
    containerStyle?: ViewProps;
    contentStyle?: ViewProps;
    headerRightButton?: () => JSX.Element;
    headerLeftButton?: () => JSX.Element;
}
