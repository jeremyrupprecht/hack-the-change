import { createContext, Dispatch, SetStateAction } from 'react'
import { IUser } from './user/UserContext'
export const UserContext = createContext({
  user: undefined as IUser | undefined,
  setUser: undefined as Dispatch<SetStateAction<IUser | undefined>> | undefined,
})
