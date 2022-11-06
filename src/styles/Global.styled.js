import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin-bottom: 0;
        margin-top: 0;
    }
    ul,
    ol {
        margin-bottom: 0;
        margin-top: 0;
        padding-left: 0;
        list-style: none;
    }
    img {
        display: block;
        height: auto;
        max-width: 100%;
    }
    a {
        text-decoration: none;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        color: black;        
        /* font-weight: 400; */
    }
`

export default GlobalStyle