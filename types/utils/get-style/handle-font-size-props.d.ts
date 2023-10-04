export declare enum ResponsiveByPercentOrValue {
    Percent = "percent",
    Value = "value"
}
export interface HandleFontSizePropsInterface {
    (fontSize?: string | number, maxFontSize?: string | number, standardScreenHeight?: string | number, responsiveBy?: ResponsiveByPercentOrValue): string;
}
export declare const getResponsiveFontSize: (fontSize: number, maxFontSize: number, screenHeight: number | undefined, responsiveBy: ResponsiveByPercentOrValue) => number;
export declare const handleFontSizeProps: HandleFontSizePropsInterface;
export default handleFontSizeProps;
