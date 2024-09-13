import React from "react";
import {NavBar} from './components/NavBar';
import Preloader from "../src/components/Pre";
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Projects from './components/Projects/Project';
import ScrollToTop from "./components/ScrollToTop";
import {
  Route,
  Routes, Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [load, updatedLoad] = useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      updatedLoad(false);
    },1200);
    
    return () => clearTimeout(timer);
  },[]);

  return (
    <Router>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}></div>
      <div className="App">
      <NavBar/>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<div><Home /></div>}>
        <Route path="/about" element={<About />} />
        <Route exact path="/project" element={<div><Projects /></div>} />
        <Route exact path="/resume" element={<div><Resume /></div>} />
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
