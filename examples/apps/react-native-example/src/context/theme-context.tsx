/* eslint-disable @typescript-eslint/no-var-requires */
import { View, useColorScheme } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  Montserrat_700Bold,
  Montserrat_300Light,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import {
  OpenSans_500Medium,
  OpenSans_700Bold,
  OpenSans_300Light,
} from "@expo-google-fonts/open-sans";
import { SplashScreen } from "expo-router";
import { Text } from "react-native";
import saveToStorage from "../utils/storage/saveToStorage";
import getValueFromStorage from "../utils/storage/getValueFromStorage/getValueFromStorage";
import {ColorThemeProvider, darkTheme, useAppFonts } from "@devlander/raw-design-system"
SplashScreen.preventAutoHideAsync();

export const OpenSansLight = OpenSans_300Light;
export const OpenSansRegular = OpenSans_500Medium;
export const OpenSansBold = OpenSans_700Bold;
export const OpenSansCondensedLight = OpenSans_300Light;
export const OpenSansCondensedRegular = OpenSans_500Medium;
export const OpenSansCondensedBold = OpenSans_700Bold;
export const MontserratBold = Montserrat_700Bold;
export const MontserratLight = Montserrat_300Light;
export const MontserratRegular = Montserrat_400Regular;

export const fonts = {
  "OpenSans Light": OpenSansLight,
  "OpenSans-Regular": OpenSansRegular,
  "OpenSans-Bold": OpenSansBold,
  "OpenSans Condensed-Light": OpenSansCondensedLight,
  "OpenSans Condensed": OpenSansCondensedRegular,
  "OpenSans Condensed-Bold": OpenSansCondensedBold,
  "Montserrat-Bold": MontserratBold,
  "Montserrat-Light": MontserratLight,
  "Montserrat-Regular": MontserratRegular,
};

export interface ThemeProviderForExpoProps {
  children: React.ReactNode;
}

function ThemeProviderForExpo(
  props: ThemeProviderForExpoProps
): React.ReactNode | any {
  const { children, ...rest } = props;
  const [appIsReady, setAppIsReady] = useState(false);
  const {fontsLoaded, fontError} = useAppFonts()
     let colorScheme = useColorScheme();


  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null;
  }
  


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      onLayout={onLayoutRootView}
    >
      <ColorThemeProvider
        systemIsDark={colorScheme === "dark"? true: false}
      >
        {children}
      </ColorThemeProvider>
    </View>
  );
}

export default ThemeProviderForExpo;
