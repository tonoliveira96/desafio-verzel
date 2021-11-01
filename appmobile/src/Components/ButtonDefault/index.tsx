import React, { ButtonHTMLAttributes } from "react"
import { TouchableOpacityProps} from "react-native"
import { Container,TextButton} from "./styles"

interface ButtonProps extends TouchableOpacityProps{
    text: string;
}
export default function ButtonDefault({text,...rest}: ButtonProps){
    return(
        <Container {...rest}>
            <TextButton>{text}</TextButton>
        </Container>
    )
}