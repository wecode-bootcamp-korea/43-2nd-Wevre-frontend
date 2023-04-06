import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        color: rgba(0,0,0,0.8);
    }
    body {
        background-color: rgb(245, 245, 247);
        
    }
    
`;

export default GlobalStyle;
