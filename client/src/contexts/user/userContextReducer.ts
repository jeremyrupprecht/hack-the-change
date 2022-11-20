import { IUser, IUserState } from './UserContext';


export type UserAction =
  | { type: 'setUser', user: IUser }
  | { type: 'setToken', token: string }

function userContextReducer(state: IUserState, action: UserAction): IUserState {
  switch (action.type) {
    case 'setUser': {
      return {
        ...state,
        user: action.user,
      };
    }
    case 'setToken': {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
}

export default userContextReducer;
