class Automotor {
    protected patente:number;
    protected marca:string;
    protected modelo:string;
    protected cantRueda:number;

    constructor (patente:number, marca:string, modelo:string, cantRueda:number){
        this.patente=patente;
        this.marca=marca;
        this.modelo=modelo;
        this.cantRueda=cantRueda;
    }
    getPatente():number{
        return this.patente;
    }
    setPatente(patente:number):void{
        this.patente=patente;
    }
    getMarca():string{
        return this.marca;
    }
    setModelo(modelo:string):void{
        this.modelo=modelo;
    }
    getCantRuedas():number{
        return this.cantRueda;
    }
    setCantRueda(cantRueda:number):void{
        this.cantRueda=cantRueda;
    }
}
class Camiones extends Automotor {
    private acoplado:boolean;

    constructor (patente:number, marca:string, modelo:string, cantRueda:number,acoplado:boolean){
        
        this.acoplado=acoplado;
    }
}