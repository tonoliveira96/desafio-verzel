import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
  background: ${({theme})=>theme.colors.background};
`;

export const ContainerScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
  })` 
 width: 100%;
`
