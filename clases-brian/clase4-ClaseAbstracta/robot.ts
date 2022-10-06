export abstract class Robot{
    protected marca:string;
    protected voltaje:number;

    constructor(paramMarca:string, paramVoltaje:number){
        this.marca=paramMarca;
        this.voltaje=paramVoltaje;
    }
}

