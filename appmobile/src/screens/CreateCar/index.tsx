import React, { useState } from "react";
import { Alert, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import {
  Container,
  Label,
  ButtonSelectImages,
  ContainerImagens,
  SelectedImage,
  HeaderClose,
  ButtonSave,
  TextButton,
} from "./styles";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import api from "../../services/api";
import { InputForm } from "../../Components/InputForm";

interface FormDataProps {
  name: string;
  brand: string;
  model: string;
  price: string;
}

const schema = Yup.object({
  name: Yup.string().required("Nome do carro é obrigatório!"),
  brand: Yup.string().required("A marca é obrigatória!"),
  model: Yup.string().required("O modelo é obrigatória!"),
  price: Yup.number().required("Preço é obrigatório"),
});

export default function CreateCar() {
  const [value, setValue] = useState<string>();
  const { goBack, navigate } = useNavigation();

  const [images, setImages] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function convertMoney(value: string) {
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    console.log(value);
    setValue(value);
  }

  async function handleSelectImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Precisamos de acesso a suas fotos...");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  }

  async function handleCreate(form: FormDataProps) {
    const data = new FormData();

    data.append("name", form.name);
    data.append("brand", form.brand);
    data.append("model", form.model);
    data.append("price", form.price);

    images.forEach((image, index) => {
      data.append("images", {
        name: `image_${Date.now()}.jpg`,
        type: "image/jpg",
        uri: image,
      } as any);
    });

    console.log(data);
    try {
      await api.post("/cars", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      let page: any = "Home";
      Alert.alert("Secesso!", "Cadastrado com sucesso!", [
        { text: "OK", onPress: () => navigate(page) },
      ]);
    } catch (err) {
      console.log(err);
    }

    //
  }

  return (
    <Container>
      <HeaderClose>
        <TouchableOpacity onPress={() => goBack()}>
          <Feather name="x-circle" size={32} color="#e83f5b" />
        </TouchableOpacity>
      </HeaderClose>
      <Label>Nome do carro</Label>
      <InputForm
        control={control}
        name="name"
        placeholder="Nome do carro"
        maxLength={40}
        error={errors.name && errors.name.message}
      />
      <Label>Marca</Label>
      <InputForm
        control={control}
        name="brand"
        placeholder="Marca"
        error={errors.brand && errors.brand.message}
      />
      <Label>Modelo</Label>
      <InputForm
        control={control}
        name="model"
        placeholder="Modelo"
        error={errors.model && errors.model.message}
      />
      <Label>Preço</Label>
      <InputForm
        control={control}
        name="price"
        placeholder="R$ 0,00"
        keyboardType="number-pad"
        // value={value}
        // onChangeText={(e) => convertMoney(e)}
        error={errors.price && errors.price.message}
      />
      <Label>Fotos</Label>
      <ContainerImagens>
        {images.map((item) => {
          return <SelectedImage key={item} source={{ uri: item }} />;
        })}
      </ContainerImagens>
      <ButtonSelectImages onPress={handleSelectImage}>
        <Feather name="plus" size={24} color="#fff" />
      </ButtonSelectImages>
      <ButtonSave onPress={handleSubmit(handleCreate)}>
        <TextButton>Salvar</TextButton>
      </ButtonSave>
    </Container>
  );
}
