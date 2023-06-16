import { useState, createContext, useEffect } from "react";

export const authContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //para logar usuário já criado
  function logIn(email, password) {
    alert("logado");
  }

  // para cadastrar um novo usuário
  function signUp(
    firstName,
    lastName,
    birthdate,
    country,
    city,
    email,
    password,
    confirmPassword
  ) {}

  return (
    <authContext.Provider
      value={{
        signed: !!user, //usuário não logado
        user,
        logIn,
        signUp,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
