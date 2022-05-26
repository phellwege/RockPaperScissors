import React, {useState} from 'react';
// import { BrowserRouter } from 'react-router-dom/browserRouter';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import './App.css';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;