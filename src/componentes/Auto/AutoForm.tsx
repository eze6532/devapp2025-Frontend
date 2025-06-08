import { useState } from "react";
import { Auto } from "../../tipos/Auto";
import { camposAuto } from "../../tipos/CampoAuto";
import FormGenerico from "../Generico/FormGenerico";
import api from "../../api/api";
import { useParams } from "react-router-dom";



export const AutoForm = () => {
  const { idDuenio } = useParams<{ idDuenio: string }>();
  const [auto,setAuto] = useState<Auto>({
    id:"",
    modelo: "",
    patente: "",
    duenio: "",
    marca: "",
    anio: undefined,
    color: "",
    numerodeChasis: "",
    motor:"",
  });
  const autoReset={
    id:"",
     modelo: "",
    patente: "",
    duenio: "",
    marca: "",
    anio: undefined,
    color: "",
    numerodeChasis: "",
    motor:"",
  } 
 const onSave = async (newAuto: Auto) => {
  try {
    if (!idDuenio) {
      console.error("No se encontró el ID de la persona en la URL.");
      return;
    }

    const autoConDuenio = {
      ...newAuto,
      duenio: idDuenio,
    };

    const response = await api.post("/auto/", autoConDuenio, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Guardado con éxito:", response.data);
  } catch (error) {
    console.error("Error al guardar auto:", error);
  }
};

  return (
    <FormGenerico<Auto>
      fields={camposAuto}
      data={auto}
      onSave={onSave}
      resetForm={()=>setAuto(autoReset)} 
    />
  );
};
export default AutoForm;
