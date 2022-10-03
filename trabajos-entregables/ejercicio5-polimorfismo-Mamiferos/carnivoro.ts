import { Mamifero } from "./mamiferos";

class Carnivoro extends Mamifero{

    constructor(nombre:string, especie:string, velocidadDesplazamiento:number, alimentacion:string){
        super (nombre, especie,velocidadDesplazamiento,alimentacion);
    }
   
    public getDesplazamiento():number{
        return this.velocidadDesplazamiento + 40;
    }
    public setDesplazamiento(velocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=velocidadDesplazamiento;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=alimentacion;
    }
}
let carnivoro1: Carnivoro = new Carnivoro( "Gato", "Felino", 60, "carne");
console.log(carnivoro1.getAlimentacion());
console.log(carnivoro1.getDesplazamiento());
console.log(carnivoro1.setDesplazamiento(10));

