// Pop any colors we will use repeatedly into variables
export const theme = {
  white: '#FFFFFF',
  brand: '#540BAC',
  brand_200: '#F2EAFA',
  brand_300: '#E3DAEF',
  brand_700: '#8038D6',
  red_100: '#FFE9EA',
  red_200: '#FB7A75',
  red_400: '#EE4852',
  red_500: '#DA3443',
  red_700: '#CF273B',
  gray_100: '#F7F7F8',
  dim_content: 'rgb(8 8 9 / 50%)',
};

export const constants = {
  navbar: {
    height: '64px',
  },
  // TODO: This is mobile first by default but we can swap this to default browser
  main: {
    maxWidth: '800px',
    minWidth: '320px',
  },
  fixedButton: {
    height: '58px',
  },
  safeArea: {
    bottom: 'max(var(--ion-safe-area-bottom, 0), var(--ion-statusbar-padding, 0))',
  },
  borderRadius: '16px',
};

export const device = {
  tablet: '@media only screen and (max-width: 1120px)',
  mobile: '@media only screen and (max-width: 600px)',
  smallMobile: '@media only screen and (max-width: 360px)',
};
