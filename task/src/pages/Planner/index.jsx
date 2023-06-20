import "./planner.css";
import "../../assets/fonts.css";
import Header from "../../components/Header";
import Symbol from "../../assets/Group.png";
import { useState, useEffect } from "react";
import { auth, db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

export default function Planner() {
  const [textoInput, setTextoInput] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [date, setDate] = useState("monday");
  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(true);

  function handleDias(dia) {
    setDate(dia);
    console.log("aba clicada" + dia);
  }

  const user = localStorage.getItem("@weeklyData");

  const userInfo = JSON.parse(user);

  async function handleSubmit(e) {
    e.preventDefault();

    if (textoInput === "") {
      return;
    }
    //console.log("aaaaaaa" + diaSemana);
    await addDoc(collection(db, "tarefas"), {
      tarefa: textoInput,
      dia: diaSemana,
      hora: selectedHour,
      usuario: userInfo.email,
    });

    setTextoInput("");
    setDiaSemana("");
    setSelectedHour("");
    toast.success("Tarefa registrada!");
  }

  const myCollection = collection(db, "tarefas");

  useEffect(() => {
    //console.log(date);

    setLoading(true);

    const q = query(
      myCollection,
      orderBy("hora"),
      where("usuario", "==", `${userInfo.email}`),
      where("dia", "==", `${date}`)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({
          tarefa: doc.data().tarefa,
          dia: doc.data().dia,
          hora: doc.data().hora,
          usuario: doc.data().usuario,
          id: doc.id,
        });
      });

      setTasks(list);

      setLoading(false);
      //console.log("effect", tasks);
    });
  }, [date]);

  //mudar de cor
  function handleColor(day) {
    let style = {};

    switch (day) {
      case "sunday":
        style.backgroundColor = "rgba(255, 0, 36, 0.5)";
        break;
      case "monday":
        style.backgroundColor = "#ff0024";
        break;
      case "tuesday":
        style.backgroundColor = "#ff8000";
        break;
      case "wednesday":
        style.backgroundColor = "#ffce00";
        break;
      case "thursday":
        style.backgroundColor = "rgba(255, 0, 36, 0.7)";
        break;
      case "friday":
        style.backgroundColor = "rgba(255, 128, 0, 0.7)";
        break;
      case "saturday":
        style.backgroundColor = "rgba(255, 206, 0, 0.7)";
        break;
      default:
        style.backgroundColor = "gray";
    }
    return style;
  }

  //deletar tarefa
  async function handleDeleteTask(id) {
    const docRef = doc(db, "tarefas", id);
    try {
      await deleteDoc(docRef);
      toast.success("Tarefa deletada");
    } catch (error) {
      toast.warn("Erro ao deletar tarefa");
    }
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
          <option value="">Choose a day</option>
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>

        <select
          className="horario"
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        >
          <option>Set time</option>
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
        <button
          className="monday"
          onClick={() => {
            handleDias("monday");
            handleColor(date);
          }}
        >
          Monday
        </button>
        <button
          className="tuesday"
          onClick={() => {
            handleDias("tuesday");
            handleColor(date);
          }}
        >
          Tuesday
        </button>
        <button
          className="wednesday"
          onClick={() => {
            handleDias("wednesday");
            handleColor(date);
          }}
        >
          Wednesday
        </button>
        <button
          className="thursday"
          onClick={() => {
            handleDias("thursday");
            handleColor(date);
          }}
        >
          Thursday
        </button>
        <button
          className="friday"
          onClick={() => {
            handleDias("friday");
            handleColor(date);
          }}
        >
          Friday
        </button>
        <button
          className="saturday"
          onClick={() => {
            handleDias("saturday");
            handleColor(date);
          }}
        >
          Saturday
        </button>
        <button
          className="sunday"
          onClick={() => {
            handleDias("sunday");
            handleColor(date);
          }}
        >
          Sunday
        </button>
      </div>

      <div className="timeBox" onClick={() => console.log(tasks)}>
        Time
      </div>

      <div className="containerTarefa">
        {loading && <span>Carregando...</span>}
        {!loading && (
          <div>
            {tasks.map((atual) => {
              const estilo = handleColor(date);

              return (
                <div className="caixinha" key={atual.id}>
                  <div className="tarefaTime" style={estilo}>
                    {atual.hora}
                  </div>

                  <div className="tarefaContent">
                    <span>{atual.tarefa}</span>
                    <div className="borda" style={estilo}></div>
                    <button
                      className="deleteTarefa"
                      onClick={() => handleDeleteTask(atual.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <img className="imgUol" src={Symbol} />
      </div>
    </>
  );
}
