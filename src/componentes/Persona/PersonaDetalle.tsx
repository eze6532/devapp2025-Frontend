import DetallesGenerico from "../Generico/DetallesGenerico";
import ListaGenerica from "../Generico/ListaGenerica";
import { Persona } from "../../tipos/Persona";
import { Auto } from "../../tipos/Auto";
import { camposPersona } from "../../tipos/CampoPersona";
import './css/persona.css'
import { camposAutoParcial } from "../../tipos/CampoAutoParcial";
const PersonaDetalle = () => {
  return (
    <div className="contenedor-personas" >
      <DetallesGenerico<Persona>
        endpoint="/persona"
        titulo="Detalle de Persona"
        campos={camposPersona}
        renderExtra={(persona) => (
          <ListaGenerica<Auto>
            endpoint={`/auto/?idPersona=${persona.id}`} 
            titulo="Sus Autos"
            columnas={camposAutoParcial}
            basePath="/auto"
            mostrarBotonAgregar={false}
          />
        )}
      />
    </div>
  );
};

export default PersonaDetalle;
