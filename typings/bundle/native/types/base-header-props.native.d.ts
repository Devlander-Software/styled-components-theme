import React from 'react';
import { ColorNameOrValueFromTheme } from '../../shared/types/color.types';
import { ThemeColorAttributes } from '../../shared/types/style-attributes.interfaces';
import type { TextStyle, ViewProps } from 'react-native';
export interface BaseHeaderPropsInterface extends Partial<ThemeColorAttributes> {
    backgroundColorFromTheme?: ColorNameOrValueFromTheme;
    subTitle?: string;
    nestedScreen?: boolean;
    subHeader?: () => React.JSX.Element;
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
    headerRightButton?: () => React.JSX.Element;
    headerLeftButton?: () => React.JSX.Element;
}
