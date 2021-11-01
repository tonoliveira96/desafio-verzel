import React, { useCallback } from "react";
import { Container, Option } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { useNav } from "../../hooks/nav";
import { useAuth } from "../../hooks/auth";

export default function NavMenu() {
  const { navigate } = useNavigation();
  const {user} = useAuth()
  const theme = useTheme();
  // const { navigateToPage } = useNav();

  

  function handleClick(page: any){
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
  }

  return (
    <Container>
      <Option>
        <MaterialIcons name="home" color={theme.colors.primary} size={28} />
      </Option>
      <Option onPress={() => handleClick("Novo")}>
        <MaterialIcons
          name="add-circle"
          color={theme.colors.primary}
          size={28}
        />
      </Option>
      <Option onPress={() => handleClick("Menu")}>
        <MaterialIcons name="menu" color={theme.colors.primary} size={28} />
      </Option>
    </Container>
  );
}
