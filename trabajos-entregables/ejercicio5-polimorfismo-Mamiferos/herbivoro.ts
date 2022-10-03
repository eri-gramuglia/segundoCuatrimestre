import { Mamifero } from "./mamiferos";

class Herbivoro extends Mamifero{

    constructor(nombre:string, especie:string, VelocidadDesplazamiento:number,alimentacion:string){
        super (nombre, especie, VelocidadDesplazamiento, alimentacion);
    }
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 60;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Vegetales: " + alimentacion;
    }
}


