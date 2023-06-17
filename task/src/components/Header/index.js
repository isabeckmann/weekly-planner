import "./header.css";
import logo from "../../assets/logoWhite.svg";
import logout from "../../assets/Vector.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="weeklyText">
        <div className="textContainer">
          <h2>Weekly Planner</h2>
          <p>Use this planner to organize your daily issues.</p>
        </div>
      </div>

      <div>
        <img className="logo" src={logo} />
      </div>

      <div className="logout">
        <img src={logout} />
        <p>Logout</p>
      </div>
    </div>
  );
}
