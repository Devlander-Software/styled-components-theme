const fs = require('fs');
const path = require('path');

// Function to merge two objects and give preference to the src dependencies
function mergeDeps(rootDeps, srcDeps) {
  // srcDeps will overwrite rootDeps if there is a conflict
  return { ...rootDeps, ...srcDeps };
}

// Paths to the package.json files
const rootPackagePath = path.join(__dirname, 'package.json');
const srcPackagePath = path.join(__dirname, 'src', 'package.json');

// Read both package.json files
const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath));
const srcPackage = JSON.parse(fs.readFileSync(srcPackagePath));

// Merge dependencies, with src taking precedence
rootPackage.dependencies = mergeDeps(rootPackage.dependencies, srcPackage.dependencies);
rootPackage.devDependencies = mergeDeps(rootPackage.devDependencies, srcPackage.devDependencies);
rootPackage.peerDependencies = mergeDeps(rootPackage.peerDependencies, srcPackage.peerDependencies);

// Write the updated root package.json back to file
fs.writeFileSync(rootPackagePath, JSON.stringify(rootPackage, null, 2));

console.log('Merged dependencies from src/package.json into root package.json, favoring src versions.');
