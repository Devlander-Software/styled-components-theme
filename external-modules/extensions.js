const {createExtensions} = require("@devlander/collect-exports-for-bundle")

const commonExtensionsWords = ["props", "type", "interface", "types", "types.native", "enum", "styles", "provider", "defaults", "interfaces"];

const webExtensions = [...createExtensions("web", commonExtensionsWords, [".tsx", ".ts"])];
const nativeExtensions = [...createExtensions("native", commonExtensionsWords, [".tsx", ".ts"])];



module.exports = {
  commonExtensionsWords,
  webExtensions,
  nativeExtensions
}