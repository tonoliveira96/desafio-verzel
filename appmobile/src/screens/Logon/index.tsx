import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import ButtonDefault from "../../Components/ButtonDefault";
import { InputForm } from "../../Components/InputForm";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  ContainerInput,
  CreateAcount,
  Label,
  TextButton,
  Title,
} from "./styles";
import api from "../../services/api";
import { Alert } from "react-native";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string()
    .email("Digite um e-mail válido!")
    .required("E-mail é obrigatório!"),
  password: Yup.string().required("A senha é obrigatória!"),
});

export default function Logon() {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigateToPage = useCallback(
    (page: any) => {
      navigate(page);
    },
    [navigate]
  );

  async function handleLogon(form: FormData) {
    // navigateToPage("Dashboard");
    await api.post("users", form).then((response) => {
      Alert.alert(
        "Sucesso!",
        "Usuário criado com sucesso você já pode fazer login no aplicativo!",
        [{ text: "OK", onPress: () => navigateToPage("Login") }]
      );
    });

    console.log(form);
  }
  return (
    <Container>
      <Title>Criar conta</Title>
      <ContainerInput>
        <Label>Nome</Label>
        <InputForm
          name="name"
          control={control}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
          error={errors.name && errors.name.message}
        />
        <Label>E-mail</Label>
        <InputForm
          name="email"
          control={control}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="exemeplo@exemplo.com"
          error={errors.email && errors.email.message}
        />
        <Label>Senha</Label>
        <InputForm
          name="password"
          control={control}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          error={errors.password && errors.password.message}
        />
        <ButtonDefault onPress={handleSubmit(handleLogon)} text="Criar conta" />
      </ContainerInput>
      <CreateAcount onPress={() => navigateToPage("Login")}>
        <TextButton>Voltar ao login</TextButton>
      </CreateAcount>
    </Container>
  );
}
