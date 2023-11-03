export interface FontSizeCap {
    (fontSize: string | number, maxFontSize: number): number;
}
export declare const capFontSize: FontSizeCap;
