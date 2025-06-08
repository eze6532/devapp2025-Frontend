import ListaGenerica from "../Generico/ListaGenerica";
import { Persona } from "../../tipos/Persona";

const PersonaList = () => (
    <ListaGenerica<Persona>
        endpoint="/persona/"
        titulo="Persona"
        columnas={["dni", "nombre", "apellido"]}
        basePath="/persona"
        mostrarBotonAgregar= {true}
    />
);

export default PersonaList;
