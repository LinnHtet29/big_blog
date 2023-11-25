import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);

  const user = localStorage.getItem("loginUser") || {};
  useEffect(() => {
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, [loginUser]);

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
