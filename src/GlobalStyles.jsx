import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
    }
    
    html{
        scroll-behavior: smooth;
        font-size: 62.5%;
        /* overflow: hidden; */

    }

    ::-webkit-scrollbar{
        width: 1.5rem;
    }
    ::-webkit-scrollbar-track{
        background-color: rgb(24 24 29);
    }
    ::-webkit-scrollbar-thumb{
        background: #fff;
        border: 5px solid transparent;
        border-radius: 50%;
        background-clip: content-box;
        height: 20rem;
        width: 20rem;

    }

    h1 {
        color:${(props)=>props.theme.colors.heading}; 
        font-size:6rem;
        font-weight: 900;

    }

    h2{
        color:${(props)=>props.theme.colors.heading}; 
        font-size:4.4rem;
        font-weight: 300; 
        white-space: normal;
        text-align: center;

    }

    h3{
       font-size :1.8rem ;
       font-weight: 400;
    }

    p{
        color:${(props)=>props.theme.colors.heading}; 
        opacity: 0.6;
        font-size: 1.65rem;
        line-height: 1.5rem;
        margin-top: 1rem;
        font-weight: 400;

    }   

    a{
        text-decoration: none;

    }
    li{
        list-style: none;
    }

    .container {
        max-width: 120rem;
        margin:0 auto;
    }

    .grid {
        display: grid;
        gap: 9rem;
    }
    .grid-two-column{
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-three-column{
        grid-template-columns: repeat(3,1fr);

    }
    .grid-four-column{
        grid-template-columns: repeat(4,1fr);

    }

    .common-heading{
        font-size: 3.8rem;
        font-weight: 600;
        margin-bottom: 6rem;
        text-transform: capitalize;
    }

    input, textarea{
        max-width: 50rem;
        color: ${({theme})=>theme.colors.black};
        padding: 1.6rem 2.4rem;
        border: 1px solid ${({theme})=>theme.colors.border};
        text-transform: uppercase;
        box-shadow: ${({theme})=>theme.colors.shadow};
    }

    input[type="submit"]{
        max-width: 16rem;
        margin-top: 2rem;
        background-color: ${({theme})=>theme.colors.btn};
        color: ${({theme})=>theme.colors.white};
        padding: 1.4rem 2.2rem;
        border-style: solid;
        border-width: 0.1rem;
        font-size: 1.8rem;
        cursor: pointer;
        text-transform: uppercase;
    }


 `;

