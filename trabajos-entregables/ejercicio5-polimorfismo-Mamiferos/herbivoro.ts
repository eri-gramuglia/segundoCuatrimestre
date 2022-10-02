import { Mamifero } from "./mamiferos";

class Herbivoro extends Mamifero{

    constructor(nombre:string, especie:string, desplazamiento:string,alimentacion:string){
        super (nombre, especie, desplazamiento,alimentacion);
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre="Gacela"):void{
            this.nombre=nombre;
    }
    public getEspecie():string{
        return this.especie;
    }
    public setEspecie(especie="rumiante"):void{
        this.especie=especie;
    }
    public getDesplazamiento():string{
        return this.desplazamiento;
    }
    public setDesplazamiento(desplazamiento="camina y corre"):void{
        this.desplazamiento=desplazamiento;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion="vegetales"):void{
        this.alimentacion=alimentacion;
    }
}