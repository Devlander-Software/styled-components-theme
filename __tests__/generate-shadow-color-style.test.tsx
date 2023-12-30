import { generateShadowColorStyle } from '../src/bundle/shared/utils/generate-shadow-color-css';

describe('generateShadowColorStyle', () => {
  it('should return an empty string for undefined input', () => {
    const result = generateShadowColorStyle(undefined);
    expect(result).toBe('');
  });

  it('should return the CSS string for a valid string input', () => {
    const shadowColor = 'red'; // Replace with your desired color
    const result = generateShadowColorStyle(shadowColor);
    expect(result).toBe(`shadow-color: ${shadowColor};`);
  });

  it('should return the CSS string for a symbol input', () => {
    const shadowColor = Symbol('custom-color'); // Replace with your desired symbol
    const result = generateShadowColorStyle(shadowColor);
    expect(result).toBe(`shadow-color: ${String(shadowColor)};`);
  });

  it('should return an empty string for an invalid input type', () => {
    const shadowColor = 123; // Invalid type (number)
    const result = generateShadowColorStyle(shadowColor as any); // Using 'as any' to force an invalid type
    expect(result).toBe('');
  });
});
