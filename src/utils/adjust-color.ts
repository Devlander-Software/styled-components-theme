import Color from 'color';

/**
 * Adjusts a color's alpha and brightness.
 * @param colorValue - A string representing a color (e.g. hex, rgb, rgba).
 * @param alphaValue - A number between 0 to 100 representing the alpha value.
 * @param mode - A string, either 'light' or 'dark', to adjust the brightness.
 * @returns The adjusted color as an rgba string.
 */
function adjustColor(colorValue: string, alphaValue: number, mode: 'light' | 'dark'): string {
    // Validate the alpha value
    if (alphaValue < 0 || alphaValue > 100) {
        throw new Error('Alpha value should be between 0 and 100');
    }

    let adjustedColor = Color(colorValue);

    // Adjust the brightness based on the mode
    if (mode === 'light') {
        adjustedColor = adjustedColor.lighten(0.2); // Adjust this value as needed
    } else if (mode === 'dark') {
        adjustedColor = adjustedColor.darken(0.2); // Adjust this value as needed
    }

    // Convert alpha from 0-100 scale to 0-1 scale
    const alphaScale = alphaValue / 100;

    // Set the alpha value
    adjustedColor = adjustedColor.alpha(alphaScale);

    return adjustedColor.toString();
}


export default adjustColor;