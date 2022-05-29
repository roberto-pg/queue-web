import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

  body {
    margin: 0;
    padding: 0;
    /* font-family: 'Poppins', sans-serif; */
  }
  html, body {
    min-height: 100vh;
  }
`

export default GlobalStyle
