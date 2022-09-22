import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
    --color-background: #FFFFFF;
    --color-branco: #FFFFFF;
    --color-transparent: #ffffffd4;
    --color-escuro:#571212;
    --color-medio: #831515;
    --color-gradiente: linear-gradient(90deg, rgba(131,21,21,1) 0%, rgba(255,63,63,1) 53%, rgba(106,0,0,1) 100%);

  
    font-size: 60%;   
  }

@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

    

  body,html{
    width: 100vw;
    height: 100vh;
  }

  
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
    
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #eaeaea;
    margin: 1rem;   
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b6b6b6;
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #a9a7a7;
  }

  a:hover{
    filter: brightness(1.5);
  }


  
`;


