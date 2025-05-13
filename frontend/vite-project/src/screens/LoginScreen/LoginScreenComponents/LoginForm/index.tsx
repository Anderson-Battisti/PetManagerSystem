import { useState } from "react";
import { FormContainer, LoginButton, LoginField, LoginLabel, PasswordField, PasswordLabel } from "./styles";
import axios from "axios";

export function LoginForm()
{
    const [ email,    setEmail ]    = useState<string>( "" );
    const [ password, setPassword ] = useState<string>( "" ); 

    const handleSubmit = async ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        
        const credentials = `${ email }:${ password }`;

        const base64Credentials = btoa( credentials );

        try
        {
            const response = await axios.post( "http://localhost:9000/",
                                                {},
                                                {
                                                    headers:
                                                    {
                                                        Authorization: `Basic ${base64Credentials}`
                                                    } 
                                                } );
            
            console.log( "Login success: " + response.data );
        }

        catch ( error )
        {
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