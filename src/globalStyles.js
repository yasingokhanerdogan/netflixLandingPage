import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    color: #333333;
    background-color: #000000;
    font-size: 16px;
    font-weight: normal;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 100%;
  }
`;