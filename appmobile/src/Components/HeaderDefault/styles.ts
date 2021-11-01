import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  padding: 30px;
  height: ${RFValue(96)}px;
  background: ${({ theme }) => theme.colors.shape};
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
