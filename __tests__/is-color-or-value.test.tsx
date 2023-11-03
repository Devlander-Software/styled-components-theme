import { createThemeForNative } from "../src/bundle/main.native";
import { ColorNameOrValueEnum } from "../src/bundle/main.shared";
import { isColorNameOrValue } from "../src/bundle/shared/utils/is-color-name-or-value";


describe('isColorNameOrValue Native', () => {
  // Mock theme object
  const mockTheme = createThemeForNative();

  

  it('should return ColorName when the name matches a key in the theme colors', () => {
    const result = isColorNameOrValue('primary', mockTheme);
    expect(result).toBe(ColorNameOrValueEnum.ColorName);
  });

  it('should return ColorValue when the value matches a value in the theme colors', () => {
    const result = isColorNameOrValue('#ff0000', mockTheme);
    expect(result).toBe(ColorNameOrValueEnum.ColorValue);
  });

  it('should return false when the name or value does not match any key or value in the theme colors', () => {
    const result = isColorNameOrValue('nonexistentColor', mockTheme);
    expect(result).toBe(false);
  });
});
