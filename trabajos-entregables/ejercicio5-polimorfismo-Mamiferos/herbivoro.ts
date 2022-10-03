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
let herbivoro1 : Herbivoro = new Herbivoro ("Gacela", "bóvidos", 15,"pasto");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +herbivoro1.getNombre());
console.log("Especie: " +herbivoro1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +herbivoro1.getDesplazamiento(), " km/h");
herbivoro1.setAlimentacion("pastizal");
console.log("Alimentación: " +herbivoro1.getAlimentacion());
herbivoro1.setDesplazamiento(7);
console.log("La velocidad máxima del Herbívoro "+herbivoro1.getNombre(), "es: " + herbivoro1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

