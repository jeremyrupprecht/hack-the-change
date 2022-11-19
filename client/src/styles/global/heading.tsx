import { css } from 'styled-components';

import { device } from 'src/styles/theme';

const fontFamily = css`
  font-family: Avenir, sans-serif;
`;

const h6 = css`
  ${fontFamily}
`;

const h5 = css`
  ${fontFamily}
`;

const h4 = css`
  ${fontFamily}
`;

const h3 = css`
  ${fontFamily}
`;

const h2 = css`
  ${fontFamily}
  font-size: 20px;
`;

const h1 = css`
  ${fontFamily}
  font-size: 34px;
`;

export {
  h1, h2, h3, h4, h5, h6,
};
