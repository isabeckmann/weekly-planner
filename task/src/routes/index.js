import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default RoutesApp;
