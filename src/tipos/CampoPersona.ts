import { CampoConfig } from "./CampoForm";
import { Genero } from "./Persona";


export const camposPersona: CampoConfig[] = [
  { name: 'dni', label: 'DNI', type: 'text', required: true },
  { name: 'nombre', label: 'Nombre', type: 'text', required: true },
  { name: 'apellido', label: 'Apellido', type: 'text', required: true },
  { name: 'fechaDeNacimiento', label: 'Fecha de Nacimiento', type: 'date' },
  { name: 'genero', label: 'Género', type: 'select', options: Object.values(Genero) },
  { name: 'donante', label: 'Donante', type: 'checkbox' },
];
