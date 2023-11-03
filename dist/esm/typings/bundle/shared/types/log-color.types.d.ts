/**
 * Represents color options.
 *
 * @typedef TColor
 * @type {'green' | 'red' | 'blue' | 'yellow'}
 */
export declare enum TColor {
    green = "green",
    red = "red",
    blue = "blue",
    yellow = "yellow"
}
export type TColorValue = keyof typeof TColor;
