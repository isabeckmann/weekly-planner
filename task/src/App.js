import { db, auth } from "./services/firebaseConnection"; //banco de dados
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
