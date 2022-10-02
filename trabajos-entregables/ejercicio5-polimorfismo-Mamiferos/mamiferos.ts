export  class Mamifero {
        protected nombre:string;
        protected especie:string;
        protected desplazamiento:string;
        protected alimentacion:string;

        constructor (especie:string, desplazamiento:string, alimentacion:string){
           this.especie = especie;
           this.desplazamiento = desplazamiento;
           this.alimentacion = alimentacion;
        }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre="Lobo"):void{
            this.nombre=nombre;
    }
    public getEspecie():string{
        return this.especie;
    }
    public setEspecie(especie="felino"):void{
        this.especie=especie;
    }

    public getDesplazamiento():string{
        return this.desplazamiento;
    }
    public setDesplazamiento(desplazamiento="camina"):void{
        this.desplazamiento=desplazamiento;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion="hueso"):void{
        this.alimentacion=alimentacion;
    }
}
