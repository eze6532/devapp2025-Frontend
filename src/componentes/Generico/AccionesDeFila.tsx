import { Link } from "react-router-dom";
import "./css/acciones.css";


interface AccinesFilaProps{
    id:string;
    ondelete:(id: string)=> void;
    basePath: string;
    accionExtra?: (id: string) =>  React.ReactNode
 
}
const AccionesDeFila: React.FC<AccinesFilaProps>=({id,ondelete,basePath,accionExtra})=>{
    
    return (
        <td>
            <span className="columna-acciones">
                <Link to={`${basePath}/detalle/${id}`}>
                    <button className="boton-ver">Ver</button>
                </Link>
                <Link to={`${basePath}/editar-informacion/${id}`}>
                    <button className="boton-editar">Editar</button>
                </Link>
                    <button className="boton-borrar" onClick={()=>ondelete(id)}>Borrar</button>
                {accionExtra&&(
                    <>
                        {accionExtra(id)}
                    </> 
                )}
            </span>
        </td>
    )
}
export default AccionesDeFila; 