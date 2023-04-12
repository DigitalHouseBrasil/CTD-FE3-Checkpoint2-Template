import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [stsLogin, setStsLogin] = useState("Login");
  
  function saveEmail(email) {
    localStorage.setItem("ctd_email", email);
  }

  function saveToken(token) {
    localStorage.setItem("ctd_token", token);
  }

  function removeUserStorage() {
    localStorage.removeItem("ctd_email");
    localStorage.removeItem("ctd_token");
  }

  function setEstadoLogin(login){
    setStsLogin(login);
  }

  return (
    <AuthContext.Provider
      value={{ saveEmail, removeUserStorage, saveToken, stsLogin, setEstadoLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;