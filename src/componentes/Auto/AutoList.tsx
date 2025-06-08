import ListaGenerica from "../Generico/ListaGenerica";
import { Auto } from "../../tipos/Auto";
import BotonVerDuenio from "./BotonVerDuenio";
import "./AutoList.css"


const AutoList = () => {
  
  return (
      <div className="contenedor-autos">
        <ListaGenerica<Auto>
          endpoint="/auto/"
          titulo="Autos"
          columnas={["modelo", "patente", "anio", "marca"]}
          basePath="/auto"
          mostrarBotonAgregar={false}
          accionesExtras={(id) => <BotonVerDuenio idAuto={id} />}
        />
      </div>
        
  );
};


export default AutoList;
