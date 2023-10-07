import { TextStylePropsWithTheme } from "../../types/text-style.props";
export interface GetStyleForTextPropsParameters {
    (props: TextStylePropsWithTheme): string;
}
export declare const getStyleForTextProps: GetStyleForTextPropsParameters;
export default getStyleForTextProps;
