import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState([]);
  return (
    <AuthContext.Provider
      value={{
        authInfo,
        setAuthInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
