const {autoExporter} = require('@devlander/collect-exports-for-bundle');

const main = () => {

    autoExporter({
        rootDir: 'src',
        outputFilenameExtension: '.ts',
        allowedExtensions: ['.ts'],
        ignoredExtensions: ['.test.ts', '.test.tsx', '.d.ts', ".styles.tsx", ".stories.tsx"],
    })
}

main();