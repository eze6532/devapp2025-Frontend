import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "../Generico/css/acciones.css"
const BotonVerDuenio: React.FC<{ idAuto: string }> = ({ idAuto }) => {
  const navigate = useNavigate();

  const manejarClick = async () => {
    try {
      const respuesta = await api.get<{ duenio: string }>(`/auto/duenio/${idAuto}`);
      const duenio = respuesta.data.duenio;
      navigate(`/persona/detalle/${duenio}`);
    } catch (error) {
      console.error("Error al obtener el dueño:", error);
      alert("No se pudo obtener el dueño del auto.");
    }
  };

  return <button className="boton-duenio" onClick={manejarClick}></button>;
};

export default BotonVerDuenio;
