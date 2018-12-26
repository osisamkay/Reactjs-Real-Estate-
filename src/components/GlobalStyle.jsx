import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding:0
  }
  body{
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  li{
    
    list-style: none;
  }
`;

export default GlobalStyle;
