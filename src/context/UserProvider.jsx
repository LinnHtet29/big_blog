import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
