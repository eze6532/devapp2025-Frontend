import ListaGenerica from "../Generico/ListaGenerica";
import { Persona } from "../../tipos/Persona";
import './css/persona.css'
import { camposPersonaParcial } from "../../tipos/CampoPersonParcial";
const PersonaList = () => (
    <div className="contenedor-personas" >
        <ListaGenerica<Persona>
            endpoint="/persona/"
            titulo="Persona"
            columnas={camposPersonaParcial}
            basePath="/persona"
            mostrarBotonAgregar= {true}
        />
    </div>
);

export default PersonaList;
