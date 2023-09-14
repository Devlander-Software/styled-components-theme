import { RFValue } from 'react-native-responsive-fontsize';
export const handleFontSizeProps = (fontSize = 13, standardScreenHeight) => {
    const parsedFontSize = typeof fontSize === 'string' ? parseInt(fontSize, 10) : fontSize;
    const adjustedFontSize = standardScreenHeight
        ? RFValue(parsedFontSize, standardScreenHeight)
        : RFValue(parsedFontSize);
    return `${adjustedFontSize}px`;
};
//# sourceMappingURL=handle-font-size-props.jsx.map