import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Registration';
import Jobapplication from './components/Jobform';
import Read_data from './components/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/Jobapp' element={<Jobapplication />} />
          <Route path='/showdata' element={<Read_data />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
