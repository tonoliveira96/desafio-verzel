import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import {formatValue,currencyFormat }from "../../Utils/utilsFuntions";

import {
  BrandText,
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

export default function Card({
  id,
  name,
  brand,
  model,
  price,
  image_url,
}: CardProps) {
  const { navigate } = useNavigation();

  const navigateToPage = useCallback(
    (page: any, id: any) => {
      navigate(page, { id: id });
    },
    [navigate]
  );

  return (
    <Container onPress={() => navigateToPage("Details", id)}>
      <ImageContainer>
        <CarImage
          source={{
            uri: image_url,
          }}
          resizeMode="cover"
        />
      </ImageContainer>
      <DescriptionContainer>
        <NameText>{name}</NameText>
        <BrandText>Marca: {brand}</BrandText>
        <ModelText>Modelo: {model}</ModelText>
        <PriceText>{ currencyFormat(price)}</PriceText>
      </DescriptionContainer>
    </Container>
  );
}
