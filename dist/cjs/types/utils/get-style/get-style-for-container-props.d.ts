import { ContainerStyleInterfaceWithTheme } from "../../types/container-style.props.interface";
export interface GetStyleForContainerPropsParameters {
    (props: ContainerStyleInterfaceWithTheme): string;
}
export declare const getStyleForContainerProps: GetStyleForContainerPropsParameters;
export default getStyleForContainerProps;
