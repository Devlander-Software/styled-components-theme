import { colorThemeHandlerNative } from "../src/bundle/native/utils/theme-functions/handle-color-from-theme.native";
import isValidHex from "../src/bundle/shared/utils/is-valid-hex";
import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";

describe('colorThemeHandlerNative', () => {
    const mockTheme = createThemeForNative({});

  // Mock the hexToRgba function - assuming it is defined in another module that you can mock
  jest.mock('hex-to-rgba', () => ({
    hexToRgba: jest.fn((color, alpha) => `rgba(${color}, ${alpha})`), // Simplified mock implementation
  }));

  it('returns the correct rgba value for a valid color name', () => {
    const result = colorThemeHandlerNative('colorOne', 0.5, mockTheme);
    expect(result).toBe('rgba(229, 115, 115, 0.5)');
  });

  it('returns the correct rgba value for a valid hex value', () => {
    const result = colorThemeHandlerNative('#000000', 0.5, mockTheme);
    expect(result).toBe('rgba(0, 0, 0, 0.5)');
  });

  it('returns the original color if the hex value is invalid', () => {
    const result = colorThemeHandlerNative('shadow', 0.5, mockTheme);
    expect(result).toBe(mockTheme.colors.shadow);
  });

  it('returns the primary text color for an invalid color name', () => {
    const result = colorThemeHandlerNative('nonexistentColorName', 1, mockTheme);
    expect(result).toBe(mockTheme.colors.primaryTextColor);
  });



  it('validates that hex values are correct using isValidHex', () => {
    expect(isValidHex('#E57373')).toBe(true);
    expect(isValidHex('#000000')).toBe(true);
    expect(isValidHex('rgba(0, 0, 0, 0.15)')).toBe(false);
    expect(isValidHex('123456')).toBe(false);
    expect(isValidHex('')).toBe(false);
  });
});
