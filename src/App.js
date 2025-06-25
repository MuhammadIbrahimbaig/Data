import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formdata from './resourcces/Form';
import Arraywork from './resourcces/Arraywork';
import Login from './resourcces/Loginform';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Form" element={<Formdata />} />
          <Route path="/Array" element={<Arraywork />} />
          <Route path="/login" element={<Login/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
