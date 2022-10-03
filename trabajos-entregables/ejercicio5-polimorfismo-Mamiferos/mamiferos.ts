export  class Mamifero {
        protected nombre:string;
        protected especie:string;
        protected velocidadDesplazamiento:number;
        protected alimentacion:string;

        constructor (nombre:string, especie:string,velocidadDesplazamiento:number, alimentacion:string){
           this.nombre = nombre;
           this.especie = especie;
           this.velocidadDesplazamiento = velocidadDesplazamiento;
           this.alimentacion = alimentacion;
        }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string):void{
            this.nombre=nombre;
    }
    public getEspecie():string{
        return this.especie;
    }
    public setEspecie(especie:string):void{
        this.especie=especie;
    }

    public getDesplazamiento():number{
        return this.velocidadDesplazamiento;
    }
    public setDesplazamiento(velocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=velocidadDesplazamiento + 10;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=alimentacion;
    }
}

/*let mamiferos1: Mamifero = new Mamifero("Hombre","Humano",10,"carne");
mamiferos1.setDesplazamiento(10);
console.log("hola");
console.log("la velocidad del humano es: "+ mamiferos1.getDesplazamiento());
*/
