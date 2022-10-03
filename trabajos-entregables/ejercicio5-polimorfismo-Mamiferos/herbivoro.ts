import { Mamifero } from "./mamiferos";

class Herbivoro extends Mamifero{

    constructor(nombre:string, especie:string, velocidadDesplazamiento:number,alimentacion:string){
        super (nombre, especie, velocidadDesplazamiento, alimentacion);

    }
    public getDesplazamiento(): number {
        return this.velocidadDesplazamiento + 50;
    
    }     
}