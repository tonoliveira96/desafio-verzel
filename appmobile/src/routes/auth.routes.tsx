import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "styled-components";

import CreateCar from "../screens/CreateCar";
import Menu from "../screens/Menu";
import Details from "../screens/Details";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Novo" component={CreateCar} />
      <Screen name="Menu" component={Menu} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
