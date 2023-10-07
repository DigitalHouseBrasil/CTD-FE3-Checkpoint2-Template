import { createContext, useState } from "react";

// import baseUrl from "../Components/Utils/api";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [username, setUserName] = useState(null);

  const validaUsuarioLogado = async (username, token) => {
    const tokenValidated = token;
    setToken(tokenValidated);
    const userValidated = username;
    setUserName(userValidated);
    return;
  };

  return (
    <AuthContext.Provider value={{ username, token, validaUsuarioLogado }}>
      {children}
    </AuthContext.Provider>
  );
}
