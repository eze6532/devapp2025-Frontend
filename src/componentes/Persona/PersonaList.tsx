import { useEffect, useState } from "react";
import api from "../../api/api";
import { Persona } from "../../tipos/Persona";
import "./PersonaLista.css"
import { Link } from "react-router-dom";
const PersonasList = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();

    useEffect(() => {

        const obtenerPersonas = async () => {
            const inicio= Date.now();
            try {
                const peticion = await api.get<{ mensaje: string, datos: Persona[] }>('/persona/lista/resumen');
                const data = peticion.data.datos.map((persona) => ({
                    ...persona
                }));
                setPersonas(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                const tiempoTrancurrido = Date.now()- inicio;
                const esperaRestante = Math.max(0,1500 - tiempoTrancurrido);
                setTimeout(()=>{
                    setLoading(false);
                },esperaRestante);
            }
        };
        obtenerPersonas();
    }, []);

    if (loading) {
        return (
            <div className="cargando">Cargando <span className="puntos"></span>
            </div>);
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    //Funciones
    const borrarPersona=async (id:string)=>{
        try{
            const peticion = await api.delete<{mensaje:string}>(`/persona/delete/${id}`);
            console.log(peticion.data.mensaje);
        }catch (err){
            if(err instanceof Error){
                setError(err.message);
            }
        }
    }
    return (
        <div className="listado-contenedor">
            <div className="listado-header">
                <h2>Personas</h2>
                <Link to='/persona/agregar-persona'>
                    <button className="boton-add">Agregar</button> 
                </Link>
               
            </div>
            <div className="listado-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((persona) => (
                            <tr key={persona.id}>
                                <td>{persona.dni}</td>
                                <td>{persona.nombre}</td>
                                <td>{persona.apellido}</td>
                                <td>
                                    <div className="columna-aciones">
                                        <Link to='/persona/informacion-completa'>
                                            <button className="boton-ver">Ver</button>
                                        </Link>
                                        <Link to='persona/editar-informacion'>
                                            <button className="boton-editar">Editar</button>
                                        </Link>
                                        
                                        <button className="boton-borrar" onClick={()=> borrarPersona(persona.id)}>Borrar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PersonasList;
