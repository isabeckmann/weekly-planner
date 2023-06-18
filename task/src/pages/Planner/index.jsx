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
      </div>

      <div className="AddDelete">
        <button className="add">+ Add to calendar</button>
        <button className="delete">— Delete All</button>
      </div>

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
