import { MaterialIcons } from "@expo/vector-icons";
import { Console } from "console";
import React from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import api from "../../services/api";
import { currencyFormat } from "../../Utils/utilsFuntions";

import {
  ActionsContainer,
  BrandText,
  ButtonAction,
  CarImage,
  Container,
  DescriptionContainer,
  ImageContainer,
  ModelText,
  NameText,
  PriceText,
} from "./styles";

interface CardProps {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  image_url: string;
}

export default function CardMenu({
  id,
  name,
  brand,
  model,
  price,
  image_url,
}: CardProps) {
  const theme = useTheme();

  function handleClick(id: number) {
    Alert.alert("Atenção", "Deseja realamente exluir este item?!", [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          handleDelete(id);
        },
      },
    ]);
  }

  function handleDelete(id: number) {
    try {
      api.delete(`cars/${id}`);
      Alert.alert("Sucesso!", "Item excluido com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <ImageContainer>
        <CarImage
          source={{
            uri: image_url,
          }}
        />
      </ImageContainer>

      {/* <Image width={200} source={{uri: "https://cdn.pixabay.com/photo/2016/03/27/22/21/city-1284508_960_720.jpg"}}/> */}
      <DescriptionContainer>
        <NameText>{name}</NameText>
        <BrandText>Marca: {brand}</BrandText>
        <ModelText>Modelo: {model}</ModelText>
        <PriceText>Valor: {currencyFormat(price)}</PriceText>
      </DescriptionContainer>
      <ActionsContainer>
        <ButtonAction
          onPress={() => handleClick(id)}
          style={{
            backgroundColor: theme.colors.attention,
            borderTopRightRadius: 8,
          }}
        >
          <MaterialIcons name="delete" size={20} color={theme.colors.primary} />
        </ButtonAction>
        <ButtonAction
          onPress={() => {}}
          style={{
            backgroundColor: theme.colors.success,
            borderBottomRightRadius: 8,
          }}
        >
          <MaterialIcons
            name="mode-edit"
            size={20}
            color={theme.colors.primary}
          />
        </ButtonAction>
      </ActionsContainer>
    </Container>
  );
}
