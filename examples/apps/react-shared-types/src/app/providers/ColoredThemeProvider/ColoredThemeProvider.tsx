'use client'

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./colors"
import { theme } from "./theme"

export interface ThemeContextType {
  darkThemeEnabled: boolean
  canToggleTheme: boolean
  setDarkThemeEnabled: (value: boolean) => void
  toggleLightDarkMode: () => void
}

export interface ThemeProviderProps {
  systemIsDark?: boolean
  getValueFromStorage?: (key: string) => Promise<boolean>
  saveToStorage?: (key: string, value: boolean) => Promise<void>
  children: React.ReactNode | React.ReactNode[]
}

export const defaultThemeContext: ThemeContextType = {
  darkThemeEnabled: true,
  canToggleTheme: false,
  setDarkThemeEnabled: () => {},
  toggleLightDarkMode: () => {},
}

const ColorThemeContext =
  React.createContext<ThemeContextType>(defaultThemeContext)

// Component

const ColorThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, saveToStorage, getValueFromStorage, systemIsDark } = props

  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true)

  // Handle the toggle between light and dark modes
  const toggleLightDarkMode = useCallback(async () => {
    const newValue = !darkThemeEnabled
    setDarkThemeEnabled(newValue)
    if (saveToStorage) await saveToStorage("darkThemeEnabled", newValue)
  }, [darkThemeEnabled, saveToStorage])

  // Initialize the theme based on stored value
  useEffect(() => {
    const initialize = async () => {
      if (getValueFromStorage) {
        const storedValue = await getValueFromStorage("darkThemeEnabled")
        setDarkThemeEnabled(storedValue)
      }
    }

    if (systemIsDark && !getValueFromStorage) {
      setDarkThemeEnabled(true)
    }

    initialize()
  }, [getValueFromStorage])

  const valuePayload = useMemo(() => {
    const baseTheme = {
      ...theme,
      canToggleTheme: Boolean(saveToStorage && getValueFromStorage),
      darkThemeEnabled,
      setDarkThemeEnabled,
      toggleLightDarkMode,
    }

    return darkThemeEnabled
      ? { ...baseTheme, colors: darkTheme }
      : { ...baseTheme, colors: lightTheme }
  }, [
    darkThemeEnabled,
    saveToStorage,
    getValueFromStorage,
    toggleLightDarkMode,
  ])

  const styledComponentsTheme = useMemo(() => {
    const mergedColors = darkThemeEnabled
      ? { ...theme.colors, ...darkTheme }
      : { ...theme.colors, ...lightTheme }

    return {
      ...theme,
      mode: "adaptive",
      colors: mergedColors,
    }
  }, [darkThemeEnabled])

  return (
    <ColorThemeContext.Provider value={valuePayload}>
      <ThemeProvider theme={styledComponentsTheme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  )
}

// Custom Hook

const useColorThemeContext = (): ThemeContextType => {
  return useContext(ColorThemeContext)
}

// Exports

export { ColorThemeContext, ColorThemeProvider, useColorThemeContext }
export default ColorThemeProvider
