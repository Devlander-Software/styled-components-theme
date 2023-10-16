export interface CapFontSizeInterface {
  (fontSize: string | number, maxFontSize: number): string | number;
}

export const capFontSize: CapFontSizeInterface = (
  fontSize: number | string,
  maxFontSize: number,
): number | number => {
  if (maxFontSize && typeof fontSize === "number") {
    if (maxFontSize < fontSize) {
      return maxFontSize;
    } else {
      return fontSize;
    }
  } else {
    return maxFontSize;
  }
};

export default capFontSize;
