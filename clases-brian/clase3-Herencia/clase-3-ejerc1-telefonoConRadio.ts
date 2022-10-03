import {Telefono} from "./clase-3-ejerc1-telefonoPadre";

class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;
    private estadoRadio:boolean;

    constructor(pEstadoTelefono:boolean, pEstadoBateria:number, pFrecuenciaActual:number, pEstadoRadio:boolean){
        super (pEstadoTelefono,pEstadoBateria);
        this.frecuenciaActual=pFrecuenciaActual;
        this.estadoRadio=pEstadoRadio;
    }
    public verFrecuenciaActual():number{
        return this.frecuenciaActual
    }
    public setFrecuenciaActual(frecuenciaActual:number){
        this.frecuenciaActual=frecuenciaActual;
    }
    public encenderApagarRadio():void{
        if (this.estadoRadio===true){
            this.estadoRadio=false;
        }else{
            this.estadoRadio=true;
        }
    }
}

let telefonoConRadio1 : TelefonoConRadio = new TelefonoConRadio (true,35,103,true);
console.log("La frecuencia de la radio es: " +telefonoConRadio1.verFrecuenciaActual());
