import Navigation from "./components/Navigation/Navigation"
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Contacto from "../src/pages/Contacto/Contacto";
import Elaboracion from "../src/pages/Elaboracion/Elaboracion";
import Historia from "../src/pages/Historia/Historia";
import Sabores from "../src/pages/Sabores/Sabores";
import Sucursales from "../src/pages/Sucursales/Sucursales";
import Footer from "./components/Footer/Footer";
import { useLayoutEffect } from "react";
import { useState } from "react";


const Wrapper = ({ children }) => {
  
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
function App() {
  const [activeNav, setActiveNav] = useState(window.location.pathname);

  return (
    <Wrapper>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/elaboracion" element={<Elaboracion />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/sabores" element={<Sabores />} />
        <Route path="/sucursales" element={<Sucursales />} />
      </Routes>
      <Footer setActiveNav={setActiveNav} />
    </Wrapper>
  );
}

export default App
