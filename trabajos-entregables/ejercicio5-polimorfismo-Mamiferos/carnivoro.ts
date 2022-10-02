import { Mamifero } from "./mamiferos";

class Carnivoro extends Mamifero{

    constructor(nombre:string, especie:string, desplazamiento:string,alimentacion:string){
        super (nombre, especie,desplazamiento,alimentacion);
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre="Perro"):void{
            this.nombre=nombre;
    }
    public getEspecie():string{
        return this.especie;
    }
    public setEspecie(especie="cánido"):void{
        this.especie=especie;
    }
    public getDesplazamiento():string{
        return this.desplazamiento;
    }
    public setDesplazamiento(desplazamiento="camina, corre, salta y trepa"):void{
        this.desplazamiento=desplazamiento;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion="carne"):void{
        this.alimentacion=alimentacion;
    }
}