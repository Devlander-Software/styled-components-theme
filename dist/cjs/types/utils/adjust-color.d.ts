export interface AdjustColorParams {
    (colorValue: string, alphaValue: number, mode: "light" | "dark", isSolid?: boolean): string;
}
export declare const adjustColor: AdjustColorParams;
export default adjustColor;
