import {Robot  } from "./robot";

export class RobotPileta extends Robot{

    constructor (paramMarca:string,paramVoltaje:number){
        super(paramMarca,paramVoltaje);
    }

    public limpiar():void{
        console.log("limpiando pileta");
        
    }
    public cargar(): void{
        console.log("conectado a corriente USB");
    }
}