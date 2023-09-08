/// <reference types="react" />
import { TextStyle, ViewProps } from "react-native";
import { colorsInterface } from "./theme.types";
export interface BaseHeaderPropsInterface {
    backgroundColorFromTheme?: keyof colorsInterface;
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
//# sourceMappingURL=base-header.props.d.ts.map