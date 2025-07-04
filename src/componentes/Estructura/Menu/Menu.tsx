import { Link } from "react-router-dom";
import './Menu.css'
const Menu = ({ abierto, onClose }: { abierto: boolean, onClose: () => void }) => {
  return (
    <nav className={`menu-lateral ${abierto ? "abierto" : ""}`}>
      <button className="cerrar-menu" onClick={onClose}>
        ✕
      </button>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/personas/lista">Personas</Link></li>
        <li><Link to="/autos/lista">Auto</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
