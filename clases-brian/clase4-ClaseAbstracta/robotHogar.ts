import {Robot  } from "./robot";

export class RobotHogar extends Robot{

    constructor (paramMarca:string,paramVoltaje:number){
        super(paramMarca,paramVoltaje);
    }

    public limpiar():void{
        console.log("limpiando hogar");
        
    }
    public cargar(): void{
        console.log("conectado a corriente alterna");
    }
}