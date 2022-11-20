import { createContext } from 'react';

import { UserAction } from './userContextReducer';

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface IUserState {
  user?: IUser;
  token?: string;
}

export interface IUserContext {
  userState: IUserState;
  userStateDispatch: React.Dispatch<UserAction>;

  setUser: (user: IUser, loggingIn?: boolean) => void;
}

export const initialState: IUserContext = {
  userState: {
    user: undefined,
    token: undefined,
  },
  userStateDispatch: () => {
  },
  setUser(user: IUser, loggingIn?: boolean): void {
    throw new Error('Function not implemented.');
  },
};

export const GlobalUserContext = createContext<IUserContext>(initialState);
