import { createContext, useContext, useReducer } from 'react';
import { userReducer, ACTION_TYPES } from '../reducers/userReducer';

export const initialUserState = {
  users: {
    admin: 'iamtheboss',
    olhanotolga: 'bestpassword',
  },
  userData: {
    username: '',
    password: '',
  },
};

const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  const resetUser = () => {
    dispatch({
      type: ACTION_TYPES.LOGGED_OUT
    })
  };

  const userContextValue = {
    users: userState.users,
    userData: userState.userData,
    dispatch,
    resetUser,
  };
  return <UserContext value={userContextValue}>{children}</UserContext>;
}

export default UserProvider;
