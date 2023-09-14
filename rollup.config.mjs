

import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert { type: 'json' };
import babel from "@rollup/plugin-babel";
import generateGitVersion from "rollup-plugin-generate-git-version";
// @ts-ignore
import { nodeResolve } from "@rollup/plugin-node-resolve";
import swcPreserveDirectives from "rollup-swc-preserve-directives";
import auto from '@rollup/plugin-auto-install';
import json from "@rollup/plugin-json";
import styles from "rollup-plugin-styles";


// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== "production";
const treeshake = {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
};
const nodePlugins = [
    nodeResolve({
        extensions: [".ts", ".d.ts"],
    }),
    json(),
    commonjs({
        ignoreTryCatch: false,
        include: 'node_modules/**'
    }),
    typescript()
];


const stylingPlugins = [
    styles()
]

const generalPlugins =   [
    ...nodePlugins,
    ...stylingPlugins,
 
   
    babel({
        babelHelpers: 'runtime',
        plugins: ["@babel/plugin-transform-runtime"],
        extensions: [".ts", ".d.ts"],
        exclude: "node_modules/**",
        presets: ["@babel/preset-typescript"],
    }),
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
    typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        inlineSources: true,
      
    }),
    generateGitVersion({ fileName: "gitVersion.json" }),
    swcPreserveDirectives(),
    auto(),
    peerDepsExternal(),

]

const config = [
    {
        treeshake,
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            },
            {
                file: packageJson.browser,
                format: 'umd',
                name: packageJson.name,
            }
        ],
        plugins: [
            ...generalPlugins,
           
           
        ],
        external: [
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.peerDependencies || {}),
        ],
    },
    {
        treeshake,

        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
  
];

export default config;



