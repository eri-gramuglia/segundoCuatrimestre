export  class Mamifero {
        protected nombre:string;
        protected especie:string;
        protected velocidadDesplazamiento:number;
        protected alimentacion:string;

        constructor (nombre:string, especie:string, velocidadDesplazamiento:number, alimentacion:string){
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
        this.velocidadDesplazamiento = velocidadDesplazamiento + 40;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion="moluscos " + alimentacion;
    }
}

let mamiferos1: Mamifero = new Mamifero("Ballena","Cetáceo",20,"piedra");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +mamiferos1.getNombre());
console.log("Especie: " +mamiferos1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +mamiferos1.getDesplazamiento(), " km/h");
mamiferos1.setAlimentacion("krill");
console.log("Alimentación: " +mamiferos1.getAlimentacion());
mamiferos1.setDesplazamiento(0);
console.log("La velocidad máxima del mamifero "+mamiferos1.getNombre(), "es: " + mamiferos1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

