import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "styled-components";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Logon from "../screens/Logon";
import Details from "../screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Logon" component={Logon} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
