import { styled } from "styled-components";

export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30%;
    margin-top:  15%;
    width:  45%;
    height: 40%;
`;

export const FormContainer = styled.form`
    background-color: ${ ( props ) => props.theme[ "default-green" ] };
    padding: 25px 25px 25px 25px;
    border-radius: 15px;
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 40px;
    margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
    font-size: 13px;
    padding-left: 10px;
    padding-bottom: 5px;
    text-align: left;
    margin: 0;
    color: ${ ( props ) => props.theme[ "default-red" ] }; 
    animation: slideUp 0.7s ease-out forwards;

    &.fade-out
    {
        animation: fadeOut 0.7s ease-out forwards;
    }
    
    @keyframes slideUp
    {
        from
        {
            transform: translateY( 20px );
            opacity: 0;
        }
        
        to
        {
            transform: translateY( 0 );
            opacity: 1;
        }
    }

    @keyframes fadeOut
    {
        from
        {
            transform: translateY( 0 );
            opacity: 1;
        }

        to 
        {
            transform: translateY( 20px );
            opacity: 0;
        }
    }
`;

export const InternFormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:  column;
    width: 100%;
`;

export const LoginLabel = styled.p`
    font-size: 15px;
    color: white;
`;

export const LoginField = styled.input`
    margin-top: 5px;
    height: 30px;
    outline: none;
    border:  none;
    border-radius: 5px;
    padding-left:  5px;
    background-color: ${ ( props ) => props.theme[ "default-input" ] };
`;

export const PasswordLabel = styled.p`
    margin-top: 15px;
    font-size:  15px;
    color: white;
`;

export const PasswordField = styled.input`
    margin-top: 5px;
    height: 30px;
    outline: none;
    border:  none;
    border-radius: 5px;
    padding-left:  5px;
    background-color: ${ ( props ) => props.theme[ "default-input" ] };
`;

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
`;