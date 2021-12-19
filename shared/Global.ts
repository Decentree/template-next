import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    *,
    *:before,
    *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    *:focus {
    outline: 0;
    }

    body {
    font-family: "Montserrat", "DejaVu Sans", Verdana, sans-serif;
    background: #191919;
    }
`;

export default GlobalStyle;
