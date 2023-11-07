const autoExporter = require("@devlander/collect-exports-for-bundle").default
const {webExtensions, nativeExtensions} = require("./extensions")

const main = () => {
  autoExporter({
    rootDir: "bundle",
    outputFilenameExtension: ".tsx",
    outputFileName: "index",
    allowedExtensions: [...nativeExtensions, ...webExtensions],
    ignoredExtensions:       ["script", "stories", "test", "d"],

  });
};

main();


