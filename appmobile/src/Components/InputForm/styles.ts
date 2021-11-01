
  
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Conatiner = styled.View ` 
 width: 100% ;
`

export const Error = styled.Text ` 
    color: ${({theme})=> theme.colors.attention};
    font-size: ${RFValue(14)}px;
`