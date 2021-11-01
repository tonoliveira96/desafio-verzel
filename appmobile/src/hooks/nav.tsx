import { useNavigation } from "@react-navigation/core";
import React, { createContext, ReactNode, useCallback, useContext } from "react";
import { Alert } from "react-native";

import { useAuth } from "./auth";
interface NavProviderProps {
  children: ReactNode;
}

interface NavContextData {
  navigateToPage: (page: any) => void;
}

const NavContext = createContext<NavContextData>({} as NavContextData);

export function NavProvider({ children }: NavProviderProps): JSX.Element {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToPage = useCallback((page: any) => {
      console.log("Chegou no hook")
      let pageLogin: any = "Login";
      if (!user) {
        Alert.alert(
          "Atenção",
          "Para acessar esta função você deve fazer login na aplicação!",
          [
            {
              text: "Cancelar",
              onPress: () => {},
              style: "cancel",
            },
            { text: "OK", onPress: () => navigate(pageLogin) },
          ]
        );
      } else {
        navigate(page);
      }
  },[]);
  
  return (
    <NavContext.Provider value={{ navigateToPage }}>
      {children}
    </NavContext.Provider>
  );
};

export function useNav(): NavContextData {
  const context = useContext(NavContext);

  return context;
}
