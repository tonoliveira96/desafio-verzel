import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/Global/theme";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

import AppProvider from "./src/hooks";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <AppProvider>
            <Routes />
          </AppProvider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
