import { useState } from 'react';
import FormGenerico from '../Generico/FormGenerico';
import { camposPersona } from '../../tipos/CampoPersona';
import api from '../../api/api';
import { Persona } from '../../tipos/Persona';
import './css/persona.css'
import { useNavigate } from 'react-router-dom';
const PersonaForm = () => {
  const navigate= useNavigate()
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [tipoMensaje, setTipoMensaje] = useState<'success' | 'danger' | null>(null);
  const [persona,setPerosna] = useState<Persona>({
    id:"",
    nombre: "",
    apellido: "",
    dni: "",
    fechaDeNacimiento: undefined,
    genero: undefined,
    donante: false,
    autos: [],
  });
  const resetPersona = {
    id:"",
    nombre: "",
    apellido: "",
    dni: "",
    fechaDeNacimiento: undefined,
    genero: undefined,
    donante: false,
    autos: [],
  };

  const onSave = async (newPersona: Persona) => {
    try {
      const response = await api.post<Persona>("/persona", newPersona);
      console.log("Guardado con éxito:", response.data);
      
      setMensaje('Persona guardada con éxito.');
      setTipoMensaje('success');
      
      setTimeout(() => {
        setMensaje(null);
        setTipoMensaje(null);
        navigate("/personas/lista")
      }, 3000);

    } catch (error) {
      console.error("Error al guardar persona:", error);
      setMensaje('Ocurrió un error al guardar la persona.');
      setTipoMensaje('danger');
    }
  };



  return (
    <div className="contenedor-personas" >
      {mensaje && tipoMensaje && (
        <div className={`alert alert-${tipoMensaje} mt-3`} role="alert">
          {mensaje}
        </div>
      )}
      <FormGenerico<Persona>
        fields={camposPersona}
        data={persona}
        onSave={onSave}
        resetForm={()=>setPerosna(resetPersona)}
        
      />
      
    </div>
    );
};

export default PersonaForm;
