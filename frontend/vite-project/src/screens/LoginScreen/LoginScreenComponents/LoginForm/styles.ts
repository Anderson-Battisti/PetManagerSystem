import { styled } from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction:  column;
    margin-left: 30%;
    margin-top:  20%;
    width:  45%;
    height: 40%;
    background-color: ${ ( props ) => props.theme[ "default-green" ] };
    padding: 25px 25px 25px 25px;
    border-radius: 15px;
`

export const LoginLabel = styled.p`
    font-size: 15px;
    color: white;
`

export const LoginField = styled.input`
    margin-top: 5px;
    height: 30px;
    outline: none;
    border:  none;
    border-radius: 5px;
    padding-left:  5px;
    background-color: ${ ( props ) => props.theme[ "default-input" ] };
`

export const PasswordLabel = styled.p`
    margin-top: 15px;
    font-size:  15px;
    color: white;
`

export const PasswordField = styled.input`
    margin-top: 5px;
    height: 30px;
    outline: none;
    border:  none;
    border-radius: 5px;
    padding-left:  5px;
    background-color: ${ ( props ) => props.theme[ "default-input" ] };
`

export const LoginButton = styled.button`
    height: 30px;
    margin-top: 30px;
    outline: none;
    border:  none;
    border-radius: 5px;
    transition: 200ms;
    background-color: ${ ( props ) => props.theme[ "button-brown" ] };
    color:            ${ ( props ) => props.theme[ "background-beige" ] };

    &:hover
    {
        transform: scale( 1.05 );
        cursor: pointer;
        background-color: ${ ( props ) => props.theme[ "button-brown-hover" ] };
    }
`