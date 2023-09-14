const hasLetter = (letter, array, keyToCheck = 'name', index = 0, filterText) => array.find((item) => {
    if (item[keyToCheck] && !filterText) {
        item[keyToCheck].toLowerCase().charAt(index) === letter;
    }
    else if (filterText) {
        item[keyToCheck].toLowerCase().charAt(index) === letter && item[keyToCheck].toLowerCase().includes(filterText.toLowerCase());
    }
});
export default hasLetter;
//# sourceMappingURL=has-letter.js.map