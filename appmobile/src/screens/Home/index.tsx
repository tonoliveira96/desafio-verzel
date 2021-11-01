import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Card from "../../Components/Card";
import HeaderDefault from "../../Components/HeaderDefault";
import NavMenu from "../../Components/NavMenu";
import { useAuth } from "../../hooks/auth";
import * as _ from "underscore";
import api from "../../services/api";
import { Container, ContainerFilter, ContainerScroll } from "./styles";

interface CarsProps {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  images: Array<{ id: number; url: string }>;
}

export default function Home() {
  const [cars, setCars] = useState<CarsProps[]>();
  const [ord, setOrd] = useState(true);
  const { user } = useAuth();

  function handleOrder(arg: boolean) {
    setOrd(!ord)
    if(!cars) return
    if (arg) {
      let orderArray = _.sortBy(cars, "price");
     // console.log(orderArray);
      setCars(orderArray);
    } else {
      let orderArray = _.sortBy(cars, "price").reverse();
     // console.log(orderArray);
      setCars(orderArray);
    }
  }

  useEffect(() => {
    async function load() {
      const response = await api.get("cars");
      setCars(_.sortBy(response.data, "price").reverse());
    }
    load();
    console.log(user);
  }, []);
  return (
    <>
      <HeaderDefault />
      <Container>
        <ContainerFilter onPress={() => handleOrder(ord)}>
          <Text>{ord ? "Maior para menor": "Menor para o maior"}</Text>
          <MaterialIcons name="sort" size={20} style={{ marginLeft: 20 }} />
        </ContainerFilter>

        <ContainerScroll>
          {cars &&
            cars.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                name={data.name}
                brand={data.brand}
                model={data.model}
                price={data.price}
                image_url={data.images[0].url}
              />
            ))}
        </ContainerScroll>
      </Container>
      <NavMenu />
    </>
  );
}
