import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import generatePackageJSON from "rollup-plugin-generate-package-json";
import generateGitVersion from "rollup-plugin-generate-git-version";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import terser from "@rollup/plugin-terser";
import swcPreserveDirectives from "rollup-swc-preserve-directives";
import auto from '@rollup/plugin-auto-install';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from "fs";
import json from "@rollup/plugin-json";
import del from 'rollup-plugin-delete';

function removeKeysWithSubstrings(obj, substrings) {
  return Object.keys(obj)
    .filter(key => !substrings.some(substring => key.includes(substring)))
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
}

const pkg = JSON.parse(readFileSync('package.json', { encoding: 'utf8' }));

const filteredPackageDependencies = removeKeysWithSubstrings(pkg.dependencies, ['rollup']);
const filteredPackageDevDependencies = removeKeysWithSubstrings(pkg.devDependencies, ['rollup']);
const filteredPackage = {

    ...pkg,
    dependencies: filteredPackageDependencies,
    devDependencies: filteredPackageDevDependencies
};
const dependenciesArray = Object.keys(filteredPackage.dependencies || {}).filter((e) => !e.includes("rollup"));
const devDependenciesArray = Object.keys(filteredPackage.devDependencies || {}).filter((e) => !e.includes("rollup"));
const allDependencies = [...dependenciesArray, ...devDependenciesArray];

console.log(allDependencies)

// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== "production";

const treeshake = {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
};

const nodePlugins = [
    nodeResolve(),
    json(),
    commonjs({
        ignoreTryCatch: false,
        include: 'node_modules/**'
    }),
    typescript()
];

const rollUpConfig = {
    input: "src/index.ts",
    treeshake,
    output: {
        file: "dist/index.js",
        format: "cjs"
    },
    external: allDependencies,
    plugins: [
        ...nodePlugins,
        styles(),
        nodeResolve({
            extensions: [".ts", ".tsx", ".d.ts"]
        }),
    

        babel({
          extensions: [".ts", ".tsx", ".d.ts"],
          exclude: "node_modules/**",
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: ["@babel/plugin-transform-runtime"],
          babelHelpers: 'runtime'
      }),
        terser({
            ecma: 2020,
            mangle: { toplevel: true },
            compress: {
                toplevel: true,
                drop_console: !dev,
                drop_debugger: !dev
            },
            output: { quote_style: 1 }
        }),
        generatePackageJSON({
            outputFolder: "dist",
            baseContents: (pkg) => ({
                name: `${pkg.name}`,
                version: `${pkg.version}`,
                main: "/dist/index.js",
                peerDependencies: {
                    react: "^18.2.0",
                    "styled-components": "^6.0.0-rc.3"
                },
              
            })
        }),
        generateGitVersion({ fileName: "gitVersion.json" }),
        swcPreserveDirectives(),
        auto(),
        typescript({
            tsconfig: './tsconfig.json',
            sourceMap: true,
            inlineSources: true,
            outputToFilesystem: true,
            noEmit: true
        })
    ]
};

export default rollUpConfig;
