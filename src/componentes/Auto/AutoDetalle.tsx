import DetallesGenerico from "../Generico/DetallesGenerico";
import { Auto } from "../../tipos/Auto";
import { Link } from "react-router-dom";
import { camposAuto } from "../../tipos/CampoAuto";

const AutoDetalle = () => {
  return (
    <DetallesGenerico<Auto>
      endpoint="/auto"
      titulo="Detalle de Auto"
      campos={camposAuto}
      renderExtra={(auto) => (
        <Link to={`/persona/detalle/${auto.duenio}`}>
          <button>Ver Dueño</button>
        </Link>
      )}
    />
  );
};

export default AutoDetalle;
