import Usuario from "./components/Usuario";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>Inicio</Route>
      <Route path="/about" element={<About></About>}>Sobre ZenSoftx</Route>
    </Routes>
  );
}
