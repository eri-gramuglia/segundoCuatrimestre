import { InterFazPersona } from "./interfaces";

export class Persona implements InterFazPersona {
  
    protected nombre:string;
    protected apellido:string;

    constructor(paramNombre:string, paramApellido:string){

        this.nombre=paramNombre;
        this.apellido=paramApellido;

    }
    
}