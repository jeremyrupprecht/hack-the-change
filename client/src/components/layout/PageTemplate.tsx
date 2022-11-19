import { ReactNode } from 'react';

import styled from 'styled-components';
import AxiosProvider from 'src/contexts/AxiosProvider';
import NavBar from './NavBar';
import { constants, device } from 'src/styles/theme';

interface IPageTemplate {
  children: ReactNode;
}

function PageTemplate({ children }: IPageTemplate): JSX.Element {
  return (
    <>
      <NavBar />
      <ContentContainer>
      <AxiosProvider>
            <main className={`platform-web`}>
              <div id="page-content">
                    {children}
              </div>
              <div id="bottom-portal-container" />
            </main>
          </AxiosProvider>
      </ContentContainer>
    </>
  );
}

export default PageTemplate;

const ContentContainer = styled.div`
  height: 100%;

  --overflow: scroll;

  /* Prevents keyboard jumping on iOS */
  --keyboard-offset: 0 !important;

  #page-content {
    padding-bottom: 10px;
    min-width: 300px;
  }

  main {
    padding: 28px 24px 0;
    margin: 0 auto;
    min-height: 100%;
    max-width: ${constants.main.maxWidth};
    min-width: ${constants.main.minWidth};
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;

    &.platform-ios {
      /* iOS specific styling */
    }

    &.platform-android {
      /* Android specific styling */
    }

    &.platform-web {
      /* Web specific styling */
    }

    #bottom-portal-container {
      button {
        margin-top: 0;
        margin-bottom: 10px;
      }

      button:first-of-type {
        margin-top: 20px;
      }
    }
  }

  ${device.tablet} {
    main {
      justify-content: space-between;
    }
  }
`;
