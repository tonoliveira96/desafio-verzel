import React, { useEffect, useState } from "../../../../appmobile/node_modules/@types/react";

import CardMenu from "../../Components/CardMenu";
import api from "../../services/api";

import { Container, ContainerScroll } from "./styles";

interface CarsProps {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  images: Array<{ id: number; url: string }>;
}

export default function Menu() {
  const [cars, setCars] = useState<CarsProps[]>();

  useEffect(() => {
    async function load() {
      const response = await api.get("cars");
      setCars(response.data);
    }
    load();
  }, []);

  return (
    <>
      <Container>
        <ContainerScroll>
          {cars &&
            cars.map((data) => (
              <CardMenu
                key={data.id}
                name={data.name}
                brand={data.brand}
                model={data.model}
                price={data.price}
                id={data.id}
                image_url={data.images[0].url}
              />
            ))}
        </ContainerScroll>
      </Container>
    </>
  );
}
