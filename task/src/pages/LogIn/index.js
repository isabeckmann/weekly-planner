import "./login.css";
import { useState } from "react";
import background from "../../assets/background.png";
import logo from "../../assets/logo.png";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="content">
        <div className="login">
          <form>
            <input
              className="write"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="write"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input className="button" type="submit" value="Log in" />
          </form>
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
