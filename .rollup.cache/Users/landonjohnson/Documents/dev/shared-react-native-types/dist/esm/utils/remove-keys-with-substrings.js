export default function removeKeysWithSubstrings(obj, substrings) {
    return Object.keys(obj)
        .filter(key => !substrings.some(substring => key.includes(substring)))
        .reduce((result, key) => {
        result[key] = obj[key];
        return result;
    }, {});
}
//# sourceMappingURL=remove-keys-with-substrings.js.map