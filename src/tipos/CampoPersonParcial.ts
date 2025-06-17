import { CampoConfig } from "./CampoForm";

export const camposPersonaParcial: CampoConfig[] = [
  { name: 'dni', label: 'DNI', type: 'text', required: true },
  { name: 'nombre', label: 'Nombre', type: 'text', required: true },
  { name: 'apellido', label: 'Apellido', type: 'text', required: true },
];