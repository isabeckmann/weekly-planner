import { authContext } from "../../contexts/auth";
import { useContext } from "react";
import "./planner.css";
import Header from "../../components/Header";
import Symbol from "../../assets/Group.png";

export default function Planner() {
  const { logOut } = useContext(authContext);
  return (
    <>
      <Header />
      <div>
        <img className="imgUol" src={Symbol} />
      </div>
    </>
  );
}
