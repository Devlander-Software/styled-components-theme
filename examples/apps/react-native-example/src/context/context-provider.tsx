import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import ThemeProviderForExpo from "./theme-context";
import AuthProvider from "./auth";
import ErrorsProvider from "./error-provider";
import QueryProvider from "./query-provider";

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps): ReactNode | any {
  return (
    <QueryProvider>

    <ErrorsProvider>

    <ThemeProviderForExpo>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProviderForExpo>
    </ErrorsProvider>
    </QueryProvider>


  );
}

export default Provider;
