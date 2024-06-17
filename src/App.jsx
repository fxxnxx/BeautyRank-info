import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import ServicePage from "./pages/ServicePage";
import TopPage from "./pages/TopPage";

import "./styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/top100" element={<TopPage />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;
