import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Planner from "../pages/Planner";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/planner" element={<Planner />} />
    </Routes>
  );
}

export default RoutesApp;
