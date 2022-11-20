import { createGlobalStyle } from 'styled-components';

import {
  h1, h2, h3, h4, h5, h6
} from './global/index';
import { label } from './global/index';
import { theme } from 'src/styles/theme';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${theme.background};
    font-family: Avenir, sans-serif;
    letter-spacing: 1 px !important;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
  // TODO: Add global styling for forms links and other small things here
  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  h4 {
    ${h4}
  }

  h5 {
    ${h5}
  }

  h6 {
    ${h6}
  }

  label {
    ${label}
  }
`;

export default GlobalStyles;