import { Console } from "console";

class Persona {
    private nombre:string;
    private edad:number;

    constructor(pNombre:string, pEdad:number){
        this.nombre=pNombre;
        this.edad=pEdad;
    }
    public getNombre(){
        return this.nombre;
    }
    public getEdad(){
        return this.edad;
    }
    public setNombre(pNombre:string):void{
         this.nombre=pNombre;
    }
    public setEdad(pEdad:number):void{
        this.edad=pEdad;
    }
    public buscarMayorEdad(){
        let edadMayor=18;
        if (this.edad >= edadMayor) {
            return console.log('nombre: ', this.nombre,' ', this.edad);
            } else{
            console.log("No tiene 18 años o más")
            }
        }
}
class ArregloPersonas {
    public arrayindividuo: Persona[];
    constructor (pArrayIndividuo:Persona[]){
        this.arrayindividuo=pArrayIndividuo;
    }
    public buscarMayores(pArrayIndividuo:Persona[]){
        let edadMayor=18;
        let encontrado=false;
        for (let i = 0; i < pArrayIndividuo.length; i++) {
            if (this.arrayindividuo[i].getEdad() >= edadMayor && !encontrado) {
                console.log('nombre: ', this.arrayindividuo[i].getNombre(),', edad: ', this.arrayindividuo[i].getEdad());
            } else {!encontrado;
                //console.log("menores");
                //console.log('nombre: ', this.arrayindividuo[i].getNombre(),', edad: ', this.arrayindividuo[i].getEdad());
            }

        }
    }
}

let persona1 = new Persona("Julio",17);
let persona2 = new Persona("Fabiana",20);
let persona3 = new Persona("Estefania",18);
let persona4 = new Persona("Gustavo",23);
let persona5 = new Persona("Luisa",16);
let listaPersonas : Persona [] = [persona1,persona2,persona3,persona4,persona5];
let arregloIndividuos : ArregloPersonas = new ArregloPersonas(listaPersonas);
arregloIndividuos.buscarMayores(listaPersonas);

//console.log(listaPersonas);
//console.log(persona1.buscarMayorEdad());
