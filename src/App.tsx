import { BrowserRouter, Route, Routes } from 'react-router-dom';
import react from 'react';
import './css/App.css';
import Home from './componentes/Home/Home';
import PersonasList from './componentes/Persona/PersonaList';
import AutosList from './componentes/Auto/AutoList';
import Estructura from './componentes/Estructura/Estructura';



const App: react.FC= ()=> {
    return (
      <BrowserRouter>
      <Estructura />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persona/lista" element={<PersonasList />} />
          <Route path="/auto/lista" element={<AutosList />} />
        </Routes>
      </BrowserRouter>
    );
};

export default App;