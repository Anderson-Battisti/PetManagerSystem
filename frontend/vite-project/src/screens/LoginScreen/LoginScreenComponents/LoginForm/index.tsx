import { FormContainer, LoginButton, LoginField, LoginLabel, PasswordField, PasswordLabel } from "./styles";

export function LoginForm()
{
    return(
        <FormContainer>
            <LoginLabel>E-mail:</LoginLabel>
            <LoginField placeholder="E-mail"></LoginField>
            <PasswordLabel>Senha:</PasswordLabel>
            <PasswordField placeholder="Senha"></PasswordField>
            <LoginButton>Entrar</LoginButton>
        </FormContainer>
    );
}