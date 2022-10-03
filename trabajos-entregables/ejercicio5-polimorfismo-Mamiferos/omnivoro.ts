import { Mamifero } from "./mamiferos";

class Omnivoro extends Mamifero{

    constructor(nombre:string, especie:string, VelocidadDesplazamiento:number,alimentacion:string){
        super (nombre, especie, VelocidadDesplazamiento, alimentacion);
    }
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 40;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Carnes y Vegetales: " + alimentacion;
    }
}
let omnivoro1 : Omnivoro = new Omnivoro ("Hombre", "Humano", 1,"pollo");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +omnivoro1.getNombre());
console.log("Especie: " +omnivoro1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +omnivoro1.getDesplazamiento(), " km/h");
omnivoro1.setAlimentacion("Ave");
console.log("Alimentación: " +omnivoro1.getAlimentacion());
omnivoro1.setDesplazamiento(2);
console.log("La velocidad máxima del omnivoro "+omnivoro1.getNombre(), "es: " + omnivoro1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

