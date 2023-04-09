import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const response = localStorage.getItem("ctd_username");
    setName(response);
  }, []);

  function saveName(username) {
    setName(username);
    localStorage.setItem("ctd_username", username);
  }

  function saveToken(token) {
    localStorage.setItem("ctd_token", token);
  }

  function removeUserStorage() {
    localStorage.removeItem("ctd_username");
    localStorage.removeItem("ctd_token");
  }

  return (
    <AuthContext.Provider
      value={{ name, saveName, removeUserStorage, saveToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;