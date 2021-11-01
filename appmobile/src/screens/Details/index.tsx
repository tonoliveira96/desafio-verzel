import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";

import {
  BrandText,
  Container,
  ContainerImageDetails,
  DetailsContainer,
  ImageCars,
  NameText,
  ModelText,
  PriceText,
} from "./styles";
import { ScrollView } from "react-native";
import api from "../../services/api";
import { useRoute } from "@react-navigation/core";
import { currencyFormat } from "../../Utils/utilsFuntions";

interface RouteProps {
  id: number;
}

interface CarsProps {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  images: Array<{ id: number; url: string }>;
}

export default function Details() {
  const [car, setCar] = useState<CarsProps>();
  const { params } = useRoute();

  useEffect(() => {
    async function load() {
      const response = await api.get(`cars/${params.id}`);
      setCar(response.data);
    }

    load();
  }, [params]);

  const images = [
    {
      id: 1,
      path: "https://cdn.pixabay.com/photo/2016/03/27/22/21/city-1284508_960_720.jpg",
    },
    {
      id: 2,
      path: "https://cdn.pixabay.com/photo/2018/06/30/17/29/oldtimer-3508051__340.jpg",
    },
    {
      id: 3,
      path: "https://cdn.pixabay.com/photo/2019/06/17/23/05/volkswagen-beetle-4281109__340.jpg",
    },
  ];
  return (
    <>
      <Container>
        <ContainerImageDetails>
          <ScrollView pagingEnabled style={{ flex: 1 }}>
            {car &&
              car.images.map((item) => {
                return (
                  <View key={item.id} style={{ flex: 1 }}>
                    <ImageCars
                      source={{
                        uri: item.url,
                      }}
                    />
                  </View>
                );
              })}
          </ScrollView>
        </ContainerImageDetails>

        <DetailsContainer>
          {car && (
            <>
              <PriceText>{currencyFormat(car.price)}</PriceText>
              <NameText>{car.name}</NameText>
              <BrandText>Marca: {car.brand}</BrandText>
              <ModelText>Modelo: {car.model}</ModelText>
            </>
          )}
        </DetailsContainer>
      </Container>
    </>
  );
}
