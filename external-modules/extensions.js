const createExtensions = (
    word,
    wordList = [],
    fileExtensions = [".tsx", ".ts"]
  ) => {
    let combinedExtensions = new Set(); // Using a Set to avoid duplicates
   
    // Helper function to check if the string has a leading dot and add one if not
    const ensureLeadingDot = (str) => (str.startsWith('.') ? str : `.${str}`);
  
    // Helper function to create extension with correct dots in place
    const createExtension = (mainWord, additionalWord, fileExt) => {
      // Ensure both parts have leading dots if they are not empty
      mainWord = mainWord ? ensureLeadingDot(mainWord) : '';
      additionalWord = additionalWord ? ensureLeadingDot(additionalWord) : '';
      // Ensure the file extension has a leading dot
      fileExt = ensureLeadingDot(fileExt);
      // Combine the parts
      return `${mainWord}${additionalWord}${fileExt}`;
    };



  fileExtensions.forEach((fileExtension) => {
    // Add the file extensions to the Set
    combinedExtensions.add(createExtension(word, "", fileExtension));
  });

  // For each word in the word list, create combinations with the word and each of the file extensions
  wordList.forEach((additionalWord) => {

    fileExtensions.forEach((fileExtension) => {
      // Add combinations to the Set to avoid duplicates
      combinedExtensions.add(createExtension(word, additionalWord, fileExtension));
      if (additionalWord) {
        // Also add the inverted combination if the additional word is not empty
        combinedExtensions.add(createExtension(additionalWord, word, fileExtension));
      }
    });
  });

  // remove duplicates and trim whitespace
    combinedExtensions = new Set(
        Array.from(combinedExtensions).map((ext) => ext.trim()),
    );
  // Convert the Set to an Array before returning
  return combinedExtensions
};


  const webExtensions = createExtensions("web", [ "props",  "type", "types", "interface", "enum"], [".tsx", ".ts"]);
  
  const nativeExtensions = createExtensions("native", [ "props", "type", "types", "interface", "enum"], [".tsx", ".ts"]);
  
  
    const sharedAllowedExtensions = [...createExtensions("", ["props", "type", "types", "interface", "enum", "styles", "provider", "defaults"], [".tsx", ".ts"])]
  
    const sharedIgnoredExtensions =  createExtensions("", ["d", "test", "stories"], [".tsx", ".ts"]);
  console.log(sharedAllowedExtensions, "sharedAllowedExtensions");
module.exports = {
    webExtensions,
    nativeExtensions,
    sharedAllowedExtensions,
    sharedIgnoredExtensions
}  