import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home/Home";
import PersonaList from "./componentes/Persona/PersonaList";
import AutoList from "./componentes/Auto/AutoList";
import PersonaDetalle from "./componentes/Persona/PersonaDetalle";
import PersonaFrom from "./componentes/Persona/PersonaForm";
import PersonaEditar from "./componentes/Persona/PersonaEditar";
import AutoForm from "./componentes/Auto/AutoForm";
import AutoEditar from "./componentes/Auto/AutoEditar";
import AutoDetalle from "./componentes/Auto/AutoDetalle";


export function AppRouter(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            {/*Persona*/ }
            <Route path="/personas/lista" element={<PersonaList />} />
            <Route path="/persona/detalle/:id" element={<PersonaDetalle/>}></Route>
            <Route path="/persona/agregar" element={<PersonaFrom/>}></Route>
            <Route path="/persona/editar-informacion/:id" element={<PersonaEditar/>}></Route>
            {/*Auto*/ }
            <Route path="/autos/lista" element={<AutoList/>} />
            <Route path="/auto/detalle/:id" element={<AutoDetalle/>}></Route>
            <Route path="/auto/nuevo/:idDuenio" element={<AutoForm/>}></Route>
            <Route path="/auto/editar-informacion/:id" element={<AutoEditar/>}></Route>
            
        
        </Routes>
    )
}