import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    
  }

  .web-option a {
    color: ${({ theme }) => theme.text};
  }
  .mobile-option a{
    color:  ${({ theme }) => theme.text};
    background-color:  ${({ theme }) => theme.body};

  }

  .mobile-options{
    background-color: ${({ theme }) => theme.body}   !important  ;
    

  }
  .mobile{
    background-color: ${({ theme }) => theme.body}   !important  ;
    

  }
  
  .info-name span {
    ${"" /* color: ${({ theme }) => theme.text}; */}
  }
`;
export const lightTheme = {
  body: "#ffffff",
  text: "#282c34",
};
export const darkTheme = {
  body: "#282c34",
  text: "#f1f1f1",
};
