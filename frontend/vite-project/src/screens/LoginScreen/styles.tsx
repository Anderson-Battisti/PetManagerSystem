import { styled } from "styled-components";

export const LoginScreenContainer = styled.div`
    display: flex;
    height:  100%;
    width:   100%;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3%;
    padding-top:  3%;
    width: 50%;
    background: linear-gradient( to bottom, ${ (props) => props.theme[ "background-beige" ] }, 
                                            ${ (props) => props.theme[ "default-brown" ] } ); 
`
export const TitleContainer = styled.div``

export const Title = styled.p`
    font-size: 25px;
`

export const Subtitle = styled.p``

export const LoginImageContainer = styled.div`
    height: 100%;
    width:  50%;
`
export const LoginImage = styled.img`
    height:  100%;
    display: block;
`