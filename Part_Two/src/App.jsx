import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store';
import Admin from './Routes/Admin';
import Home from './Routes/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Store>
    </BrowserRouter>
  );
}

export default App;
