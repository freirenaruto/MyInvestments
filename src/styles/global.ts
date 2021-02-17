import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html, #root{
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Maven Pro', sans-serif;
  }

  body, input, button{
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  a, a:active, a:hover{
    text-decoration: none;
    color: black;
  }

`;
