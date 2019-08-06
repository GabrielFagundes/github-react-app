
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    font-family: -apple-system, Helvetica, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    margin: 0;  
    background-color: #FCFBFC;
  }
`

export default GlobalStyle