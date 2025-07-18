import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Create } from './Components/Create';
import Read from './Components/Read';
 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create/>} />
      <Route path='/read' element={<Read/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
