import { Mamifero } from "./mamiferos";

class Carnivoro extends Mamifero{

    constructor(nombre:string, especie:string, velocidadDesplazamiento:number, alimentacion:string){
        super (nombre, especie,velocidadDesplazamiento,alimentacion);
    }
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 40;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Carnes: " + alimentacion;
    }
}


