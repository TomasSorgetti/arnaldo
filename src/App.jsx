import Navigation from "./components/Navigation/Navigation"
import { Route, Routes } from "react-router-dom"
import Home from "../src/pages/Home/Home"
import Contacto from "../src/pages/Contacto/Contacto";
import Elaboracion from "../src/pages/Elaboracion/Elaboracion";
import Historia from "../src/pages/Historia/Historia";
import Sabores from "../src/pages/Sabores/Sabores";
import Sucursales from "../src/pages/Sucursales/Sucursales";
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/elaboracion" element={<Elaboracion />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/sabores" element={<Sabores />} />
        <Route path="/sucursales" element={<Sucursales />} />
      </Routes>
    </>
  );
}

export default App
