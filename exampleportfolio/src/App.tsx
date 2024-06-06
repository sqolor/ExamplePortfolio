import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<NavBar />} />
          <Route path="/about" element={<NavBar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
