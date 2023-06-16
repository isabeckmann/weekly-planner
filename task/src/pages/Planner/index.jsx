import { authContext } from "../../contexts/auth";
import { useContext } from "react";

export default function Planner() {
  const { logOut } = useContext(authContext);
  return (
    <div>
      <h1>Planner</h1>
    </div>
  );
}
