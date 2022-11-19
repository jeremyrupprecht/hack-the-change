// Pop any colors we will use repeatedly into variables
export const theme = {
  white: '#FFFFFF',
  bluewood: '#2A3B45',
  background: '#EEEEEE',
  gray: '#ACACAC',
  mediumGray: '#727377',
  darkGray: '#3B3C3E',
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
