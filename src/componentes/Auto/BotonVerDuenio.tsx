import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const BotonVerDuenio: React.FC<{ idAuto: string }> = ({ idAuto }) => {
  const navigate = useNavigate();

  const manejarClick = async () => {
    try {
      const respuesta = await api.get(`/auto/duenio/${idAuto}`);
      const duenio = respuesta.data;
      navigate(`/persona/detalle/${duenio}`);
    } catch (error) {
      console.error("Error al obtener el dueño:", error);
      alert("No se pudo obtener el dueño del auto.");
    }
  };

  return <button onClick={manejarClick}>Ver Dueño</button>;
};

export default BotonVerDuenio;
