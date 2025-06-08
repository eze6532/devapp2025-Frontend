export type CampoFrom = 'text' | 'number' | 'date' | 'checkbox' | 'select';

export interface CampoConfig {
  name: string;
  label: string;
  type: CampoFrom;
  required?: boolean;
  options?: string[]; 
}