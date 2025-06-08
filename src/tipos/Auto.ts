export interface Auto{
    id: string;
    modelo:string;
    patente:string;
    duenio:string;
    marca:string;
    anio?: number,
    color?: string,
    numerodeChasis?: string,
    motor?: string,
     [key: string]: unknown;
}