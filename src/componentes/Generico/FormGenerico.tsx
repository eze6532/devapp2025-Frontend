import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormCampos from "./FormCampos";
import { CampoConfig } from "../../tipos/CampoForm";
import "../../css/App.css"
import "./css/detalles.css"
interface FormGenericoProps<T extends Record<string, unknown>> {
  fields: CampoConfig[];
  data: T;
  onSave: (newData: T) => void;
  resetForm: ()=>void;
}

function FormGenerico<T extends Record<string, unknown>>({fields,data,onSave,resetForm}: FormGenericoProps<T>) {
  const [formData, setFormData] = useState<T>(data);
  const [tipoMensaje, setTipoMensaje] = useState<'success' | 'danger' | null>(null);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;

    const newValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(formData); 
  };
  
  return (
    <div className="contenedor-detalles">
      <form onSubmit={handleSubmit} className="detalles">
        <FormCampos
          fields={fields}
          formData={formData}
          onChange={handleChange}
        />

        {(
          <div style={{ marginTop: "1rem" }}>
            <button type="submit">Guardar</button>
            {resetForm && <button type="button" onClick={resetForm}>Cancelar</button>}
          </div>
        )}
      </form>
    </div>
  );
}

export default FormGenerico;
