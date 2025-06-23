import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import "./styles/App.css"
import Contact from "./pages/Contact.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects/>} /> 
      <Route path="/skills" element={<Skills/>} /> 
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>);
}

export default App;
