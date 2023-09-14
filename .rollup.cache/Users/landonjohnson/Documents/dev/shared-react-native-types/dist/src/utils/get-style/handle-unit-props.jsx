export const handleUnitProps = (units) => {
    if (units && units === 'auto') {
        return units;
    }
    if (!units || units === undefined || units === 0) {
        units = '0px';
    }
    const hasPercentage = units && units.toString().includes('%')
        ? units.toString().includes('%')
        : false;
    if (units && typeof units === 'number') {
        if (hasPercentage) {
            units = units.toString();
        }
        else {
            units = `${units}px`;
        }
    }
    return units.toString();
};
//# sourceMappingURL=handle-unit-props.jsx.map