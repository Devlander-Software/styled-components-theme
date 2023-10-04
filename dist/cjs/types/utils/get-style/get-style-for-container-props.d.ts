import { ContainerStyleInterfaceWithTheme } from "../../types/container-style.props.interface";
import { HtmlParagraphStylePropsWithTheme } from "../../types/html/paragraph-style.props.web";
export interface GetStyleForContainerPropsParameters {
    (props: ContainerStyleInterfaceWithTheme | HtmlParagraphStylePropsWithTheme): string;
}
export declare const getStyleForContainerProps: GetStyleForContainerPropsParameters;
export default getStyleForContainerProps;
