import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Skill from "./routes/Skill";
import Contact from "./routes/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skill" element={<Skill/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;