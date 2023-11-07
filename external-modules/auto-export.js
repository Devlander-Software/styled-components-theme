/* eslint-disable no-undef */
const autoExporter = require("@devlander/collect-exports-for-bundle").default
const { createExtensions } = require("@devlander/collect-exports-for-bundle");
const {webExtensions, nativeExtensions, sharedAllowedExtensions, sharedIgnoredExtensions} = require("./extensions")

const main = () => {
  const options = require('../tsconfig.json');
const package = require('../package.json');
const tsConfig = require('../tsconfig.json');
const pkg = require('../package.json');

// Directly access the compilerOptions from tsConfig
const compilerOptions = tsConfig.compilerOptions || {
    rootDir: 'src'
};

const packageJsonConfig = pkg.config || {
    nativeInput: 'index.native',
    webInput: 'index.web'
};



console.log(webExtensions, "webExtensions");


  // // This is for exporting the native index file
  // autoExporter({
  //   rootDir: "bundle",
  //   outputFilenameExtension: ".tsx",
  //   outputFileName: "main.native",
  //   excludedFolders: ["web", "shared"],

  //   bundleAsObjectForDefaultExport: "NativeUtilitiesForStyles",
  //   allowedExtensions: [
  //     ...nativeExtensions,
  //    ...sharedAllowedExtensions,
  //   ],
    
  // });


  // // This is for exporting the web index file
  // autoExporter({
  //   rootDir: "bundle",
  //   outputFilenameExtension: ".tsx",
  //   bundleAsObjectForDefaultExport: "WebUtilitiesForStyles",
  //   excludedFolders: ["native", "shared"],
  //   outputFileName: "main.web",
  //   allowedExtensions: [
  //     ...sharedAllowedExtensions,
  //     ...webExtensions,
  //   ],
    
  // });



  autoExporter({
    rootDir: "bundle",
    outputFilenameExtension: ".tsx",
    outputFileName: "index",
    allowedExtensions: [...createExtensions("web", ["props", "type", "types", "interface", "enum", "styles", "provider", "defaults", "interfaces", "types.web"], [".tsx", ".ts"]),
    ...createExtensions("native", ["props", "type", "types", "interface", "enum", "styles", "provider", "defaults", "types.native"], [".tsx", ".ts"])
  ]
  });
 
};

main();


