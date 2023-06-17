import "./planner.css";
import "../../assets/fonts.css";
import Header from "../../components/Header";
import Symbol from "../../assets/Group.png";

export default function Planner() {
  return (
    <>
      <Header />
      <div>
        <img className="imgUol" src={Symbol} />
      </div>
    </>
  );
}
