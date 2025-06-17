import { useState } from "react";
import { Auto } from "../../tipos/Auto";
import { camposAuto } from "../../tipos/CampoAuto";
import FormGenerico from "../Generico/FormGenerico";
import api from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import "./css/auto.css"


export const AutoForm = () => {
  const navigate= useNavigate();
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [tipoMensaje, setTipoMensaje] = useState<'success' | 'danger' | null>(null);
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
    setMensaje('Auto guardado con éxito.');
      setTipoMensaje('success');
      
      setTimeout(() => {
        setMensaje(null);
        setTipoMensaje(null);
        navigate("/autos/lista")
      }, 3000);
  } catch (error) {
    console.error("Error al guardar auto:", error);
    setMensaje('Ocurrió un error al guardar la persona.');
    setTipoMensaje('danger');
  }
};

  return (
    <div className="contenedor-autos">
      {mensaje && tipoMensaje && (
        <div className={`alert alert-${tipoMensaje} mt-3`} role="alert">
          {mensaje}
        </div>
      )}
        <FormGenerico<Auto>
          fields={camposAuto}
          data={auto}
          onSave={onSave}
          resetForm={()=>setAuto(autoReset)} 
        />
    </div>
    
  );
};
export default AutoForm;
