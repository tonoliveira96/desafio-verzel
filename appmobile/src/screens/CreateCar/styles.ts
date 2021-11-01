import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
`;
export const HeaderClose = styled.View`
  display: flex;
  padding: 15px 0 4px 0;
  flex-direction: row;
  justify-content: flex-end;
`;
export const ContainerImagens = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Label = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SelectedImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 15px;
  margin-bottom: 32px;
  margin-right: 8px;
`;

export const ButtonSelectImages = styled.TouchableOpacity`
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.shape};
  padding: 8px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 24px;
`;

export const ButtonSave = styled.TouchableOpacity`
  display: flex;
  background: ${({ theme }) => theme.colors.success};
  padding: 8px;
  border-radius: 10px;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
`;
