import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
  height: ${RFValue(60)}px;
  background: ${({ theme }) => theme.colors.shape};
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

export const Option = styled.TouchableOpacity``;
