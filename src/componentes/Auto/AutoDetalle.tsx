import DetallesGenerico from "../Generico/DetallesGenerico";
import { Auto } from "../../tipos/Auto";
import { camposAuto } from "../../tipos/CampoAuto";
import "./css/auto.css"
import BotonVerDuenio from "./BotonVerDuenio";

const AutoDetalle = () => {
  return (
    <div className="contenedor-autos">
      <DetallesGenerico<Auto>
      endpoint="/auto"
      titulo="Detalle de Auto"
      campos={camposAuto}
      renderExtra={(auto) => (
         <BotonVerDuenio idAuto={auto.id} />
      )}
    />
    </div>
    
  );
};

export default AutoDetalle;
