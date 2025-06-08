import DetallesGenerico from "../Generico/DetallesGenerico";
import ListaGenerica from "../Generico/ListaGenerica";
import { Persona } from "../../tipos/Persona";
import { Auto } from "../../tipos/Auto";
import { camposPersona } from "../../tipos/CampoPersona";

const PersonaDetalle = () => {
  return (
    <DetallesGenerico<Persona>
      endpoint="/persona"
      titulo="Detalle de Persona"
      campos={camposPersona}
      renderExtra={(persona) => (
        <ListaGenerica<Auto>
          endpoint={`/auto/?idPersona=${persona.id}`} 
          titulo="Sus Autos"
          columnas={["modelo", "patente", "marca"]}
          basePath="/auto"
          mostrarBotonAgregar={false}
        />
      )}
    />
  );
};

export default PersonaDetalle;
