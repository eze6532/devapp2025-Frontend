import { Link } from "react-router-dom";
import "./Home.css"

const Home= ()=>{


    return(
        <div className = "home">
            <h1>Inicio</h1>
            <Link to='/persona/lista'>
                <button>Personas</button>
            </Link>
            <Link to='/auto/lista'>
                <button>Autos</button>
            </Link>

        </div>
    )
}
export default Home;