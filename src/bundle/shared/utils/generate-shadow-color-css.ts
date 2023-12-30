export const generateShadowColorStyle = (shadowColor: string | symbol | undefined) => {
    if (typeof shadowColor === 'string') {
      return `shadow-color: ${shadowColor};`;
    } else if (typeof shadowColor === 'symbol') {
      return `shadow-color: ${String(shadowColor)};`;
    } else {
      return '';
    }
  }
  