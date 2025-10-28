import { createContext, useContext, useEffect, useReducer } from 'react';
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

function getInitialUserState() {
  try {
    const userStateLS = localStorage.getItem('userState');
    return userStateLS
      ? {
          users: initialUserState.users,
          userData: JSON.parse(userStateLS),
        }
      : initialUserState;
  } catch (err) {
    console.error(err);
    return initialUserState;
  }
}

const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [userState, dispatch] = useReducer(
    userReducer,
    initialUserState,
    getInitialUserState
  );

  useEffect(() => {
    const { username, password } = userState.userData;
    if (username && username !== '' && password && password !== '') {
      localStorage.setItem(
        'userState',
        JSON.stringify({
          username,
          password,
        })
      );
    }
  }, [userState.userData]);

  const resetUser = () => {
    dispatch({
      type: ACTION_TYPES.LOGGED_OUT,
    });
    localStorage.removeItem('userState');
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
