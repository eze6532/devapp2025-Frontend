import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Persona } from "../../tipos/Persona";
import FormGenerico from "../Generico/FormGenerico";
import api from "../../api/api";
import { camposPersona } from "../../tipos/CampoPersona";
import './css/persona.css'
const PersonaEditar = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [persona, setPersona] = useState<Persona>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersona = async () => {
      try {
        const response = await api.get<Persona>(`/persona/${id}`);
        setPersona(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchPersona();
    }
  }, [id]);

  const handleSave = async (newPersona: Persona) => {
    try {
      const response = await api.put<Persona>(`/persona/edit/${newPersona.id}`, newPersona); 
      console.log("Guardado con éxito:", response.data);
      alert("Persona actualizada");
      navigate("/personas/lista");
    } catch (err) {
      console.error(err);
      alert("Error al guardar");
    }
  };

  const handleAgregarAuto = () => {
    navigate(`/auto/nuevo/${id}`);
  };

  if (loading) return <p>Cargando...</p>;
  if (!persona) return <p>No se encontró la persona.</p>;

  return (
    <div className="contenedor-personas" >
      <h2>Editar Persona</h2>
      <FormGenerico
        fields={camposPersona}
        data={persona}
        onSave={handleSave}
        resetForm={()=>persona}
      />
      <button onClick={handleAgregarAuto}>Agregar Auto</button>
    </div>
  );
};

export default PersonaEditar;
