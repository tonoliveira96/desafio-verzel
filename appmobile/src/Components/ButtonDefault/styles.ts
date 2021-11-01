import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
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

