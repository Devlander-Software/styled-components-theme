export interface AdjustColorParams {
    (colorValue: string, alphaValue: number, mode: "light" | "dark", isSolid?: boolean): string;
}
export declare const cssColorNames: string[];
export declare const isConsoleAvailable: () => false | {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
export declare const log: (message: string) => void;
export declare const adjustColor: AdjustColorParams;
export default adjustColor;
