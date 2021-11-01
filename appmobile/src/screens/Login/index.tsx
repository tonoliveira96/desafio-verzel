import React, { useCallback } from "react";
import ButtonDefault from "../../Components/ButtonDefault";
import { InputForm } from "../../Components/InputForm";

import {
  Container,
  ContainerInput,
  CreateAcount,
  Label,
  TextButton,
  Title,
} from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";

import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object({
  email: Yup.string()
    .email("Digite um e-mail válido!")
    .required("E-mail é obrigatório!"),
  password: Yup.string().required("A senha é obrigatória!"),
});

export default function Login() {
  //const [cars, setCars] = useState<CarsProps[]>();
  const { navigate } = useNavigation();
  const { signIn } = useAuth();
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

  async function handleLogin(form: FormData) {
    //setLoading(true);
    try {
      await signIn({
        email: form.email,
        password: form.password,
      });

      Alert.alert("Sucesso!", "Login realizado com sucesso!!");
      navigateToPage("Home");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro", "Ocorreu um erro ao fazer o login!");
    }
  }
  return (
    <Container>
      <Title>Login</Title>
      <ContainerInput>
        <Label>E-mail</Label>
        <InputForm
          control={control}
          name="email"
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
        <ButtonDefault onPress={handleSubmit(handleLogin)} text="Entrar" />
      </ContainerInput>
      <CreateAcount onPress={() => navigateToPage("Logon")}>
        <TextButton>Criar conta</TextButton>
      </CreateAcount>
    </Container>
  );
}
