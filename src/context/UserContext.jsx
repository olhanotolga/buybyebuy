import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const users = {
    admin: 'iamtheboss',
    olhanotolga: 'bestpassword',
  };

  const [userData, setUserData] = useState({ username: '', password: '' });
  const resetUser = () => {
    setUserData({ username: '', password: '' });
  };

  const userContextValue = {
    users,
    userData,
    setUserData,
    resetUser,
  };
  return <UserContext value={userContextValue}>{children}</UserContext>;
}

export default UserProvider;
