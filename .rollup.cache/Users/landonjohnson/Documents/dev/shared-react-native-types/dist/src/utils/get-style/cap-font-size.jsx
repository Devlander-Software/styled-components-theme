export const capFontSize = (fontSize, maxFontSize) => {
    if (maxFontSize && typeof fontSize === 'number') {
        if (maxFontSize < fontSize) {
            return maxFontSize;
        }
        else {
            return fontSize;
        }
    }
    else {
        return maxFontSize;
    }
};
//# sourceMappingURL=cap-font-size.jsx.map