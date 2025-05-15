import { useState } from "react";
import { FormContainer, LoginButton, LoginField, LoginLabel, PasswordField, PasswordLabel } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginFormProps =
{
    setErrorMessage: ( message: string ) => void;
}
export function LoginForm( { setErrorMessage }: LoginFormProps )
{
    const [ email,        setEmail        ] = useState<string>( "" );
    const [ password,     setPassword     ] = useState<string>( "" ); 
    
    const navigate = useNavigate();

    const handleSubmit = async ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        
        const credentials = `${ email }:${ password }`;

        const base64Credentials = btoa( credentials );

        try
        {
            const response = await axios.get( "http://localhost:9000/checkLogin",
                                                {
                                                    headers:
                                                    {
                                                        Authorization: `Basic ${base64Credentials}`
                                                    } 
                                                } );
            if ( response.status === 200 )
            {
                navigate( "/home" );
                console.log( "Login success: " + response.data );
            }

            else
            {
                alert( "Login failed. Try again." );
            }
        }

        catch ( error: any )
        {
            if ( error.response.status === 401 )
            {
                setErrorMessage( "E-mail ou senha inválidos." );
            }

            else
            {
                setErrorMessage( "Erro ao tentar efetuar login. Tente novamente mais tarde." );
            }

            console.log( "Login error: " + error );
        }
    };

    return(
        <FormContainer as = "form" onSubmit = { handleSubmit } >
            
            <LoginLabel>E-mail:</LoginLabel>
            
            <LoginField 
                placeholder = "E-mail"
                type        = "text"
                value       = { email }
                onChange    = { ( e ) => setEmail( e.target.value ) } />
            <PasswordLabel>Senha:</PasswordLabel>
            
            <PasswordField 
                placeholder = "Senha"
                type        = "password"
                value       = { password }
                onChange    = { ( e ) => setPassword( e.target.value ) } />
            
            <LoginButton 
                type = "submit" >Entrar
            </LoginButton>

        </FormContainer>
    );
}