import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Animes from "./pages/Animes";
import Movies from "./pages/Movies";
import Misc from "./pages/Misc";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/store" element={<Store />} />
        <Route path="/" element={null} />
      </Routes>
    </div>
  );
}

export default App;
