import { Platform } from 'react-native';
import { FontTypeEnum } from '../../types/font-type.enum';
export const handleFontFromTheme = (fontType, fontTypeWeight = 'bold', theme) => {
    const tempFontType = fontType ? fontType : FontTypeEnum.Font2;
    if (fontType &&
        fontTypeWeight &&
        Platform.OS === 'web' &&
        theme.fonts[tempFontType] &&
        theme.fonts[tempFontType].name) {
        return theme.fonts[fontType].name;
    }
    else if (fontType && fontTypeWeight && Platform.OS !== 'web') {
        return theme.fonts[fontType][fontTypeWeight];
    }
    else if (Platform.OS === 'web') {
        return theme.fonts.Font2.name;
    }
    else {
        return theme.fonts.Font2.bold;
    }
};
//# sourceMappingURL=handle-font-for-theme.jsx.map