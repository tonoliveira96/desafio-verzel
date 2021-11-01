import React from "react";
import { ActivityIndicator, Alert, View } from "react-native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../hooks/auth";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
  if (user) {
    return <AuthRoutes />;
  } else {
    return <AppRoutes />;
  }
};

export default Routes;
