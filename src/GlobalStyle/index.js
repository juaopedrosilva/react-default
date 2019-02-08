import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
    /* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,300,300i,400i,500,500i,700'); */
    *{
        margin: 0;
        padding: 0;
        font-size: 100%;
        box-sizing: border-box; 
    }
    body {
        background-color: #e9e9e9;
        color: #777; 
        font-family: 'Source Sans Pro', sans-serif;
        /* font-family: 'Roboto Mono', monospace; */

    } 
    #printable{ display: none;}
    a { text-decoration: none; } 
`
export default GlobalStyle