import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar1 from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/footer";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
