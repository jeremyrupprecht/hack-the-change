import { useContext } from 'react';

import { GlobalUserContext, IUserContext } from '../contexts/user/UserContext';

export default function useGlobalUserContext(): IUserContext {
  return useContext(GlobalUserContext);
}
