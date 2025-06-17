import { CampoConfig } from "../../tipos/CampoForm";
import AccionesDeFila from "./AccionesDeFila";

interface Props<T extends { id: string }> {
    datos: T[];
    columnas: CampoConfig[];
    basePath:string,
    ondelet:(id:string)=>void;
    accionExtra?: (id: string) =>  React.ReactNode
  }
  
  const TablaGenerica = <T extends { id: string }>({ datos=[], columnas, basePath, ondelet, accionExtra}: Props<T>) => {
    return (
      <table>
      <thead>
        <tr>
          {columnas.map((colum) => (
            <th key={colum.name}>{colum.label}</th> 
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            {columnas.map((colum) => (
              <td key={colum.name}>
                {String(item[colum.name as keyof T])}
              </td>
            ))}
            <AccionesDeFila
              basePath={basePath}
              id={item.id}
              ondelete={ondelet}
              accionExtra={accionExtra}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
  };
  
  export default TablaGenerica;
  