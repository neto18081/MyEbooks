import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
    --amarelo: #facb04;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Vollkorn", serif !important;
    color: #1e1810;
  }
  p, span, a, button, b, strong, li {
    font-family: "Raleway", serif !important;
    color: #62615c;

  }

  a {
    text-decoration: none;
  }
  a:hover {
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

`;
