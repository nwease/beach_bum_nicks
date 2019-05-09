import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Gugi|Stylish');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 100%;
    color: #222;
    background: #fafafa;
    font-family: 'Gugi', cursive, 'Stylish', sans-serif;
    }
`;

export default Globals;


