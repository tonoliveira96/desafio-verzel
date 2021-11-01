import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
export const ContainerFilter = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 20px;
  background: #ccc;
  border-radius: 25px;
  margin-top: -20px;
`;
