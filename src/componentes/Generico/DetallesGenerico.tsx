import { useEffect, useState } from "react";
import api from "../../api/api";
import { CampoConfig } from "../../tipos/CampoForm";
import { useParams } from "react-router-dom";
import "../../css/App.css"
import "./css/detalles.css"
interface DetallesGenericoProps<T> {
  endpoint: string;
  titulo: string;
  campos: CampoConfig[];
  renderExtra?: (data: T) => React.ReactNode;
}

function DetallesGenerico<T extends { id: string }>({endpoint,titulo,campos,renderExtra}: DetallesGenericoProps<T>) {
    const { id } = useParams(); 
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await api.get<T>(`${endpoint}/${id}`);
            setData(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [endpoint]);

    if (loading) return <p>Cargando...</p>;
    if (!data) return <p>No se encontró la información.</p>;

    return (
        <div className="contenedor-detalles">
            <div>
                <h2>{titulo}</h2>
                <ul className="detalles">
                    {campos.map((campo) => (
                    <li key={campo.name}>
                        <strong>{campo.label}:</strong> {String(data[campo.name as keyof T])}
                    </li>
                    ))}
            </ul>  
            </div>
            
            <div>
                {renderExtra && renderExtra(data)}
            </div>
        </div>
    );
}

export default DetallesGenerico;
