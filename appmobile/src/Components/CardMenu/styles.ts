import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${RFValue(100)}px;
  border-radius: 8px;
  border: 1px solid #888;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 10px;
`;

export const ImageContainer = styled.View`
  width: 30%;
  height: 100%;
  border-radius: 8px;
`;

export const CarImage = styled.Image`
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const DescriptionContainer = styled.View`
  width: 50%;
  padding: 0 10px;
`;

export const NameText = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const BrandText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModelText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PriceText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const ActionsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const ButtonAction = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
