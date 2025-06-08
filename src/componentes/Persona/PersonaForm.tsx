import { useState } from 'react';
import FormGenerico from '../Generico/FormGenerico';
import { camposPersona } from '../../tipos/CampoPersona';
import api from '../../api/api';
import { Persona } from '../../tipos/Persona';

const PersonaForm = () => {
  const [persona,setPerosna] = useState<Persona>({
    id:"",
    nombre: "",
    apellido: "",
    dni: "",
    fechaDeNacimiento: undefined,
    genero: undefined,
    donante: undefined,
    autos: [],
  });
  const resetPersona = {
    id:"",
    nombre: "",
    apellido: "",
    dni: "",
    fechaDeNacimiento: undefined,
    genero: undefined,
    donante: undefined,
    autos: [],
  };
  const onSave = async (newPersona: Persona) => {
    try {
      const response = await api.post<Persona>("/persona", newPersona);
      console.log("Guardado con éxito:", response.data);
    } catch (error) {
      console.error("Error al guardar persona:", error);
    }
  };


  return (
    <FormGenerico<Persona>
      fields={camposPersona}
      data={persona}
      onSave={onSave}
      resetForm={()=>setPerosna(resetPersona)}
    />
  );
};

export default PersonaForm;
