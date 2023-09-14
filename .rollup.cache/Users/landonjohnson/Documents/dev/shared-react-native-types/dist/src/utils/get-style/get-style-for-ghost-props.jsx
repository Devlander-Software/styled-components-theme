export const getStyleForGhostProps = (ghost, disabled, theme, colorOne, colorTwo) => disabled === true && ghost === true
    ? theme.handleColorFromTheme('blackAlpha40', 0.5, theme)
    : disabled === false && ghost === false
        ? theme.handleColorFromTheme(colorOne, 1, theme)
        : ghost === true
            ? theme.handleColorFromTheme(colorTwo, 1, theme)
            : disabled
                ? theme.handleColorFromTheme('blackAlpha40', 0.5, theme)
                : theme.handleColorFromTheme(colorOne, 1, theme);
//# sourceMappingURL=get-style-for-ghost-props.jsx.map