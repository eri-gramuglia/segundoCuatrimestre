interface Telefono {
     prender():void;
     apagar():void; 
     llamar(numero:string):void;        
}
class SmartPhone implements Telefono{
    
    public estaPrendido:boolean;
   
    constructor (estaPrendido:boolean){
        this.estaPrendido;
    }
    public prender(): void {
        this.estaPrendido===true;
        console.log("Está apagado");
        }
    public apagar(): void {
        this.estaPrendido===false;
        console.log("Está apagado");
    }
    public llamar(numero: string): void {
        this.numero="Está llamando";
    }
    sacarFoto():void{
        this.
    }
}
