import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TablaGenerica from "./TablaGenerica";
import api from "../../api/api";
import "./css/acciones.css";
import "./css/listado.css";
import "../../css/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CampoConfig } from "../../tipos/CampoForm";

type ListaGenericaProps = {
  endpoint: string;             //  "/persona/" o "/auto/"
  titulo: string;              //  "Personas" o "Autos"
  columnas: CampoConfig[];      //  ['nombre', 'apellido'] o ['modelo', 'patente']
  basePath: string;            // Para los botones de editar/ver
  mostrarBotonAgregar: boolean;
  accionesExtras?: (id:string)=> React.ReactNode;
};

function ListaGenerica<T extends { id: string }>({ endpoint, titulo, columnas, basePath, mostrarBotonAgregar, accionesExtras}: ListaGenericaProps) {
    const [datos, setDatos] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [alerta, setAlerta] = useState<{ mensaje: string; tipo: 'success' | 'danger' } | null>(null);

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
    useEffect(() => {
        if (alerta) {
            const timer = setTimeout(() => setAlerta(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [alerta]);

    const eliminarElemento = async (id: string) => {
    try {
      const peticion = await api.delete<{ mensaje: string }>(`${basePath}/${id}`);
      setDatos((prev) => prev.filter((item) => item.id !== id));
      setAlerta({ mensaje: peticion.data.mensaje, tipo: 'success' });
    } catch (err) {
      if (err instanceof Error) {
        setAlerta({ mensaje: err.message, tipo: 'danger' });
      }
    }

    // Opcional: ocultar el mensaje después de unos segundos
    setTimeout(() => setAlerta(null), 4000);
  };

    if (loading) return <div className="cargando">Cargando <span className="puntos"></span></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="listado-contenedor">
            {alerta && (
            <div className={`alert alert-${alerta.tipo} alert-dismissible fade show`} role="alert">
                {alerta.mensaje}
                <button
                type="button"
                className="btn-close"
                aria-label="Cerrar"
                onClick={() => setAlerta(null)}
                ></button>
            </div>
            )}

            <div className="listado-header">
                <h2>{titulo}</h2>
                {mostrarBotonAgregar !== false && (
                    <Link to={`${basePath}/agregar`}>
                    <button className="boton-add"> Agregar</button>
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

  