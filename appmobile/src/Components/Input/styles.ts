import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled(TextInput) ` 
    width: 100%;
    padding: 12px;
    font-size: ${RFValue(16)}px;
    color: ${({theme})=>theme.colors.text_dark};

    background-color: ${({theme})=>theme.colors.shape};
    border: 1px solid ${({theme})=>theme.colors.text};
    border-radius: 10px;
    margin-bottom: 4px;
`