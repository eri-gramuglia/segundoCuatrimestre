import { Mamifero } from "./mamiferos";

class Omnivoro extends Mamifero{

    constructor(nombre:string, especie:string, desplazamiento:string,alimentacion:string){
        super (nombre, especie, desplazamiento,alimentacion);
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre="Hombre"):void{
            this.nombre=nombre;
    }
    public getEspecie():string{
        return this.especie;
    }
    public setEspecie(especie="humano"):void{
        this.especie=especie;
    }
    public getDesplazamiento():string{
        return this.desplazamiento;
    }
    public setDesplazamiento(desplazamiento="camina, corre y salta"):void{
        this.desplazamiento=desplazamiento;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion="carne y vegetales"):void{
        this.alimentacion=alimentacion;
    }
}