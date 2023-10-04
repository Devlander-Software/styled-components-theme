import { HtmlParagraphStylePropsWithTheme } from "../../types/html/paragraph-style.props.web";
import { TextStylePropsWithTheme } from "../../types/text-style.props";
export interface GetStyleForTextPropsParameters {
    (props: TextStylePropsWithTheme | HtmlParagraphStylePropsWithTheme): string;
}
export declare const getStyleForTextProps: GetStyleForTextPropsParameters;
export default getStyleForTextProps;
