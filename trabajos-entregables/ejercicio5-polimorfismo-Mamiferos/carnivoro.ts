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
let carnivoro1 : Carnivoro = new Carnivoro ("Leopardo", "Felino", 12,"cadáveres");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +carnivoro1.getNombre());
console.log("Especie: " +carnivoro1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +carnivoro1.getDesplazamiento(), " km/h");
carnivoro1.setAlimentacion("cadáveres frescos");
console.log("Alimentación: " +carnivoro1.getAlimentacion());
carnivoro1.setDesplazamiento(0);
console.log("La velocidad máxima del carnívoro "+carnivoro1.getNombre(), "es: " + carnivoro1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

