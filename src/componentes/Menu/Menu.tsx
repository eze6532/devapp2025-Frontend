import { Link } from "react-router-dom";
import './Menu.css'
const Menu = ({ abierto, onClose }: { abierto: boolean, onClose:()=>void }) => {
    return (
      <nav className={`menu-lateral ${abierto ? "abierto" : ""}`}>
        <button onClick={onClose}>
            <img src="/img/menu.png" alt="Menú" className="menu-icono" />
        </button>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/persona/lista">Personas</Link></li>
          <li><Link to="/auto/lista">Auto</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Menu;