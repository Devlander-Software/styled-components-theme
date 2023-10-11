

import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import babelJson from './babel.config.json' assert { type: 'json' };
import packageJson from './package.json' assert { type: 'json' };

import babel from "@rollup/plugin-babel";
import generateGitVersion from "rollup-plugin-generate-git-version";
// @ts-ignore
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import swcPreserveDirectives from "rollup-swc-preserve-directives";

import peerDepsExternal from 'rollup-plugin-peer-deps-external';

function removeKeysWithSubstrings(obj, substrings) {
    return Object.keys(obj)
      .filter(key => !substrings.some(substring => key.includes(substring)))
      .reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {});
}



const filteredPackage = removeKeysWithSubstrings(packageJson.dependencies, ['rollup', 'path', '@babel']);
// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== "production";
const treeshake = {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
};
const nodePlugins = [
    nodeResolve({
        extensions: [".ts", ".d.ts", ".tsx", ".js", ".jsx", ".json"],
    }),
    json(),
    commonjs({
        ignoreTryCatch: false,
        include: ['node_modules/**', './src/declarations/styled.d.ts']
    }),
    typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        inlineSources: true,
      
    }),
];


const stylingPlugins = [
    styles()
]

const generalPlugins =   [
    ...nodePlugins,
    ...stylingPlugins,
 
   
    babel({...babelJson}),
    terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
            toplevel: true,
            drop_console: !dev,
            drop_debugger: !dev,
        },
        output: { quote_style: 1 },
    }),
 
    generateGitVersion({ fileName: "gitVersion.json" }),
    swcPreserveDirectives(),
    peerDepsExternal(),

]

const config = [
    {
        plugins: [
            ...generalPlugins,
           
           
        ],
        treeshake,
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
              
               
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
                exports: 'named'
               
            },
       
            {
                file: packageJson.browser,
                format: 'umd',
                name: "sharedReactNativeTypes",
                globals: {
                    lodash: 'lodash',
                    'react-native': 'reactNative',
                    'hex-to-rgba': 'hexToRgba',
                    'react-native-responsive-fontsize': 'reactNativeResponsiveFontsize'
                  }
            }
        ],
        external: Object.keys(filteredPackage),
      
        
    },
    {
        treeshake,
        include: ['src/**/*'],
        exclude: ["**/*.d.ts"],

        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
  
];

export default config;



