import { useState, createContext, useEffect } from "react";
import { db, auth } from "../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../components/Modal";

export const authContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //para logar usuário já criado
  async function logIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        let data = {
          uid: uid,
          nome: docSnap.data().nome,
          email: value.user.email,
        };

        setUser(data);
        storageUser(data);
        navigate("/planner");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //ir para o dashboard apenas se estiver logado
  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@weeklyData");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        navigate("/planner");
      }
    }

    loadUser();
  }, []);

  // para cadastrar um novo usuário
  async function signUp(
    firstName,
    lastName,
    birthdate,
    country,
    city,
    email,
    password,
    confirmPassword
  ) {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstName,
      lastName,
      birthdate,
      country,
      city,
      confirmPassword
    ).then(async (value) => {
      let uid = value.user.uid;

      await setDoc(doc(db, "users", uid), {
        nome: firstName,
        sobrenome: lastName,
        aniversario: birthdate,
        pais: country,
        cidade: city,
        email: email,
        senha: password,
        confirmarSenha: confirmPassword,
      })
        .then(() => {
          let data = {
            uid: uid,
            nome: firstName,
            sobrenome: lastName,
            aniversario: value.user.birthdate,
            pais: value.user.country,
            cidade: value.user.city,
            email: value.user.email,
          };

          setUser(data);
          storageUser(data);
          toast.success("Cadastrado com sucesso!");
          navigate("/planner");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  function storageUser(data) {
    localStorage.setItem("@weeklyData", JSON.stringify(data));
  }

  //par sair da conta
  async function logOut() {
    await signOut(auth);
    localStorage.removeItem("@weeklyData");
    setUser(null);
  }

  return (
    <authContext.Provider
      value={{
        signed: !!user, //usuário não logado
        user,
        logIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
