


# Devlander's Shared React Native Types

Devlander's team utilizes this package during the development of their React Native projects. Its primary purpose is to facilitate code reuse by sharing types across multiple projects that uses the styled-components library. 

# Purpose

- Promote consistency across styled components, design systems, and apps by leveraging shared utilities and types, eliminating the need to retype static types in each project.
- Enable type sharing between React Native and React.
- Facilitate utility sharing between React Native and React.

# Styled Components: Colors and Functions

All theme colors and utilities are centralized in Devlander React Native Shared Types. Within this package, we provide several built-in functions:

- **getStyleForTextProps**: Converts CSS with custom props and units.
- **getStyleForContainerProps**: Manages predefined CSS properties and units.
- **handleGhost**: Takes two colors and swaps them to generate ghost buttons.
- **getStyleForImageProps**: Simplifies image styling.
- **unitPropsHandler**: Handles units, whether expressed as strings or numbers, and appends appropriate metrics.
- **handleFontSizeProps**: Provides responsive design flexibility by defining **fontSize** and maxFontSize for text elements.
- **deviceOnTheme**: Reflects the current device's dimensions. This is essential when adapting UI elements based on device size. This attribute is updated within the **ThemeProvider**.

# Working with Colors

Throughout this project, you'll frequently encounter the **ColorFromTheme** type. Most styled components won't accept just any "color" prop with a hex value. The color input should be either a key from the **ColorsInterface** or a valid hex code present within the designated dark or light theme color set. While there are default colors within the theme, you have the flexibility to customize them during your theme initialization in **styled.d.ts**

## Setup

### Install

Using Yarn

```bash
yarn add  @devlander/shared-react-native-types
```

Or npm

```bash
npm install @devlander/shared-react-native-types
```

### Initialize the theme

For traditional react

```typescript
// theme.tsx

import { createThemeForWeb } from "@devlander/shared-react-native-types";
import { fontOptions } from "./fonts";

export const theme = createThemeForWeb();
```

For React Native

```typescript
import { createThemeForNative } from "@devlander/shared-react-native-types";
import { fontOptions } from "./fonts";

export const theme = createThemeForNative();
```

You can update the colors and font preferences by passing in a custom **ColorsInterface**, or **FontInterface** as well as updating the theme.

```typescript
// theme.tsx

import {
  ColorsInterface,
  DeviceOnTheme,
  boxShadowFuncInterface,
  createThemeForWeb,
} from "@devlander/shared-react-native-types";
import { fontOptions } from "./fonts";

const lightTheme: ColorsInterface = {
  // customize your colors here
};

const fontOptions: FontInterface = {
  // customize fonts here
};

const deviceOnTheme: DeviceOnTheme = {
  screenWidth: 0,
  statusBarHeight: 0,
  screenHeight: 0,
  isTablet: false,
  hasNotch: false,
  hasDynamicIsland: false,
  platform: "ios",
};

export const themeForWeb = createThemeForWeb({
  colorPreferences: lightTheme,
  fontPreferences: fontOptions,
  deviceOnTheme,
});
export const themeForNative = createThemeForNative({
  colorPreferences: lightTheme,
  fontPreferences: fontOptions,
  deviceOnTheme,
});
```

## Import the type of theme to your styled.d.ts file

What it would like if you were doing it for traditional React

```typescript
// this needs to be a typescript definition file
// example styled.d.ts
import "styled-components";
import { themeForWeb } from "../src/theme.tsx";

declare module "styled-components" {
  export type DefaultTheme = typeof themeForWeb;
}
```

What it would like if you were doing it for React Native

```typescript
// this needs to be a typescript definition file
// example styled.d.ts
import "styled-components/native";
import { themeForNative } from "../somefile";

declare module "styled-components/native" {
  export type DefaultTheme = typeof themeForNative;
}
```

## Create your Theme Provider using styled components

The reason we have to define the theme provider outside of this package,
is there was no good way to swap between styled-components web theme provider,
and the native one.

