import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.accent};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  section {
    padding: 100px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

  img {
  max-width: 100%;
  height: auto;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  a {
    color: ${theme.colors.font};

    &:hover,
    &:active {
      color: ${theme.colors.accent};
    }
  }
`
