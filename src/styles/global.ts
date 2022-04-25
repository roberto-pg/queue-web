import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  html, body {
    min-height: 100vh;
  }
  font {
    color: '#ff5252';
  }
`

export default GlobalStyle
