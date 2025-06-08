import { ChangeEvent } from "react";
import { CampoConfig } from "../../tipos/CampoForm";
import "../../css/App.css"
interface FormCamposProps<T extends Record<string, unknown>> {
  fields: CampoConfig[];
  formData: T;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function FormCampos<T extends Record<string, unknown>>({fields,formData,onChange}: FormCamposProps<T>) {
  

  return (
    <>
      {fields.map(({ name, label, type, options }) => {
        const rawValue = formData[name];

        return (
          <div key={name}>
            <label>{label}</label>

            {type === "select" ? (
              <select
                name={name}
                value={
                  typeof rawValue === "string" || typeof rawValue === "number"
                    ? rawValue
                    : ""
                }
                onChange={onChange}
              
              >
                <option value="">Seleccione...</option>
                {options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

            ) : type === "checkbox" ? (
              <input
                type="checkbox"
                name={name}
                checked={!!rawValue}
                onChange={onChange}
               
              />

            ) : type === "number" ? (
              <input
                type="number"
                name={name}
                value={typeof rawValue === "number" || typeof rawValue === "string" ? rawValue : ""}
                onChange={onChange}
               
              />

            ) : (
              <input
                type={type}
                name={name}
                value={typeof rawValue === "string" || typeof rawValue === "number" ? rawValue : ""}
                onChange={onChange}
               
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default FormCampos;
