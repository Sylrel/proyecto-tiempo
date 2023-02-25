import styled from "styled-components";
import 'typeface-roboto';
import { createGlobalStyle } from 'styled-components'

//Dar color al body
export const GlobalStyle = createGlobalStyle`
    body {
        //Color gradiente de fondo
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgb(0, 212, 255) 100%);    
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2{
        display: flex;  
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        
        font-size: 42px;
    }
    input {
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 20%;
        height: 30px;
        border: 1px solid #0d85e7;
        border-radius: 5px;
        padding: 5px;
        font-size: 1.2rem;
        &:focus {
            border: 1px solid #000;
        }
    }
    h1{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 100px;
        height: 100px;
        //Centrar imagen
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p {
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: center;
        align-items: center;
        //Dar formato a los numeros
        font-size: 2.5rem;
        font-style: oblique;
        color: #F9F871;
    }
`;

export const StyledDiv = styled.div`
   
`;

export const StyledH2 = styled.h2`
  color: #F9F871 ;
`;

export const StyledInput = styled.input`

`;

export const StyledH1 = styled.h1`
    color: #F9F871 ;
`;

