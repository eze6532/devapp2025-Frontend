import ListaGenerica from "../Generico/ListaGenerica";
import { Auto } from "../../tipos/Auto";
import BotonVerDuenio from "./BotonVerDuenio";
import "./css/auto.css"
import { camposAutoParcial } from "../../tipos/CampoAutoParcial";


const AutoList = () => {
  
  return (
      <div className="contenedor-autos">
        <ListaGenerica<Auto>
          endpoint="/auto/"
          titulo="Autos"
          columnas={camposAutoParcial}
          basePath="/auto"
          mostrarBotonAgregar={false}
          accionesExtras={(id) => <BotonVerDuenio idAuto={id} />}
        />
      </div>
        
  );
};


export default AutoList;
