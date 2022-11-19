import { ResponseValues } from 'axios-hooks';
import { keys, omitBy, values } from 'lodash';
import {
  ReactNode, createContext, useCallback, useEffect, useMemo, useState,
} from 'react';

import { AxiosWrapper } from 'src/components/AxiosWrapper';

// Ideas for improvements:
// - upgrade to React 18 and try to use useId() hook to generate keys instead of manually inputting them
// - expose a loading property through context API

export type IRequest = ResponseValues<unknown, unknown, Error>;
type IAxiosContext = (key: string, ...requests: IRequest[]) => void;

export const AxiosContext = createContext<IAxiosContext>(() => {

});

function isLoaded(request: IRequest): boolean {
  return !request.loading;
}

function isLoading(request: IRequest): boolean {
  return !isLoaded(request);
}

export default function AxiosProvider({ children }: { children: ReactNode }): JSX.Element {
  const [requestMap, setRequestMap] = useState<Record<string, IRequest[]>>({});

  const loadRequests = useCallback((key: string, ...newRequests: IRequest[]) => {
    const keyExists = keys(requestMap).includes(key);
    if (keyExists && newRequests.some(isLoading)) return;
    if (keyExists && requestMap[key].every(isLoaded)) return;
    if (!keyExists && !newRequests.some(isLoading)) return; // avoid adding manual requests that weren't trigerred yet

    setRequestMap({ ...requestMap, [key]: newRequests });
  }, [requestMap]);

  useEffect(() => {
    const newRequestMap = omitBy(requestMap, (requests) => requests.every(isLoaded));
    if (keys(newRequestMap).length === keys(requestMap).length) return;
    setRequestMap(newRequestMap);
  }, [requestMap]);

  const requests = useMemo(() => values(requestMap).reduce((acc, value) => [...acc, ...value], []), [requestMap]);

  return (
    <AxiosContext.Provider value={loadRequests}>
      <AxiosWrapper requests={requests} keepChildrenMounted>
        {children}
      </AxiosWrapper>
    </AxiosContext.Provider>
  );
}
