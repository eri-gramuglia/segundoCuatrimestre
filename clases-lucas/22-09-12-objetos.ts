class Auto {
    private marca:string;
    private modelo:string;
    private velocidadActual:number;
    private capCombustible  number;

    public constructor (marca:string, modelo?:string){ //cuando la variable se le suma el signo "?" significa que es opcional
        this.capCombustible = 70;
        this.marca = marca;
        //this.modelo = modelo;
        this.velocidadActual = 0;
    }

    public acelerar():void{
        this.velocidadActual+=10;
    }
    public getModelo(nuevoModelo:string):void{   // "get" para obtener un valor
        return this.nuevoModelo;
    }
    public setModelo():string{
        return this.nuevoModelo;
    }
    public setVelocidadActual (nuevaVelocidad:number):void{ // "set" cargar un valor
        this.velocidadActual = nuevaVelocidad;
    }
   
}


let primerAuto: Auto = new Auto ("Ford", "Fiesta"); //el llamado tiene q tener el mismo orden que en el constructor
let segundoAuto: Auto = new Auto ("Renault", "Logan");
let tercerAuto: Auto = new Auto ("Peugeot","307");
let cuartoAuto: Auto = new Auto ("Audi");

console.log(cuartoAuto.getModelo());
console.log(tercerAuto.getModelo());

let vehiculos : Auto [] = [primerAuto, segundoAuto] //arreglo del tipo Auto