import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { terser } from "rollup-plugin-terser";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js", ".jsx", ".ts", ".tsx",  ".native.js"];

// Exclude certain dependencies from being bundled
const external = [
  "react",
  "react-dom",
  "react-native-web"  // Add more peer dependencies here
];

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};

export default {
  input: "src/bundle/index.tsx", // Your entry point
  output: [
    {
      file: packageJson.main,
      format: "umd",
      name: "ReactNativeSharedTypes", // Replace with your library's name
      globals: {
        react: "React",
        "react-native-web": "reactNativeWeb"
      },
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    }
  ],
  external: makeExternalPredicate(external),
  plugins: [
    alias({
      entries: [
        { find: "react-native", replacement: "react-native-web" },
        // { find: "react-native-web/dist/exports/StyleSheet", replacement: "react-native-web/dist/exports/StyleSheet/index" },
        // { find: "react-native-web/dist/exports/View", replacement: "react-native-web/dist/exports/View/index" },
        // { find: "react-native-web/dist/exports/Text", replacement: "react-native-web/dist/exports/Text/index" },
        // { find: "react-native-web/dist/exports/TextInput", replacement: "react-native-web/dist/exports/TextInput/index" },
        // { find: "react-native-web/dist/exports/Platform", replacement: "react-native-web/dist/exports/Platform/index" },
        // { find: "react-native-web/dist/exports/Dimensions", replacement: "react-native-web/dist/exports/Dimensions/index" },
        // { find: "react-native-web/dist/exports/Animated", replacement: "react-native-web/dist/exports/Animated/index" },
        // { find: "react-native-web/dist/exports/Animated/AnimatedImplementation", replacement: "react-native-web/dist/exports/Animated/AnimatedImplementation/index" },
      
        // Define aliases if you have some
      ],
    }),
    nodeResolve({
      extensions,
      preferBuiltins: true,
    }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: /node_modules/,
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    nodePolyfills(),
    json(),
    terser(), // Use terser for minification
  ],
};
