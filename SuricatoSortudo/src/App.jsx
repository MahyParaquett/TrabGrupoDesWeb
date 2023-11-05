import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar1 from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/footer";
import Sobre from "./pages/sobre/Sobre";
import Produtos from "./pages/produtos/Produtos";
import Aventura from "./pages/aventura/Aventura";
import Estrategia from "./pages/estrategia/Estrategia";
import Familia from "./pages/familia/Familia";
import Carrinho from "./pages/carrinho/Carrinho";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/estrategia" element={<Estrategia />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
