import { HtmlImgStylePropsWithTheme } from "../../../types/html/img.web.props";
export interface GetStyleForImgPropsInterface {
    (props: HtmlImgStylePropsWithTheme): string;
}
export declare const getStyleForImgPropsForWeb: GetStyleForImgPropsInterface;
