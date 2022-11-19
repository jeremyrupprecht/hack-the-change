import { css } from 'styled-components';

import { device } from 'src/styles/theme';

const fontFamily = css`
  font-family: Poppins, sans-serif;
`;

const h6 = css`
  ${fontFamily}
`;

const h5 = css`
  ${fontFamily}
`;

const h4 = css`
  ${fontFamily}

  margin-bottom: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

const h3 = css`
  ${fontFamily}

  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 500;
`;

const h2 = css`
  ${fontFamily}

  font-size: 36px;
  line-height: 44px;
`;

const h1 = css`
  ${fontFamily}
  ${device.tablet} {
    font-size: 30px;
  }
`;

export {
  h1, h2, h3, h4, h5, h6,
};
