import { CampoConfig } from "./CampoForm";

export const camposAutoParcial: CampoConfig[] = [
  { name: 'patente', label: 'Patente', type: 'text', required: true },
  { name: 'marca', label: 'Marca', type: 'text', required: true },
  { name: 'modelo', label: 'Modelo', type: 'text', required: true },
  { name: 'anio', label: 'Año', type: 'number' },
];