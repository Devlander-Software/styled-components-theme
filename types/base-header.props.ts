import { colorsInterface } from "./theme.types";

export interface BaseHeaderPropsInterface {
    backgroundColorFromTheme: keyof colorsInterface;
    subTitle?: string;
    applyGoBackToTitle?: boolean;
    nestedScreen?: boolean;
    navigation: any;
    subHeader?: () => JSX.Element;
    titleOnPress?: () => void;
    titleFlex?: number;
    presentationModal?: boolean;
    titleStyles?: any;
    headerStyles?: any;
    headerRightButton?: () => JSX.Element;
    headerLeftButton?: () => JSX.Element;
}
