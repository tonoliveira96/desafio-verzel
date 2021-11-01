import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerImageDetails = styled.View`
  width: 100%;
  height: ${RFValue(240)}px;
`;

export const ScrollImage = styled.ScrollView.attrs({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
})`
  height: ${RFValue(240)}px;
`;

export const ImageCars = styled.Image`
  width: 100%;
  height: ${RFValue(240)}px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const NameText = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: 600;
`;

export const BrandText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModelText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PriceText = styled.Text`
  margin-bottom: 12px;
  font-size: ${RFValue(32)}px;
  font-weight: bold;
`;
