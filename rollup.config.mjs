import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { terser } from "rollup-plugin-terser";

// Read package.json
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// Detect if the build is targeting web or native
const isWeb = process.env.BUILD_TARGET === "web"; // You can set this environment variable when running the build script

const extensions = [".js", ".jsx", ".ts", ".tsx", ".native.js", ".native.tsx"];

// Exclude certain dependencies from being bundled
const external = [
  "react",
  "react-dom",
  "react-native",
  "react-native-web",
  "color"
];

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => pattern.test(id);
};

export default {
  input: "src/bundle/index.tsx", // Your entry point
  output: [
    {
      file: packageJson.main,
      format: "umd",
      name: "DevlanderStyledComponentsTheme", // Your library's global variable name for UMD
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-native": "ReactNative",
        "react-native-web": "ReactNativeWeb"
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
    // Apply alias only for web builds
    ...(isWeb
      ? [
          alias({
            entries: [
              { find: "react-native", replacement: "react-native-web" }, // Alias react-native to react-native-web only for web builds
            ],
          }),
        ]
      : []),
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
        "@babel/preset-react", // Add React preset for JSX
        "@babel/preset-typescript",
      ],
    }),
    typescript({ tsconfig: "./tsconfig.json" }), // Compile TypeScript
    nodePolyfills(), // Polyfills for Node.js built-in modules
    json(), // Handle JSON imports
    terser(), // Minification
  ],
};
