import "./planner.css";
import "../../assets/fonts.css";
import Header from "../../components/Header";
import Symbol from "../../assets/Group.png";

export default function Planner() {
  return (
    <>
      <Header />

      <div className="selecionar">
        <textarea className="textarea">Task or issue</textarea>
        <select className="dias">
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>
        <select className="horario">
          <option>00:00</option>
          <option>00:30</option>
          <option>01:00</option>
          <option>01:30</option>
          <option>02:00</option>
          <option>02:30</option>
          <option>03:00</option>
          <option>03:30</option>
        </select>
      </div>

      <div className="AddDelete">
        <button className="add">+ Add to calendar</button>
        <button className="delete">— Delete All</button>
      </div>

      <div>
        <img className="imgUol" src={Symbol} />
      </div>
    </>
  );
}
