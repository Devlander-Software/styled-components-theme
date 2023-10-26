
const { syncPackageVersions } = require("@devlander/sync-dep-versions"); // Use __dirname



/**
 * Main function to synchronize dependencies and execute scripts.
 */
function main() {

        syncPackageVersions('@devlander/react', './package.json')
    
}

main();
