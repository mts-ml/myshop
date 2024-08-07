import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      /* Esse valor é por causa da base 16px,
      só dividir o rem por 10. */
      font-size: 62.5%;
   }

   body {
      background-color: #F0F0FA;
   }

   body, button, select, textarea, input {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1.6rem;
   }

   button {
      cursor: pointer;
      transition: ease-in-out .3s;

      &:hover {
         filter: brightness(1.1);
         transition: ease-in-out .3s;
      }
   }
`
