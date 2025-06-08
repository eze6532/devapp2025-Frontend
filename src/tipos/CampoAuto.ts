import { CampoConfig } from "./CampoForm";

export const camposAuto: CampoConfig[] = [
  { name: 'patente', label: 'Patente', type: 'text', required: true },
  { name: 'marca', label: 'Marca', type: 'text', required: true },
  { name: 'modelo', label: 'Modelo', type: 'text', required: true },
  { name: 'anio', label: 'Año', type: 'number' },
  { name: 'color', label: 'Color', type: 'text' },
  { name: 'numerodeChasis', label: 'Número de Chasis', type: 'text' },
  { name: 'motor', label: 'Motor', type: 'text' },
];