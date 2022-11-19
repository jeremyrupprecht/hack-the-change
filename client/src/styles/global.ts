import { createGlobalStyle } from 'styled-components';

import {
  h1, h2, h3, h4, h5, h6
} from './global/index';
import { theme } from 'src/styles/theme';

export default createGlobalStyle`
  * {
    margin: 0;
    font-weight: 400;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }

  body {
    top: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: ${theme.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* For notch on mobile devices */
    margin-top: var(--ion-safe-area-top);

    /* stylelint-disable-next-line selector-class-pattern */
    &.ReactModal__Body--open,
    &.swal2-shown {
      background-color: ${theme.dim_content};

      #root {
        position: relative;
        width: 100%;
        height: 100%;
      }

      #root::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;

        /* TODO: this property doesn't work on firefox, find alternative */
        backdrop-filter: blur(3px);
      }
    }

    /* height: auto causes issues with ionic */
    &.swal2-height-auto {
      height: 100% !important;
    }
  }


  .react-json-view {
    max-width: 100vw;
    overflow: scroll;
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
`;
