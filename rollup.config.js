

   import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import generatePackageJSON from "rollup-plugin-generate-package-json"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import styles from "rollup-plugin-styles"
import { terser } from "rollup-plugin-terser"
import swcPreserveDirectives from 'rollup-swc-preserve-directives'

// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== "production"

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: ["@expo/vector-icons", "@jwplayer/jwplayer-react", "@types/lodash", "@types/react", "axios", "chromatic", "expo", "expo-av", "expo-checkbox", "expo-font", "expo-linear-gradient", "expo-status-bar", "hex-to-rgba", "jwt-decode", "lodash", "network", "react", "react-dom", "react-native", "react-native-jw-media-player", "react-native-responsive-fontsize", "react-native-svg", "react-native-web", "react-native-webview", "react-redux", "react-router-dom", "react-router-native", "react-scripts", "react-use", "redux", "redux-thunk", "styled-components", "styled-system", "uuid", "react-responsive", "styled-components", "typescript", "use-count-up"],
  plugins: [
    nodeResolve({
      extensions: [".ts", ".tsx"],
    }),
    babel({
      extensions: [".ts", ".tsx"],
      exclude: "node_modules/**",
      presets: ["@babel/preset-react", "@babel/preset-typescript"],
    }),
    generatePackageJSON({
      outputFolder: "dist",
      baseContents: (pkg) => ({
        name: pkg.name,
        main: "/dist/index.js",
        peerDependencies: {
          react: "^18.2.0",
          "styled-components": "^6.0.0-rc.3",
        },
      }),
    }),
    terser({
      ecma: 2015,
      mangle: { toplevel: true },
      compress: {
        toplevel: true,
        drop_console: !dev,
        drop_debugger: !dev,
      },
      output: { quote_style: 1 },
    }),
    commonjs(),
    styles(),
    swcPreserveDirectives()
  ],
}
