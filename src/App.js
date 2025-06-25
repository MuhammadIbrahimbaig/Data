import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Registration';
import Jobapplication from './components/Jobform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/Jobapp' element={<Jobapplication />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
