import { capFontSize } from "../src/bundle/shared/utils/cap-font-size";

describe("capFontSize", () => {
  test("caps the font size when it exceeds the maximum", () => {
    expect(capFontSize(20, 15)).toBe(15);
    expect(capFontSize("25", 18)).toBe(18);
  });

  test("returns the font size when it is less than or equal to the maximum", () => {
    expect(capFontSize(10, 15)).toBe(10);
    expect(capFontSize("12", 18)).toBe(12);
  });

  test("throws an error for non-numeric strings", () => {
    expect(() => capFontSize("abc", 15)).toThrow(
      "Invalid fontSize provided, it must be a number or a numeric string"
    );
  });

  test("handles edge cases with zero and negative values", () => {
    expect(capFontSize(0, 15)).toBe(0);
    expect(capFontSize("-5", 10)).toBe(-5);
    expect(capFontSize(10, -5)).toBe(-5);
  });

  test("handles numeric string with leading/trailing whitespace", () => {
    expect(capFontSize("  20  ", 25)).toBe(20);
  });
});
