import "./planner.css";
import "../../assets/fonts.css";
import Header from "../../components/Header";
import Symbol from "../../assets/Group.png";
import { useState } from "react";
import { auth, db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

export default function Planner() {
  const [textoInput, setTextoInput] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [sunday, setSunday] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [user, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (textoInput === "") {
      return;
    }

    await addDoc(collection(db, "tarefas"), {
      tarefa: textoInput,
      dia: diaSemana,
      hora: selectedHour,
    });
  }

  return (
    <>
      <Header />

      <form className="selecionar" onSubmit={handleSubmit}>
        <textarea
          placeholder="Task or issue"
          className="textarea"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
        />

        <select
          className="dias"
          value={diaSemana}
          onChange={(e) => setDiaSemana(e.target.value)}
        >
          <option value={sunday}>Sunday</option>
          <option value={monday}>Monday</option>
          <option value={tuesday}>Tuesday</option>
          <option value={wednesday}>Wednesday</option>
          <option value={thursday}>Thursday</option>
          <option value={friday}>Friday</option>
          <option value={saturday}>Saturday</option>
        </select>

        <select
          className="horario"
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        >
          <option>00h 00m</option>
          <option>00h 30m</option>
          <option>01h 00m</option>
          <option>01h 30m</option>
          <option>02h 00m</option>
          <option>02h 30m</option>
          <option>03h 00m</option>
          <option>03h 30m</option>
          <option>04h 00m</option>
          <option>04h 30m</option>
          <option>05h 00m</option>
          <option>05h 30m</option>
          <option>06h 00m</option>
          <option>06h 30m</option>
          <option>07h 00m</option>
          <option>07h 30m</option>
          <option>08h 00m</option>
          <option>08h 30m</option>
          <option>09h 00m</option>
          <option>09h 30m</option>
          <option>10h 00m</option>
          <option>10h 30m</option>
          <option>11h 00m</option>
          <option>11h 30m</option>
          <option>12h 00m</option>
          <option>12h 30m</option>
          <option>13h 00m</option>
          <option>13h 30m</option>
          <option>14h 00m</option>
          <option>14h 30m</option>
          <option>15h 00m</option>
          <option>15h 30m</option>
          <option>16h 00m</option>
          <option>16h 30m</option>
          <option>17h 00m</option>
          <option>17h 30m</option>
          <option>18h 00m</option>
          <option>18h 30m</option>
          <option>19h 00m</option>
          <option>19h 30m</option>
          <option>20h 00m</option>
          <option>20h 30m</option>
          <option>21h 00m</option>
          <option>21h 30m</option>
          <option>22h 00m</option>
          <option>22h 30m</option>
          <option>23h 00m</option>
          <option>23h 30m</option>
        </select>

        <div className="AddDelete">
          <button className="add" type="submit">
            + Add to calendar
          </button>
          <button className="delete">— Delete All</button>
        </div>
      </form>

      <div className="semana">
        <label className="monday">Monday</label>
        <label className="tuesday">Tuesday</label>
        <label className="wednesday">Wednesday</label>
        <label className="thursday">Thursday</label>
        <label className="friday">Friday</label>
        <label className="saturday">Saturday</label>
        <label className="sunday">Sunday</label>
      </div>

      <div className="timeBox">Time</div>

      <div>
        <img className="imgUol" src={Symbol} />
      </div>
    </>
  );
}
