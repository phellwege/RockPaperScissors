import React, {useState} from 'react';
// import { BrowserRouter } from 'react-router-dom/browserRouter';
import { Router } from '@reach/router';
import Home from './views/Home';
import './App.css';


function App() {

  return (
      <div className="App">
        <React.Fragment>
          <Home/>
      </React.Fragment>
      </div>
  );
}

export default App;