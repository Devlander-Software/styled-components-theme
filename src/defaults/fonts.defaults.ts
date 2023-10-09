// For React Native, system fonts are typically used directly.
// For the web, you might want to use a combination of popular web-safe fonts and system fonts for compatibility.

import { FontsInterface } from "../types/fonts.interface";

export const defaultFonts: FontsInterface = {
  Font3: {
    light: "Roboto",
    regular: "Roboto",
    bold: "Roboto",
    name: "Roboto",
  },

  Font2: {
    light: "OpenSans-Light",
    regular: "OpenSans-Regular",
    bold: "OpenSans-Bold",
    name: '"Open Sans"',
  },
  CondensedFont: {
    light: "OpenSans-Condensed-Light",
    regular: "OpenSans-Condensed-Regular",
    bold: "OpenSans-Condensed-Bold",
    name: "'Open Sans Condensed'",
  },

  Font1: {
    light: "Montserrat-Light",
    regular: "Montserrat-Regular",
    bold: "Montserrat-Bold",
    name: "Montserrat",
  },
};

// Note:
// 1. For React Native, you'll typically set the fontFamily as 'System' for using the default system font.
// 2. Web font stacks often include a list of fonts to fall back on. This ensures that if one font isn't available, the next font in the list will be used, maximizing compatibility.
// 3. Custom fonts can be used in both React Native and web
