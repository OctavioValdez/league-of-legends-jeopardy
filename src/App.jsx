import { Routes, Route } from "react-router-dom";
import Pregunta from "./components/Preguntas/Pregunta";
import Inicio from "./pages/Inicio";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/pregunta" element={<Pregunta />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
