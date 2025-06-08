import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import Estructura from './componentes/Estructura/Estructura';
import React from 'react';
import './css/App.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Estructura>
        <AppRouter/>
      </Estructura>
    </BrowserRouter>
  );
};
export default App;