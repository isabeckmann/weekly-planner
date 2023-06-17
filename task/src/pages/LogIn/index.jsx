import "./login.css";
import "../../assets/fonts.css";
import { useState, useContext } from "react";
import background from "../../assets/background.png";
import logo from "../../assets/logo.png";
import user from "../../assets/user.svg";
import passwordImg from "../../assets/password.svg";
import { authContext } from "../../contexts/auth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useContext(authContext);
  const [error, setError] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      logIn(email, password);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="content">
        <div className="login">
          <h1 className="title">Welcome,</h1>
          <p className="text">
            To continue browsing safely, log in to the network.
          </p>
          <h3 className="login-text">Login</h3>

          <form onSubmit={handleLogin} className="formLogin">
            <div>
              <input
                className={error ? "write erro" : "write"}
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className={error ? "write erro" : "write"}
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input className="button" type="submit" value="Log in" />
          </form>

          <div className="imgContainer">
            <img src={user} />
            <img src={passwordImg} />
          </div>
        </div>

        <div className="container">
          <div
            className="backgroundImage"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div>
              <img className="logo" src={logo} alt="logo Compass Uol" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
