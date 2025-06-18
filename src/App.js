import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formdata from './resourcces/Form';
import Arraywork from './resourcces/Arraywork';
import Planetsset from './resourcces/Planets';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Formdata/> */}
      {/* <Arraywork/> */}
      <Planetsset />
    </div>
  );
}

export default App;
