import Home from "../components/Home";
import Blue from "../components/Blue";
import Red from "../components/Red";
import { Routes, Route } from "react-router-dom";

const MainSection = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blue" element={<Blue />} />
      <Route path="/red" element={<Red />} />
    </Routes>
  );
};

export default MainSection;
