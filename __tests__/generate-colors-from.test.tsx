import generateColorsFrom from '../dist/esm/types/setup/generate-colors-from';
import { lightColors } from '../src/defaults/light-colors.defaults';
// generateColorsFrom.test.ts


describe('generateColorsFrom', () => {
  
  it('should swap white and black colors when adjusting to dark', () => {
    const adjustedColors = generateColorsFrom(lightColors, 'dark');

    expect(adjustedColors.white).toBe(lightColors.black);
    expect(adjustedColors.black).toBe(lightColors.white);
    expect(adjustedColors.whiteAlpha10).toBe(lightColors.blackAlpha10);
    expect(adjustedColors.blackAlpha10).toBe(lightColors.whiteAlpha10);
    // ... You can add more assertions for other colors in the series
  });

  it('should adjust non-alpha and non-black/white colors towards dark', () => {
    const adjustedColors = generateColorsFrom(lightColors, 'dark');

    // For simplicity, we are checking just a couple of properties. 
    // Ideally, you'd want more comprehensive tests.
    expect(adjustedColors.primary).not.toBe(lightColors.primary);
    expect(adjustedColors.secondary).not.toBe(lightColors.secondary);
    // ... Similarly, check other colors to ensure they have been adjusted.
  });

  // Similarly, you can add tests for adjusting towards 'light' and other scenarios.
});

