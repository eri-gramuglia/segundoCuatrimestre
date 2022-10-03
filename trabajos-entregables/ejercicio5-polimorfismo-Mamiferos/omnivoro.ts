import { Mamifero } from "./mamiferos";

class Omnivoro extends Mamifero{

    constructor(nombre:string, especie:string, VelocidadDesplazamiento:number,alimentacion:string){
        super (nombre, especie, VelocidadDesplazamiento, alimentacion);
    }
    public getDesplazamiento():number{
        return this.velocidadDesplazamiento + 5;
    }
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento;
    }
    public getAlimentacion():string{
        return this.alimentacion + " vegetales";
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=alimentacion;
    }
}
let omnivoro1 : Omnivoro = new Omnivoro ("Hombre", "Humano", 12,"carne");
console.log(omnivoro1.getDesplazamiento());
console.log(omnivoro1.getAlimentacion());

console.log(omnivoro1.setDesplazamiento(2));
console.log(omnivoro1.setAlimentacion("ave"));

//console.log("velocidad del hombre " +omnivoro1.setDesplazamiento(2)," km/h");
//console.log("alimentación del hombre "+omnivoro1.setAlimentacion("huevo"));