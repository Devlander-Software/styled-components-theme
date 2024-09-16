import { colorThemeHandlerNative } from "../src/bundle/native/utils/theme-functions/handle-color-from-theme.native";
import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";

describe('colorThemeHandlerNative', () => {
    const mockTheme = createThemeForNative({});



  it('returns the correct rgba value for a valid color name', () => {
    const result = colorThemeHandlerNative('colorOne', 0.5, mockTheme);
    expect(result).toBe('rgba(229, 115, 115, 0.5)');
  });

  it('returns the correct hex code', () => {
    const result = colorThemeHandlerNative('#000000', 0.5, mockTheme);
    expect(result).toBe('#212121');
  });

  it('returns the original color if the hex value is invalid', () => {
    const result = colorThemeHandlerNative('shadow', 0.5, mockTheme);
    expect(result).toBe(mockTheme.colors.shadow);
  });

  it('returns the primary text color for an invalid color name', () => {
    const result = colorThemeHandlerNative('nonexistentColorName', 1, mockTheme);
    expect(result).toBe(mockTheme.colors.primaryTextColor);
  });



});
