
import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 30px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ContainerInput = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  border-radius:5px;
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;


export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 10px;
  letter-spacing: 5px;
`;

export const CreateAcount = styled.TouchableHighlight`
  display: flex;
  align-items:center;
  width: 100% ;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.shape};
  padding: 6px 12px;
`;

export const TextButton = styled.Text ` 
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
`