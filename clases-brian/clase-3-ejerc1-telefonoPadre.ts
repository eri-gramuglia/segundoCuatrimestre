// ejercicio en clase: 21 de septiembre de 2022.

export class Telefono{
    private estaPrendido:boolean;
    private bateriaActual:number;

    constructor(pEstado:boolean, pBateriaActual:number){
        this.estaPrendido=pEstado;
        this.bateriaActual=pBateriaActual;
    }
    public prenderApagar():void{
        if (this.estaPrendido===true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=false;
        }
    }
    public medirBateria():number{
        return this.bateriaActual;    
    }
    
    public mandarMensaje():string{
        let mensaje : string ="Estoy llamando";
        return mensaje;
    }
    
    public hacerLlamada():string{
        let llamada : string =("Llamar urgente");
        return llamada;
    }
    
}
let telefono1 = new Telefono(true,35);
let telefono2 = new Telefono(false,0);

console.log ("****************************************************************");
console.log(telefono1.mandarMensaje()); 
console.log ("****************************************************************");
console.log(telefono2.hacerLlamada());
console.log ("****************************************************************");
console.log("Bateria: "+telefono1.medirBateria(), " %");
console.log ("****************************************************************");