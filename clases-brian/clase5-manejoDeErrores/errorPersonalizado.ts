
export class ErrorPersonalizado extends Error{   //es para saber en qué parte del código se rompió

    constructor(mensaje:string){
        super(mensaje);
        this.name = "ErrorPersonalizado";
    }
}