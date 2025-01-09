
# Devlander's Styled Components Theme

Devlander's Styled Components Theme is a powerful and type-safe solution for managing themes in React and React Native projects. This package ensures consistency, type safety, and reusable utility colors, fonts, and styles, making it an essential tool for developers looking to create scalable and maintainable design systems.

## Why Use Devlander's Styled Components Theme?

### Key Benefits:
- **Type Safety**: Enforce strict types for colors, fonts, and utilities to eliminate errors and improve maintainability.
- **Reusable Utilities**: Simplify development with pre-defined utility functions for colors, responsive font sizes, and unit conversions.
- **Cross-Platform Support**: Ensure seamless integration and consistent themes across React and React Native projects.
- **Standardized Design Systems**: Avoid mixing themes and naming conventions by adhering to a unified structure.

By using this package, development teams can establish a single source of truth for themes, eliminating redundant setup and ensuring a cohesive design system.

## Features
- **Strict Type Definitions**: Prevent errors with type-safe themes for colors and fonts.
- **Dynamic Theme Switching**: Easily toggle between light and dark themes.
- **Pre-Defined Utility Colors**: Use reusable color utilities for consistent design across projects.
- **Responsive Font Sizes**: Built-in tools for handling responsive typography.
- **Cross-Platform Compatibility**: Works seamlessly with both React and React Native.

## Installation

Add the package to your project using Yarn or npm:

### Yarn
```bash
yarn add @devlander/styled-components-theme
```

### npm
```bash
npm install @devlander/styled-components-theme
```

## Getting Started

### 1. Initialize Your Theme

#### React Example
```typescript
import { createThemeForWeb } from "@devlander/styled-components-theme";
import { lightTheme } from "./colors.util";
import { fontOptions } from "./fonts.util";

export const theme = createThemeForWeb({
  colorPreferences: lightTheme,
  fontPreferences: fontOptions,
});
```

#### React Native Example
```typescript
import { createThemeForNative } from "@devlander/styled-components-theme";
import { lightTheme } from "./colors.util";
import { fontOptions } from "./fonts.util";
import { dimensionsModuleForNative } from "@devlander/styled-components-theme";

export const theme = createThemeForNative({
  colorPreferences: lightTheme,
  fontPreferences: fontOptions,
  deviceOnTheme: {
    platform: "ios",
    isTablet: false,
    hasNotch: false,
    statusBarHeight: 15,
    screenWidth: dimensionsModuleForNative().screenWidth,
    screenHeight: dimensionsModuleForNative().screenHeight,
  },
});
```

### 2. Define Fonts and Colors

#### Font Options Example
```typescript
import type { FontsInterface } from "@devlander/styled-components-theme";
import { Platform } from "react-native";

export const fontOptions: Partial<FontsInterface> = {
  Roboto: {
    light: "Roboto-Light",
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
    name: Platform.OS === "web" ? '"Roboto"' : "Roboto",
  },
  RobotoCondensed: {
    light: "RobotoCondensed-Light",
    regular: "RobotoCondensed-Regular",
    bold: "RobotoCondensed-Bold",
    name: Platform.OS === "web" ? '"Roboto Condensed"' : "RobotoCondensed",
  },
  Lora: {
    light: "Lora-Light",
    regular: "Lora-Regular",
    bold: "Lora-Bold",
    name: Platform.OS === "web" ? '"Lora"' : "Lora",
  },
};
```

#### Colors Example
```typescript
import { ColorsInterface } from "@devlander/styled-components-theme";

export const lightTheme: ColorsInterface = {
  background: "#F9F9F9",
  primary: "#4CAF50",
  secondary: "#FF9800",
  text: "#212121",
  dividerColor: "#BDBDBD",
  error: "#F44336",
  warning: "#FFC107",
  success: "#4CAF50",
  surface: "#FFFFFF",
  cardBackground: "#FAFAFA",
  accent: "#3F51B5",
};

export const darkTheme: ColorsInterface = {
  background: "#121212",
  primary: "#81C784",
  secondary: "#FFB74D",
  text: "#E0E0E0",
  dividerColor: "#757575",
  error: "#E57373",
  warning: "#FFD54F",
  success: "#66BB6A",
  surface: "#1E1E1E",
  cardBackground: "#2E2E2E",
  accent: "#5C6BC0",
};
```

### 3. Create Styled Components

#### BaseTextStyled Example
```typescript
import styled from "styled-components/native";
import { Text } from "react-native";
import type { NativeTheme } from "@devlander/styled-components-theme";

export const BaseTextStyled = styled(Text)`
  ${(props) => props.theme.textStyleGenerator(props)};
  box-shadow: none;
`;

BaseTextStyled.defaultProps = {
  theme: {
    colors: darkTheme,
  },
};
```

#### PaddingContainerStyled Example
```typescript
import styled from "styled-components/native";
import { View } from "react-native";

export const PaddingContainerStyled = styled(View)`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;
```

### 4. Enable Dynamic Theme Switching

Toggle between light and dark themes:
```typescript
import React, { useState, createContext, useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "./colors.util";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProviderWithToggle: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
```
