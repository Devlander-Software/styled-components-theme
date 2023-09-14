function dashToCamelCase(dashName: string): string {
    return dashName.toLowerCase().replace(/-([a-z])/g, function (match, group1) {
        return group1.toUpperCase();
    });
}

export default dashToCamelCase;