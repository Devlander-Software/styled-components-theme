import hexToRgba from 'hex-to-rgba';
import { isValidHex } from './is-valid-hex';
export const handleColorFromTheme = (color, opacity = 1, theme) => {
    if (color &&
        theme.colors[color] &&
        color &&
        isValidHex(theme.colors[color])) {
        return hexToRgba(theme.colors[color], opacity);
    }
    else if (theme.colors[color]) {
        return theme.colors[color];
    }
    else {
        return theme.colors.primaryTextColor;
    }
};
//# sourceMappingURL=handle-color-from-theme.jsx.map