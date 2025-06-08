import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; 

const Header =({ onMenuClick }: { onMenuClick: () => void }) =>{
    const navigate = useNavigate();


    return (
        <header className="header">
            <div className="logo-contenedor">
                <button className="menu-boton" onClick={onMenuClick}>
                    <img src="/img/menu.png" alt="Menú" className="menu-icono" />
                </button>
                <Link to="/">
                    <img src="/img/auto.png" alt="Logo" className="logo-img" />
                </Link>
            </div>
            <button onClick={() => navigate(-1)} className="volver-boton">
                ⬅ Volver
            </button>
        </header>
    );
};

export default Header;
