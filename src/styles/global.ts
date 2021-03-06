import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --red: #E62E4D;
    --green: #33CC95;
    --yellow: #FCBE11;

    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;

    --input-background: #E7E9EE;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 10px */
    
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background:  var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    /* Intervalo de tamanho = menor, padrão, maior */
    font-size: clamp(14px, 1.6rem, 2vw);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    display: flex;
    align-items: center;
    justify-content: center
  }

  .react-modal-content {
    width: 100%;
    max-width: 50rem;

    background: var(--background);
    padding: 3rem;
    position: relative;

    border-radius: 0.25rem
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }

`;
