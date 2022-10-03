
class Auto{
    private modelo:string;
    private marca:string;
    private anio:number;

    constructor(paramModelo:string, paramMarca:string, parametroAnio:number){
        this.modelo=paramModelo;
        this.marca=paramMarca;
        this.anio=parametroAnio;
    
        if(paramMarca === undefined){
        this.marca= "marca generica";
    } else{
        this.marca =  paramMarca;
    }
    if(parametroAnio === undefined){
        this.anio= -1;
    } else{
        this.anio =  parametroAnio;
    }
    }
    public setAnio(parametroAnio:number):void{
         this.anio = parametroAnio;
    }
    public getAnio():number{
        return this.anio;
    }
    public setMarca(paramMarca:string):void{
        this.marca=paramMarca;
    }
}
let autoDeGuido = new Auto("VW","Gol",2017);
let autoDeSergio = new Auto("Lamborguini",'',2018); // las  '' son para pasar vacío al parámetro, pero después hay q darle un valor a través de un método.

autoDeSergio.setMarca("Ferrari");

