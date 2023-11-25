import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loginUser") || null;
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
