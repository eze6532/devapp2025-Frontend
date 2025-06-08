import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [abriendo, setAbriendo] = useState(false);
  const [cerrado, setCerrado] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAbriendo(false);
    setCerrado(true);
  }, []);

  const handleClick = (ruta: string) => {
    setAbriendo(true);
    setCerrado(false);

    setTimeout(() => {
      navigate(ruta);
    }, 2000); 
  };

  return (
    <div
      className={`porton-container ${abriendo ? "abierto" : ""} ${
        cerrado ? "cerrado" : ""
      }`}
    >
      <div className="porton-puerta"></div>
      <div className="botones">
        <h1>Inicio</h1>
        <button onClick={() => handleClick("/personas/lista")}>Personas</button>
        <button onClick={() => handleClick("/autos/lista")}>Autos</button>
      </div>
    </div>
  );
};

export default Home;
