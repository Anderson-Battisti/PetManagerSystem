import { InfoContainer, LoginImage, LoginImageContainer, LoginScreenContainer, Subtitle, Title, TitleContainer } from "./styles";
import loginImage from "../../assets/Login/login_image.jpg"
import { LoginForm } from "./LoginScreenComponents/LoginForm";

export function LoginScreen()
{
    return (
        <LoginScreenContainer>

            <InfoContainer>

                <TitleContainer>

                    <Title>Pet Manager System</Title>
                    <Subtitle>Faça login e comece a gerenciar seu negócio agora mesmo</Subtitle>

                </TitleContainer>

                <LoginForm />

            </InfoContainer>

            <LoginImageContainer>

                <LoginImage src={ loginImage } />
                
            </LoginImageContainer>

        </LoginScreenContainer>
    );
}