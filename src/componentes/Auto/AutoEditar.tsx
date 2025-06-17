import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Auto } from "../../tipos/Auto";
import api from "../../api/api";
import FormGenerico from "../Generico/FormGenerico";
import { camposAuto } from "../../tipos/CampoAuto";
import "./css/auto.css"

const AutoEditar = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [auto, setAuto] = useState<Auto>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuto = async () => {
      try {
        const response = await api.get<Auto>(`/auto/${id}`);
        setAuto(response.data);
      } catch (err) {
        console.error("Error al obtener auto:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchAuto();
  }, [id]);

  const handleSave = async (newAuto: Auto) => {
    try {
      const response = await api.put<Auto>(`/auto/edit/${id}`, newAuto); // PUT en vez de POST
      console.log("Auto actualizado:", response.data);
      alert("Auto actualizado con éxito");
      navigate("/autos/lista"); // Redirigí a donde muestres los autos
    } catch (err) {
      console.error("Error al actualizar auto:", err);
      alert("Error al guardar los cambios");
    }
  };

  if (loading) return <p>Cargando auto...</p>;
  if (!auto) return <p>No se encontró el auto.</p>;

  return (
    <div className="contenedor-autos">
      <h2>Editar Auto</h2>
      <FormGenerico
        fields={camposAuto}
        data={auto}
        onSave={handleSave}
        resetForm={() => auto}
      />
    </div>
  );
};

export default AutoEditar;
