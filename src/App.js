import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import Formdata from './resourcces/Form';
import Arraywork from './resourcces/Arraywork';


function App() {
  return (
    <div className="App">
      {/* <Formdata/> */}
      <Arraywork/>
    </div>
  );
}

export default App;
