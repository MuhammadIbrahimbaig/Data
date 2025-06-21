import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formdata from './resourcces/Form';
import Arraywork from './resourcces/Arraywork';
import Planetsset from './resourcces/Planets';
import { useState } from 'react';
import Jobform from './resourcces/Jobform';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/form' element={<Formdata/>}></Route>
      <Route path='/array' element={<Arraywork/>}></Route>
      <Route path='/planet' element={<Planetsset/>}></Route>
      <Route path='/job' element={<Jobform/>}></Route>
      {/* <Formdata/> */}
      {/* <Arraywork/> */}
      {/* <Planetsset /> */}
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
