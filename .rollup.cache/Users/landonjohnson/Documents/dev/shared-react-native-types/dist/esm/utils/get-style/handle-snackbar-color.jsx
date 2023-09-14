export const handleSnackbarColor = (type, theme) => {
    if (!type || !theme) {
        return '#fff';
    }
    else {
        switch (type) {
            case 'success':
                return theme.colors.successColor;
            case 'error':
                return theme.colors.errorColor;
            case 'none':
                return theme.colors.primaryTextColor;
            default:
                return theme.colors.primaryTextColor;
        }
    }
};
//# sourceMappingURL=handle-snackbar-color.jsx.map