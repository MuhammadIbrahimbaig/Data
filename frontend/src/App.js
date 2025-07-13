import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/form' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
