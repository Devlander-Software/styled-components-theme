import type { TextStyle, ViewProps } from 'react-native';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
import { ThemeColorAttributes } from '../../shared/types/style-attributes.interfaces';
export interface BaseHeaderPropsInterface extends Partial<ThemeColorAttributes> {
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
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