```typescript

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider  } from "styled-components/native";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { theme, darkTheme, lightTheme } from "./theme";

// ----- Types -----

// Define the shape of the Theme context and the type for the Provider's props.
interface ThemeContextType {
  darkThemeEnabled: boolean;
  canToggleTheme: boolean;
  setDarkThemeEnabled: (value: boolean) => void;
  toggleLightDarkMode: () => void;
}

interface ThemeProviderProps {
  systemIsDark?: boolean;
  getValueFromStorage?: (key: string) => Promise<boolean>;
  saveToStorage?: (key: string, value: boolean) => Promise<void>;
  children: React.ReactNode;
}

// ----- Context -----

// Default values for the context
const defaultThemeContext: ThemeContextType = {
  darkThemeEnabled: true,
  canToggleTheme: false,
  setDarkThemeEnabled: () => {},
  toggleLightDarkMode: () => {},
};

// Creation of the context
const ColorThemeContext = React.createContext<ThemeContextType>(defaultThemeContext);

// ----- Component -----

const ColorThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, saveToStorage, getValueFromStorage, systemIsDark } = props;

  // Obtain screen dimensions using a custom hook
  const screenSize = useScreenDimensions();

  // State to keep track of whether dark theme is enabled
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true);

  // Toggle between light and dark theme
  const toggleLightDarkMode = useCallback(async () => {
    const newValue = !darkThemeEnabled;
    setDarkThemeEnabled(newValue);
    if (saveToStorage) await saveToStorage("darkThemeEnabled", newValue);
  }, [darkThemeEnabled, saveToStorage]);

  // On component mount, initialize theme based on the stored value or system preference
  useEffect(() => {
    const initialize = async () => {
      if (getValueFromStorage) {
        const storedValue = await getValueFromStorage("darkThemeEnabled");
        setDarkThemeEnabled(storedValue);
      }
    };

    if (systemIsDark && !getValueFromStorage) {
      setDarkThemeEnabled(true);
    }

    initialize();
  }, [getValueFromStorage]);

  // Prepare values for context provider
  const valuePayload = useMemo(() => {
    const baseTheme = {
      ...theme,
      canToggleTheme: Boolean(saveToStorage && getValueFromStorage),
      darkThemeEnabled,
      setDarkThemeEnabled,
      toggleLightDarkMode,
    };

    return darkThemeEnabled
      ? { ...baseTheme, colors: darkTheme }
      : { ...baseTheme, colors: lightTheme };
  }, [
    darkThemeEnabled,
    saveToStorage,
    getValueFromStorage,
    toggleLightDarkMode,
  ]);

  // Merge default colors with theme colors
  const styledComponentsTheme = useMemo(() => {
    const mergedColors = darkThemeEnabled
      ? { ...theme.colors, ...darkTheme }
      : { ...theme.colors, ...lightTheme };

    return {
      ...theme,
      mode: "adaptive",
      colors: mergedColors,
      deviceOnTheme: {
        isDesktop: screenSize.width > 768,
        isTablet: screenSize.width > 480 && screenSize.width <= 768,
        isMobile: screenSize.width <= 480,
        screenWidth: screenSize.width,
        screenHeight: screenSize.height,
      },
    };
  }, [darkThemeEnabled, screenSize]);


  return (
    <ColorThemeContext.Provider value={valuePayload}>
      <ThemeProvider theme={styledComponentsTheme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  );
};

// ----- Custom Hook -----

// A hook to easily access the Theme context in any component
const useColorThemeContext = (): ThemeContextType => {
  return useContext(ColorThemeContext);
};

// ----- Exports -----

export { ColorThemeContext, ColorThemeProvider, useColorThemeContext };
export default ColorThemeProvider;


```

### Then wrap your app inside of it

```typescript
    import  React from 'react'
    import ThemeProvider from './theme-provider'

    const App = () => {
        <ThemeProvider>
        </ThemeProvider>
    }

```


## Creating the dark colors palette Dynamically 
```typescript
import { generateColorsFrom } from "@devlander/shared-react-native-types";
import type {ColorsInterface} from "@devlander/shared-react-native-types"
// This is what you would use
const darkColors: ColorsInterface = generateColorsFrom(lightColors, 'dark');


```


## To do 
- [] run auto format imports with eslint automatically