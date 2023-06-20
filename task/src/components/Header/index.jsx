import "./header.css";
import logoHeader from "../../assets/logoWhite.svg";
import logout from "../../assets/Vector.svg";
import "../../assets/fonts.css";
import { authContext } from "../../contexts/auth";
import { useContext, useState } from "react";

export default function Header() {
  //relogio
  const [h, setH] = useState("");
  const [m, setM] = useState("");

  function relogioFuncional() {
    let atual = new Date();

    let hora = atual.getHours();
    let min = atual.getMinutes();

    let stringHora = new String(hora);
    let stringMin = new String(min);

    if (stringMin.length == 1) min = "0" + min;
    if (stringHora.length == 1) hora = "0" + hora;

    //h.textContent = hora;
    //m.textContent = min;

    setH(hora);
    setM(min);

    setTimeout(relogioFuncional(), 1000);
  }

  //logout
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

      <div id="relogio" onLoad={relogioFuncional} className="relogio">
        <span id="h">{h}</span>
        <span id="m">{m}</span>
      </div>

      <a href="https://compass.uol/en/home/">
        <img className="logoHeader" src={logoHeader} />
      </a>

      <div className="logout" onClick={handleLogOut}>
        <img src={logout} />
        <p>Logout</p>
      </div>
    </div>
  );
}
