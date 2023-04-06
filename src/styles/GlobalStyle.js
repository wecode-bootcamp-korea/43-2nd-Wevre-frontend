import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        color: rgba(0,0,0,0.8);
    }
    body {
        background-color: rgb(240, 245, 247);
        
    }
    body{
        -ms-overflow-style: none;
        }
        
       ::-webkit-scrollbar {
         display: none;
       }
    
`;

export default GlobalStyle;
