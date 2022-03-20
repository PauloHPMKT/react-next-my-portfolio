import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${ normalize }

    *,body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        font-family: ${props => props.theme.fonts.main};
        background-color: ${props => props.theme.colors.background1};
        color: #fff;
    }

    h1,h2,h3,h4 {
        font-size: ${props => props.theme.fonts.main};
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyles