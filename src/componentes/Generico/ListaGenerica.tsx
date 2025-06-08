import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TablaGenerica from "./TablaGenerica";
import api from "../../api/api";
import "./css/acciones.css";
import "./css/listado.css";
import "../../css/App.css"

type ListaGenericaProps<T> = {
  endpoint: string;             //  "/persona/" o "/auto/"
  titulo: string;              //  "Personas" o "Autos"
  columnas: (keyof T)[];       //  ['nombre', 'apellido'] o ['modelo', 'patente']
  basePath: string;            // Para los botones de editar/ver
  mostrarBotonAgregar: boolean;
  accionesExtras?: (id:string)=> React.ReactNode;
};

function ListaGenerica<T extends { id: string }>({ endpoint, titulo, columnas, basePath, mostrarBotonAgregar, accionesExtras}: ListaGenericaProps<T>) {
    const [datos, setDatos] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const obtenerDatos = async () => {
            const inicio = Date.now();
            try {
                const peticion = await api.get<T[]>(endpoint);
                
                setDatos(peticion.data);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
            } finally {
                const tiempo = Date.now() - inicio;
                const espera = Math.max(0, 500 - tiempo);
                setTimeout(() => setLoading(false), espera);
            }
        };
        obtenerDatos();
    }, [endpoint]);

    const eliminarElemento = async (id: string) => {
        try {
            const peticion = await api.delete<{ mensaje: string }>(`${basePath}/${id}`);
            console.log(peticion.data.mensaje);
            setDatos((prev) => prev.filter((item) => item.id !== id));
        } catch (err) {
            if (err instanceof Error) setError(err.message);
        }
    };

    if (loading) return <div className="cargando">Cargando <span className="puntos"></span></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="listado-contenedor">
            <div className="listado-header">
                <h2>{titulo}</h2>
                {mostrarBotonAgregar !== false && (
                    <Link to={`${basePath}/agregar`}>
                        <button className="flip-horizontal"> Agregar</button>
                    </Link>
                )}
            </div>
            <div className="listado-tabla">
                <TablaGenerica 
                    datos={datos}
                    columnas={columnas} 
                    basePath={basePath} 
                    ondelet={eliminarElemento}
                    accionExtra={accionesExtras}
                 />
            </div>
        </div>
    );
}

export default ListaGenerica;

  