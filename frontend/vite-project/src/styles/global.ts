import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* 
{
    margin:  0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root 
{
    height: 100%;
    width:  100%;
    margin:  0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins';
}
`