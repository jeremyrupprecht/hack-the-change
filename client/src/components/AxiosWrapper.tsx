import { ResponseValues } from 'axios-hooks';
import { HTMLAttributes } from 'react';

import ReactJson from 'react-json-view';
import styled from 'styled-components';

import { getAxiosErrorStatus } from 'src/api/configureAxios';

interface IAxiosWrapper extends HTMLAttributes<HTMLDivElement> {
  requests: ResponseValues<unknown, unknown, Error>[];
  keepChildrenMounted?: boolean;
}

export function AxiosWrapper({ requests, children, keepChildrenMounted = false }: IAxiosWrapper): JSX.Element {
  const error = requests.find((c) => c.error)?.error;
  if (error) {
    return (
      <ErrorContainer>
        <h4>{error.message}</h4>
        <p className="micro">{getAxiosErrorStatus(error)}</p>
        <ReactJson
          src={{ ...error, msg: error.message }}
          collapsed
          name="details"
          displayObjectSize={false}
          displayDataTypes={false}
        />
      </ErrorContainer>
    );
  }

  const loading = requests.some((c) => c.loading);

  if (!keepChildrenMounted) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingContainer className="loading-container" style={{ display: loading ? 'none' : 'block' }}>
        {children}
      </LoadingContainer>
    </>
  );
}

const LoadingContainer = styled.div`
  height: 100%;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-family: monospace;
  }

  .react-json-view {
    margin-top: 20px;
    opacity: 0.5;
  }
`;

// Themes: Physical health, education, inequality
