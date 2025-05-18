import { useEffect, useState } from "react";
import { ErrorMessage, ErrorMessageContainer, FormArea, FormContainer, InternFormContainer, LoginButton, LoginField, LoginLabel, PasswordField, PasswordLabel } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginForm()
{
    const [ email,        setEmail        ] = useState<string>( "" );
    const [ password,     setPassword     ] = useState<string>( "" ); 
    const [ errorMessage, setErrorMessage ] = useState<string>( "" );
    const [ isFadingOut,  setIsFadingOut  ] = useState<boolean>( false );
    
    const navigate = useNavigate();

    useEffect( () => 
    {
        if ( errorMessage && ! isFadingOut )
        {
            const timer = setTimeout( () => 
            {
                setIsFadingOut( true );
                
                setTimeout( () =>
                {
                    setErrorMessage( "" );
                    setIsFadingOut( false );
                }, 300 );

            }, 3000 );

            return () => clearTimeout( timer );
        }
    }, [ errorMessage, isFadingOut ] );

    const handleSubmit = async ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        
        const credentials = `${ email }:${ password }`;

        const base64Credentials = btoa( credentials );

        try
        {
            if ( email && password )
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
                }
            }

            else
            {
                setErrorMessage( "Preencha e-mail e senha antes de fazer login." );
            }
        }

        catch ( error: any )
        {
            if ( error.response?.status === 401 )
            {
                setErrorMessage( "E-mail ou senha inválidos." );
            }

            else
            {
                if ( ! errorMessage )
                {
                    setErrorMessage( "Erro ao tentar efetuar login. Tente novamente mais tarde." );
                }
            }

            console.log( "Login error: " + error );
        }
    };

    return(
        <FormArea>
            
            <ErrorMessageContainer>

                { errorMessage && <ErrorMessage className = { isFadingOut ? "fade-out" : "" } > { errorMessage } </ErrorMessage> }

            </ErrorMessageContainer>

            <FormContainer as = "form" onSubmit = { handleSubmit } >

                <InternFormContainer>
                    
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

                </InternFormContainer>

            </FormContainer>
            
        </FormArea>
    );
}