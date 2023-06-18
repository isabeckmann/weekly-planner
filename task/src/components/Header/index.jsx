import "./header.css";
import logo from "../../assets/logoWhite.svg";
import logout from "../../assets/Vector.svg";
import "../../assets/fonts.css";
import { authContext } from "../../contexts/auth";
import { useContext } from "react";

export default function Header() {
  const { logOut } = useContext(authContext);

  async function handleLogOut() {
    await logOut();
  }

  return (
    <div className="header">
      <div className="weeklyText">
        <div className="textContainer">
          <h2>Weekly Planner</h2>
          <p>Use this planner to organize your daily issues.</p>
        </div>
      </div>

      <a href="https://compass.uol/en/home/">
        <img className="logo" src={logo} />
      </a>

      <div className="logout" onClick={handleLogOut}>
        <img src={logout} />
        <p>Logout</p>
      </div>
    </div>
  );
}
