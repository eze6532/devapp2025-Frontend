import { Auto } from "./Auto";

export interface Persona{
    id:string;
    nombre:string;
    apellido:string;
    dni:string;
    fechaDeNacimiento?: string;
    genero?: Genero;
    donante?: boolean;
    autos?: Auto[];
    [key: string]: unknown;
}
export enum Genero{
    M='Masculino',
    F='Femenino',
    O='Otros',
}