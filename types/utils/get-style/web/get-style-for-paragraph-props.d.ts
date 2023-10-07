import { HtmlParagraphStylePropsWithTheme } from "../../../types/html/paragraph-style.props.web";
export interface GetStyleForParagraphProps {
    (props: HtmlParagraphStylePropsWithTheme): string;
}
export declare const getStyleForParagraphProps: GetStyleForParagraphProps;
export default getStyleForParagraphProps;
