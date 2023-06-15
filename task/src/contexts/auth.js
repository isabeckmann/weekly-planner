import { useState, createContext, useEffect } from "react";

export const authContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function logIn(email, password) {
    alert("logado");
  }

  return (
    <authContext.Provider
      value={{
        signed: !!user, //usuário não logado
        user,
        logIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
