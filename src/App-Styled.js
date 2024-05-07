import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const PageContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
` 

const Title = styled.Text`
    padding-bottom: 40px;
    font-size: 50px;
    font-weight: 300;
    color: red;`

const Subtitle = styled.Text`
    padding-top: 40px;
    font-size: 30px;
    color: green;
`

const BackgroundImage = styled(ImageBackground)`
     flex: 1;
     justify-content: center;
     align-items: center;
`



export default function App() {
            return ( 
        <BackgroundImage source={require("./assets/image.jpg")}>

        <PageContainer>
        <Title>Hello</Title>
        <Subtitle>World</Subtitle>
        </PageContainer>
        </BackgroundImage>
    );
}


