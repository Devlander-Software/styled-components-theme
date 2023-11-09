import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";
import { ColorNameOrValueEnum, isColorNameOrValue } from "../src/bundle/shared/utils/is-color-name-or-value";


// Mock the 'Platform' module
jest.mock('react-native', () => ({
  Platform: {
    OS: 'web', // Mock the platform as 'web' for testing purposes
  },
}));

describe('isColorNameOrValue Native', () => {
  // Mock theme object
  const mockTheme = createThemeForNative({});

  

  it('should return ColorName when the name matches a key in the theme colors', () => {
    const result = isColorNameOrValue('primary', mockTheme);
    expect(result).toBe(ColorNameOrValueEnum.ColorName);
  });

  it('should return ColorValue when the value matches a value in the theme colors', () => {
    const result = isColorNameOrValue('#fff', mockTheme);
    expect(result).toBe(ColorNameOrValueEnum.ColorValue);
  });

  it('should return false if it does not match the color value', () => {
    const result = isColorNameOrValue('#fff000', mockTheme);
    expect(result).toBe(false);
  });

});
