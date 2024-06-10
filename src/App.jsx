import React from "react";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Aboutpage } from "./pages/Aboutpage.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import { Partnerspage } from "./pages/Partnerspage.jsx";
import { Services } from "./pages/Services.jsx";
import { Toppage } from "./pages/Toppage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/partners" element={<Partnerspage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/top100" element={<Toppage />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;